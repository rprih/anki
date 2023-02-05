import { useColorScheme } from "react-native"
import { theme } from "../styles/theme"

export const useCurrectTheme = () => {
  const colorScheme = useColorScheme() ?? "light"

  return theme[colorScheme]
}
