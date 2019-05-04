import Typography from "typography"
import CodePlugin from 'typography-plugin-code'
import githubTheme from "typography-theme-github"

githubTheme.plugins = [
    new CodePlugin(),
  ]

const typography = new Typography(githubTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography