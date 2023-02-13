import { NativeStackHeaderProps } from "@react-navigation/native-stack"
import { FC } from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { StorageNavigationStack } from "../../types/storage-navigation-stack"
import { NavigationHeader } from "../../molecules/navigation-header"
import { Text } from "../../../../atoms/text"
import { useCurrectTheme } from "../../../../hooks/use-current-theme"
import styled from "styled-components/native"
import { Icon } from "../../atoms/icon"
import { TouchableOpacity } from "react-native-gesture-handler"

export const FolderNavigationHeader: FC<NativeStackHeaderProps> = ({
  route,
  navigation,
}) => {
  const params = route.params as StorageNavigationStack["Folder"]

  return (
    <NavigationHeader>
      <Left>
        <TouchableOpacity
          onPress={navigation.goBack}
          style={{ paddingRight: 8 }}
        >
          <BackButton />
        </TouchableOpacity>
        <Text.Title numberOfLines={1}>{params.name}</Text.Title>
      </Left>
      <Right>
        <Icon.CardsAmount />
        <Text.Menu style={{ marginLeft: 8 }}>{params.amount}</Text.Menu>
      </Right>
    </NavigationHeader>
  )
}

const BackButton = (props: SvgProps) => {
  const theme = useCurrectTheme()

  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="m14 8-4 4 4 4"
        stroke={theme.Color.Neutral300}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

const Left = styled.View`
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  padding-right: 48px;
`

const Right = styled.View`
  flex-direction: row;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
`
