import DefaultTheme from 'vitepress/theme'
import { App } from 'vue'
import componentPreview from 'vitepress-demo-preview-component'
import 'vitepress-demo-preview-component/dist/style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(componentPreview)
  }
}
