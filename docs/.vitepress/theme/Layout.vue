<!-- docs/.vitepress/theme/Layout.vue -->
<script setup lang="ts">
import { ref } from "vue";
import DefaultTheme from "vitepress/theme";
import NavThemeSwitcher from "./components/NavThemeSwitcher.vue";
import DorkCodeEnhancer from "./components/DorkCodeEnhancer.vue";
import DorkSyntaxHighlighter from "./components/DorkSyntaxHighlighter.vue";
import OnboardingTutorial from "./components/OnboardingTutorial.vue";

const { Layout } = DefaultTheme;
const tutorialRef = ref<InstanceType<typeof OnboardingTutorial> | null>(null);

function startTutorial() {
  tutorialRef.value?.startTutorial();
}
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <NavThemeSwitcher />
    </template>
    <template #doc-after>
      <DorkCodeEnhancer />
      <DorkSyntaxHighlighter />
    </template>
    <template #layout-bottom>
      <OnboardingTutorial ref="tutorialRef" />
    </template>
  </Layout>
</template>
