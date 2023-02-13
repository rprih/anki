import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { FC } from "react"
import { View } from "react-native"
import { StorageNavigationStack } from "../../types/storage-navigation-stack"

type FolderScreenProps = NativeStackScreenProps<
  StorageNavigationStack,
  "Folder"
>

export const FolderScreen: FC<FolderScreenProps> = () => {
  return <View />
}
