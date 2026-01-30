import { reactive, computed } from "vue";
import { SYNONYM_GROUPS, findSynonyms } from "../data/synonyms";

export type BlockType =
  | "site"
  | "filetype"
  | "keyword"
  | "date"
  | "intitle"
  | "inurl"
  | "intext"
  | "related"
  | "cache"
  | "source"
  | "imagesize"
  | "around"
  | "exclude"
  | "or"
  | "exact"
  | "wildcard";

export interface QueryBlock {
  id: string;
  type: BlockType;
  value: string;
  options: Record<string, any>;
}

interface BuilderState {
  blocks: QueryBlock[];
  selectedBlockId: string | null;
}

let builderState: BuilderState | null = null;
let blockIdCounter = 0;

export function useQueryBuilder() {
  if (!builderState) {
    builderState = reactive<BuilderState>({
      blocks: [],
      selectedBlockId: null,
    });
  }

  const state = builderState;

  // Generate query string from blocks
  const queryString = computed(() => {
    return state.blocks
      .map((block) => {
        switch (block.type) {
          case "site":
            const wildcard = block.options.wildcard ? "*." : "";
            return `site:${wildcard}${block.value}`;
          case "filetype":
            return `filetype:${block.value}`;
          case "keyword":
            if (block.options.useSynonyms) {
              const group = findSynonyms(block.value);
              if (group) return group.pattern;
            }
            if (block.options.exact) return `"${block.value}"`;
            return block.value;
          case "date":
            if (block.options.type === "after") return `after:${block.value}`;
            if (block.options.type === "before") return `before:${block.value}`;
            return "";
          case "intitle":
            return block.value ? `intitle:${block.value}` : "";
          case "inurl":
            return block.value ? `inurl:${block.value}` : "";
          case "intext":
            return block.value ? `intext:${block.value}` : "";
          case "related":
            return block.value ? `related:${block.value}` : "";
          case "cache":
            return block.value ? `cache:${block.value}` : "";
          case "source":
            return block.value ? `source:${block.value}` : "";
          case "imagesize":
            if (block.options.width && block.options.height) {
              return `imagesize:${block.options.width}x${block.options.height}`;
            }
            return block.value ? `imagesize:${block.value}` : "";
          case "around": {
            const termA = block.options.termA || "";
            const termB = block.options.termB || "";
            const distance = block.options.distance || 5;
            if (termA && termB) {
              return `"${termA}" AROUND(${distance}) "${termB}"`;
            }
            return block.value || "";
          }
          case "exclude":
            if (!block.value) return "";
            if (block.options.exact) return `-"${block.value}"`;
            return `-${block.value}`;
          case "or": {
            const termA = block.options.termA || "";
            const termB = block.options.termB || "";
            if (termA && termB) return `(${termA} OR ${termB})`;
            return block.value || "";
          }
          case "exact":
            return block.value ? `"${block.value}"` : "";
          case "wildcard":
            return block.value || "*";
          default:
            return block.value;
        }
      })
      .filter((s) => s.length > 0)
      .join(" ");
  });

  function addBlock(type: BlockType, value = "", options: Record<string, any> = {}) {
    const id = `block-${++blockIdCounter}`;
    state.blocks.push({ id, type, value, options });
    state.selectedBlockId = id;
    return id;
  }

  function updateBlock(id: string, updates: Partial<Omit<QueryBlock, "id">>) {
    const block = state.blocks.find((b) => b.id === id);
    if (block) {
      Object.assign(block, updates);
    }
  }

  function removeBlock(id: string) {
    const idx = state.blocks.findIndex((b) => b.id === id);
    if (idx !== -1) {
      state.blocks.splice(idx, 1);
      if (state.selectedBlockId === id) {
        state.selectedBlockId = state.blocks[0]?.id || null;
      }
    }
  }

  function selectBlock(id: string | null) {
    state.selectedBlockId = id;
  }

  function clearBlocks() {
    state.blocks = [];
    state.selectedBlockId = null;
  }

  function loadFromQuery(query: string) {
    clearBlocks();

    // Parse site:
    const siteMatch = query.match(/site:(\*\.)?([^\s]+)/i);
    if (siteMatch) {
      addBlock("site", siteMatch[2], { wildcard: !!siteMatch[1] });
    }

    // Parse filetype:
    const filetypeMatch = query.match(/filetype:([^\s]+)/i);
    if (filetypeMatch) {
      addBlock("filetype", filetypeMatch[1]);
    }

    // Parse after:/before:
    const afterMatch = query.match(/after:([^\s]+)/i);
    if (afterMatch) {
      addBlock("date", afterMatch[1], { type: "after" });
    }
    const beforeMatch = query.match(/before:([^\s]+)/i);
    if (beforeMatch) {
      addBlock("date", beforeMatch[1], { type: "before" });
    }

    // Parse intitle/inurl/intext/related/cache/source/imagesize
    const intitleMatch = query.match(/intitle:([^\s]+)/i);
    if (intitleMatch) addBlock("intitle", intitleMatch[1]);
    const inurlMatch = query.match(/inurl:([^\s]+)/i);
    if (inurlMatch) addBlock("inurl", inurlMatch[1]);
    const intextMatch = query.match(/intext:([^\s]+)/i);
    if (intextMatch) addBlock("intext", intextMatch[1]);
    const relatedMatch = query.match(/related:([^\s]+)/i);
    if (relatedMatch) addBlock("related", relatedMatch[1]);
    const cacheMatch = query.match(/cache:([^\s]+)/i);
    if (cacheMatch) addBlock("cache", cacheMatch[1]);
    const sourceMatch = query.match(/source:([^\s]+)/i);
    if (sourceMatch) addBlock("source", sourceMatch[1]);
    const imageMatch = query.match(/imagesize:([^\s]+)/i);
    if (imageMatch) addBlock("imagesize", imageMatch[1]);

    // Parse AROUND
    const aroundMatch = query.match(/"([^"]+)"\s+AROUND\((\d+)\)\s+"([^"]+)"/i);
    if (aroundMatch) {
      addBlock("around", "", {
        termA: aroundMatch[1],
        termB: aroundMatch[3],
        distance: Number(aroundMatch[2]),
      });
    }

    // Parse exclusion (first)
    const excludeMatch = query.match(/(^|\s)-("[^"]+"|[^\s]+)/);
    if (excludeMatch) {
      const raw = excludeMatch[2];
      if (raw.startsWith('"')) {
        addBlock("exclude", raw.replace(/(^"|"$)/g, ""), { exact: true });
      } else {
        addBlock("exclude", raw);
      }
    }

    // Extract remaining keywords (rough extraction)
    let keywords = query
      .replace(/site:[^\s]+/gi, "")
      .replace(/filetype:[^\s]+/gi, "")
      .replace(/after:[^\s]+/gi, "")
      .replace(/before:[^\s]+/gi, "")
      .replace(/intitle:[^\s]+/gi, "")
      .replace(/inurl:[^\s]+/gi, "")
      .replace(/intext:[^\s]+/gi, "")
      .replace(/related:[^\s]+/gi, "")
      .replace(/cache:[^\s]+/gi, "")
      .replace(/source:[^\s]+/gi, "")
      .replace(/imagesize:[^\s]+/gi, "")
      .replace(/"[^"]+"\s+AROUND\(\d+\)\s+"[^"]+"/gi, "")
      .replace(/(^|\s)-("[^"]+"|[^\s]+)/g, "")
      .trim();

    if (keywords) {
      addBlock("keyword", keywords, { useSynonyms: false, exact: keywords.startsWith('"') });
    }
  }

  return {
    blocks: computed(() => state.blocks),
    selectedBlockId: computed(() => state.selectedBlockId),
    selectedBlock: computed(() => state.blocks.find((b) => b.id === state.selectedBlockId)),
    queryString,
    addBlock,
    updateBlock,
    removeBlock,
    selectBlock,
    clearBlocks,
    loadFromQuery,
  };
}
