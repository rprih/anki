import { Color, DarkColor, LightColor } from "./color"

export type CertainTheme = {
  Color: Color
}

export interface Theme {
  dark: CertainTheme
  light: CertainTheme
}

export const theme: Theme = {
  dark: {
    Color: DarkColor,
  },
  light: {
    Color: LightColor,
  },
}
