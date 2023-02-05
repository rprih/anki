// styled.d.ts
import "styled-components"
import { Color } from "./src/styles/color"
import { CertainTheme } from "./src/styles/theme"
interface IPalette {
  main: string
  contrastText: string
}
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CertainTheme {}
}
