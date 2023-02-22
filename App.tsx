import { useColorScheme } from "react-native"
import { theme } from "./src/styles/theme"
import { ThemeProvider } from "styled-components"
import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { Auth } from "./src/modules/auth/organisms/auth"
import { getAuthToken } from "./src/services/auth"
import { useEffect, useState } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { TabNavigationIcon } from "./src/atoms/tab-navigation-icon"
import { Storage } from "./src/modules/storage"
import { Settings } from "./src/modules/settings"
import { Feed } from "./src/modules/feed"
import { DefaultNavigationHeader } from "./src/organisms/default-navigation-header"

const Tab = createBottomTabNavigator()

export default function App() {
  const colorScheme = useColorScheme() ?? "light"
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAuthToken().then((token) => setIsLoading(false))
  }, [setIsLoading])

  // if (isLoading) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   )
  // }

  return (
    <ThemeProvider theme={theme[colorScheme]}>
      <BottomSheetModalProvider>
        <NavigationContainer
          theme={{
            dark: colorScheme === "dark",
            colors: {
              ...DefaultTheme.colors,
              card: theme[colorScheme].Color.Neutral100,
              border: theme[colorScheme].Color.Neutral150,
              text: theme[colorScheme].Color.Neutral500,
              primary: theme[colorScheme].Color.Main500,
              background: theme[colorScheme].Color.Neutral100,
            },
          }}
        >
          {/* <Auth /> */}
          <Tab.Navigator>
            <Tab.Screen
              name={"Feed"}
              component={Feed}
              options={{
                tabBarIcon: TabNavigationIcon.Feed,
                header: DefaultNavigationHeader,
                headerTitle: "Feed",
              }}
            />
            <Tab.Screen
              name={"Storage"}
              component={Storage}
              options={{
                tabBarIcon: TabNavigationIcon.Storage,
                headerShown: false,
              }}
            />
            <Tab.Screen
              name={"Settings"}
              component={Settings}
              options={{
                tabBarIcon: TabNavigationIcon.Settings,
                header: DefaultNavigationHeader,
                headerTitle: "Settings",
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </ThemeProvider>
  )
}
