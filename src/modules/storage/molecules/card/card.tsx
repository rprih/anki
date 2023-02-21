import { FC, useCallback, useState } from "react"
import { Pressable } from "react-native"
import { Swipeable } from "react-native-gesture-handler"
import styled, { DefaultTheme } from "styled-components/native"
import { Text } from "../../../../atoms/text"
import { hexToRGB } from "../../../../utils/color"
import { ListItemAction } from "../list-item-actions"

export interface CardProps {
  name: string
  status: "easy" | "normal" | "hard"
  onDelete: () => void
  onPress: () => void
}

export const Card: FC<CardProps> = ({ name, status, onDelete, onPress }) => {
  const [isPressed, setIsPressed] = useState(false)

  const renderActions = useCallback(
    () => <ListItemAction onDelete={onDelete} />,
    [onDelete],
  )

  return (
    <Container>
      <Line status={status} />
      <Swipeable
        renderRightActions={renderActions}
        containerStyle={{ flexGrow: 1 }}
      >
        <Wrapper
          isPressed={isPressed}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={onPress}
        >
          <Text.BodySmall>{name}</Text.BodySmall>
        </Wrapper>
      </Swipeable>
    </Container>
  )
}

const Container = styled.View`
  border: 0.5px solid ${({ theme }) => theme.Color.Neutral150};
  border-radius: 8px;
  flex-direction: row;
  overflow: hidden;
`

const Line = styled.View<{ status: CardProps["status"] }>`
  width: 2px;
  flex-shrink: 0;
  flex-grow: 0;
  background-color: ${({ theme, status }) => getLineColor(status, theme)};
`

const getLineColor = (status: CardProps["status"], theme: DefaultTheme) => {
  const HARDNESS_TO_COLOR: Record<CardProps["status"], string> = {
    hard: theme.Color.Attention500,
    normal: theme.Color.Main500,
    easy: theme.Color.Success500,
  }

  return HARDNESS_TO_COLOR[status]
}

const Wrapper = styled.Pressable<{ isPressed: boolean }>`
  flex-grow: 1;
  flex-direction: row;
  height: 64px;
  background-color: ${({ theme, isPressed }) =>
    isPressed ? hexToRGB(theme.Color.Neutral150, 1) : theme.Color.Neutral100};
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`
