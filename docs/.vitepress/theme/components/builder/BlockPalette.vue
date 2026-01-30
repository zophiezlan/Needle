<script setup lang="ts">
import { useQueryBuilder, type BlockType } from "../../composables/useQueryBuilder";

const { addBlock } = useQueryBuilder();

const coreBlocks: { type: BlockType; icon: string; label: string; color: string }[] = [
  { type: "site", icon: "🌐", label: "Site", color: "var(--block-site)" },
  { type: "filetype", icon: "📄", label: "File", color: "var(--block-filetype)" },
  { type: "keyword", icon: "💬", label: "Keywords", color: "var(--block-keyword)" },
  { type: "date", icon: "📅", label: "Date", color: "var(--block-date)" },
];

const operatorBlocks: { type: BlockType; icon: string; label: string; color: string }[] = [
  { type: "intitle", icon: "🧷", label: "In Title", color: "var(--block-intitle)" },
  { type: "inurl", icon: "🔗", label: "In URL", color: "var(--block-inurl)" },
  { type: "intext", icon: "📝", label: "In Text", color: "var(--block-intext)" },
  { type: "related", icon: "🧭", label: "Related", color: "var(--block-related)" },
  { type: "cache", icon: "🗂️", label: "Cache", color: "var(--block-cache)" },
  { type: "source", icon: "📰", label: "Source", color: "var(--block-source)" },
  { type: "imagesize", icon: "🖼️", label: "Image Size", color: "var(--block-imagesize)" },
  { type: "around", icon: "📏", label: "Around", color: "var(--block-around)" },
  { type: "exclude", icon: "🚫", label: "Exclude", color: "var(--block-exclude)" },
  { type: "or", icon: "➕", label: "OR Group", color: "var(--block-or)" },
  { type: "exact", icon: "🎯", label: "Exact", color: "var(--block-exact)" },
  { type: "wildcard", icon: "✳️", label: "Wildcard", color: "var(--block-wildcard)" },
];

function handleAdd(type: BlockType) {
  addBlock(type);
}
</script>

<template>
  <div class="block-palette">
    <span class="palette-label">+ Core Operators</span>
    <div class="palette-buttons">
      <button
        v-for="bt in coreBlocks"
        :key="bt.type"
        class="palette-btn"
        :style="{ '--block-color': bt.color }"
        @click="handleAdd(bt.type)"
      >
        <span class="btn-icon">{{ bt.icon }}</span>
        <span class="btn-label">{{ bt.label }}</span>
      </button>
    </div>

    <div class="palette-section">
      <span class="palette-label">+ Advanced Operators</span>
      <div class="palette-buttons">
        <button
          v-for="bt in operatorBlocks"
          :key="bt.type"
          class="palette-btn"
          :style="{ '--block-color': bt.color }"
          @click="handleAdd(bt.type)"
        >
          <span class="btn-icon">{{ bt.icon }}</span>
          <span class="btn-label">{{ bt.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block-palette {
  padding: 16px;
  border-top: 1px solid var(--border-subtle);
}

.palette-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.palette-buttons {
  display: flex;
  gap: 8px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.palette-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 16px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
  background: var(--bg-elevated);
  cursor: pointer;
  transition: all var(--transition-fast);
  min-width: 70px;
}

.palette-btn:hover {
  border-color: var(--block-color);
  box-shadow: 0 0 12px color-mix(in srgb, var(--block-color) 30%, transparent);
}

.btn-icon {
  font-size: 20px;
}

.btn-label {
  font-size: 11px;
  color: var(--text-secondary);
}

.palette-section {
  margin-top: 16px;
}
</style>
