import { FC } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StorageNavigationStack } from "./types/storage-navigation-stack"
import { FoldersListScreen } from "./organisms/folders-list-screen"
import { FolderNavigationHeader } from "./organisms/folder-navigation-header"
import { FoldersListNavigationHeader } from "./organisms/folders-list-navigation-header"
import { CardsListScreen } from "./organisms/cards-list-screen"

const Stack = createNativeStackNavigator<StorageNavigationStack>()

export const Storage: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ header: FoldersListNavigationHeader }}
        name="FoldersList"
        component={FoldersListScreen}
      />
      <Stack.Screen
        options={{ header: FolderNavigationHeader }}
        name="CardsList"
        component={CardsListScreen}
      />
    </Stack.Navigator>
  )
}
