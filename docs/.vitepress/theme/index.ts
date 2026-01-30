// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { onMounted } from 'vue'
import './styles/vars.css'
import './styles/base.css'
import './styles/components.css'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import { useSettings } from './composables/useSettings'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ThemeSwitcher', ThemeSwitcher)
  },
  setup() {
    onMounted(() => {
      const { initialize } = useSettings()
      initialize()
    })
  },
}
