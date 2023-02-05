import { StyleSheet, useColorScheme, View, Text } from "react-native"
import { theme } from "./src/styles/theme"
import { ThemeProvider } from "styled-components"
import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { Auth } from "./src/modules/auth/organisms/auth"

export default function App() {
  const colorScheme = useColorScheme() ?? "light"

  return (
    <NavigationContainer
      theme={{
        dark: colorScheme === "dark",
        colors: {
          ...DefaultTheme.colors,
          background: theme[colorScheme].Color.Neutral100,
        },
      }}
    >
      <ThemeProvider theme={theme[colorScheme]}>
        <Auth />
      </ThemeProvider>
    </NavigationContainer>
  )
}
