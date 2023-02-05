export const UniversalColorVariants = [
  "Main900",
  "Main800",
  "Main700",
  "Main600",
  "Main500",
  "Main400",
  "Main300",
  "Main200",
  "Main100",
  "Main0",
  "Attention100",
  "Attention300",
  "Attention400",
  "Attention500",
  "Attention600",
  "Attention700",
  "Attention800",
] as const

export const ColorVariants = [
  "Neutral100",
  "Neutral150",
  "Neutral200",
  "Neutral300",
  "Neutral400",
  "Neutral500",
  ...UniversalColorVariants,
] as const

export const UniversalColor: Record<
  (typeof UniversalColorVariants)[number],
  string
> = {
  Main0: "#fff",
  Main100: "#E0E0FC",
  Main200: "#C1C2F9",
  Main300: "#A1A3F7",
  Main400: "#8285F4",
  Main500: "#6366F1",
  Main600: "#4F52C1",
  Main700: "#3B3D91",
  Main800: "#282960",
  Main900: "#141430",
  Attention100: "#F9B4B4",
  Attention300: "#F58F8F",
  Attention400: "#F26969",
  Attention500: "#EF4444",
  Attention600: "#BF3636",
  Attention700: "#8F2929",
  Attention800: "#601B1B",
} as const

export type Color = Record<(typeof ColorVariants)[number], string>

export const LightColor: Color = {
  Neutral100: "#FFFFFF",
  Neutral150: "#E8E8E8",
  Neutral200: "#D3D3D3",
  Neutral300: "#A6A6A6",
  Neutral400: "#7A7A7A",
  Neutral500: "#212121",
  ...UniversalColor,
} as const

export const DarkColor: Color = {
  Neutral100: "#2E2E2E",
  Neutral150: "#4D4D4D",
  Neutral200: "#999999",
  Neutral300: "#A6A6A6",
  Neutral400: "#C9C9C9",
  Neutral500: "#FFFFFF",
  ...UniversalColor,
}
