import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs"
import { NativeStackHeaderProps } from "@react-navigation/native-stack"
import { FC, useCallback } from "react"
import { Text } from "../../atoms/text"
import { NavigationHeader } from "../../molecules/navigation-header"

export type DefaultNavigationHeaderProps =
  | NativeStackHeaderProps
  | BottomTabHeaderProps

export const DefaultNavigationHeader: FC<DefaultNavigationHeaderProps> = ({
  options,
  route,
}) => {
  const title =
    typeof options.headerTitle === "string" ? options.headerTitle : route.name

  return (
    <NavigationHeader>
      <Text.Title>{title}</Text.Title>
    </NavigationHeader>
  )
}
