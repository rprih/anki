import { FC, useCallback, useState } from "react"
import { Pressable, PressableProps, View } from "react-native"
import { Swipeable } from "react-native-gesture-handler"
import styled from "styled-components/native"
import { Text } from "../../../../atoms/text"
import { hexToRGB } from "../../../../utils/color"
import { Icon } from "../../atoms/icon"
import { FolderActions } from "./molecules/folder-actions"

export interface FolderStatus {
  easy: number
  hard: number
  normal: number
}

export interface FolderProps extends PressableProps {
  name: string
  cardsAmount: number
  status: FolderStatus
  onEdit: () => void
  onDelete: () => void
}

export const Folder: FC<FolderProps> = ({
  name,
  cardsAmount,
  status,
  onDelete,
  onEdit,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const renderActions = useCallback(
    () => <FolderActions onDelete={onDelete} onEdit={onEdit} />,
    [],
  )

  return (
    <Container>
      <Swipeable renderRightActions={renderActions}>
        <Pressable
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          {...props}
        >
          <Wrapper isPressed={isPressed}>
            <Left>
              <Name numberOfLines={2}>{name}</Name>
            </Left>
            <Right>
              <Amount>
                <Icon.CardsAmount style={{ marginRight: 6 }} />
                <Text.Menu>{cardsAmount}</Text.Menu>
              </Amount>
              <Status>
                <StatusHard>{status.hard}</StatusHard>
                <StatusNormal>{status.normal}</StatusNormal>
                <StatusEasy>{status.easy}</StatusEasy>
              </Status>
            </Right>
          </Wrapper>
        </Pressable>
      </Swipeable>
    </Container>
  )
}

const Container = styled.View`
  border: 0.5px solid ${({ theme }) => theme.Color.Neutral150};
  border-radius: 8px;
  overflow: hidden;
`

const Wrapper = styled.View<{ isPressed: boolean }>`
  position: relative;
  height: 64px;
  background-color: ${({ theme, isPressed }) =>
    isPressed ? hexToRGB(theme.Color.Neutral150, 1) : theme.Color.Neutral100};
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`

const Left = styled.View`
  flex: 1;
  margin-right: 16px;
`

const Name = styled(Text.Input)`
  max-height: 56px;
  word-break: break-all;
`

const Right = styled.View`
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-end;
`

const Amount = styled.View`
  flex-direction: row;
  align-items: center;
`

const Status = styled.View`
  flex-direction: row;
  margin-top: 8px;
`

const StatusHard = styled(Text.Menu)`
  color: ${({ theme }) => theme.Color.Attention500};
`

const StatusNormal = styled(Text.Menu)`
  color: ${({ theme }) => theme.Color.Main500};
  margin-left: 8px;
`

const StatusEasy = styled(Text.Menu)`
  color: #1fb26a;
  margin-left: 8px;
`
