<!-- docs/.vitepress/theme/components/DorkSyntaxHighlighter.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { highlightDorkText, isDorkQuery } from "../utils/dorkscript";

// Highlight dork syntax in a code element
function highlightDork(codeEl: HTMLElement) {
  const text = codeEl.textContent || "";

  if (!isDorkQuery(text)) return;

  // Mark the parent as a dork block for CSS
  const parent = codeEl.closest('div[class*="language-"]');
  if (parent) {
    parent.classList.add("language-dork");
  }

  codeEl.innerHTML = highlightDorkText(text);
}

function highlightAllDorks() {
  // Find all txt/text/dork code blocks
  const codeBlocks = document.querySelectorAll(
    'div[class*="language-txt"] code, div[class*="language-text"] code, div[class*="language-dork"] code'
  );

  codeBlocks.forEach((code) => {
    // Skip if already highlighted
    if (code.querySelector(".dork-operator")) return;
    highlightDork(code as HTMLElement);
  });
}

let observer: MutationObserver | null = null;

onMounted(() => {
  // Initial highlighting
  setTimeout(highlightAllDorks, 100);

  // Re-highlight on DOM changes (SPA navigation)
  observer = new MutationObserver(() => {
    setTimeout(highlightAllDorks, 100);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <div style="display: none"></div>
</template>

<style>
/* DorkScript Syntax Highlighting */
.language-dork code,
div[class*="language-txt"].language-dork code {
  color: var(--text-primary);
}

/* Operators (site:, filetype:, etc.) */
.dork-operator {
  color: #14b8a6;
  font-weight: 600;
}

/* Boolean operators (OR, AND) */
.dork-boolean {
  color: #ef4444;
  font-weight: 700;
}

/* Exclusion operator (-) */
.dork-exclusion {
  color: #ef4444;
  font-weight: 700;
}

/* Quoted strings */
.dork-string {
  color: #84cc16;
}

/* Wildcards (*) */
.dork-wildcard {
  color: #f43f5e;
  font-weight: 700;
}

/* Parentheses */
.dork-paren {
  color: #a78bfa;
  font-weight: 600;
}

/* Add a subtle indicator that this is a dork query */
.language-dork::before {
  content: "dork" !important;
  color: var(--accent) !important;
}
</style>
