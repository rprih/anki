import { NativeStackHeaderProps } from "@react-navigation/native-stack"
import { FC } from "react"
import { Text } from "../../../../atoms/text"
import { NavigationHeader } from "../../molecules/navigation-header"

export type StorageNavigationHeaderProps = NativeStackHeaderProps

export const FoldersListNavigationHeader: FC<
  StorageNavigationHeaderProps
> = () => {
  return (
    <NavigationHeader>
      <Text.Title>Storage</Text.Title>
    </NavigationHeader>
  )
}
