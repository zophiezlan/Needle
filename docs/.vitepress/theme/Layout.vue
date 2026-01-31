<!-- docs/.vitepress/theme/Layout.vue -->
<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import NavThemeSwitcher from "./components/NavThemeSwitcher.vue";
import DorkCodeEnhancer from "./components/DorkCodeEnhancer.vue";
import DorkSyntaxHighlighter from "./components/DorkSyntaxHighlighter.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <div class="theme-switcher-nav">
        <NavThemeSwitcher />
      </div>
    </template>
    <template #sidebar-nav-after>
      <div class="theme-switcher-sidebar">
        <NavThemeSwitcher />
      </div>
    </template>
    <template #doc-after>
      <DorkCodeEnhancer />
      <DorkSyntaxHighlighter />
    </template>
  </Layout>
</template>

<style scoped>
/* Mobile First: Show in Nav, Hide in Sidebar */
.theme-switcher-nav {
  display: block;
}
.theme-switcher-sidebar {
  display: none;
}

/* Desktop: Hide in Nav, Show in Sidebar */
@media (min-width: 960px) {
  .theme-switcher-nav {
    display: none;
  }
  .theme-switcher-sidebar {
    display: block;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--vp-c-divider);
  }
}
</style>
