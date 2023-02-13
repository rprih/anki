import { FC, useState } from "react"
import styled from "styled-components/native"
import { AddIcon } from "./icons"
import { AddCardIcon } from "./icons/add-card-icon"
import { AddFolderIcon } from "./icons/add-folder-icon"
import { Trigger } from "./trigger"

export interface FloatingMenuProps {
  onAddCard?: () => void
  onAddFolder?: () => void
}

const Main: FC<FloatingMenuProps> = ({ onAddCard, onAddFolder }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Container>
      <Wrapper>
        {isVisible && (
          <Content>
            {onAddCard && (
              <Item onPress={onAddCard}>
                <AddCardIcon />
              </Item>
            )}
            {onAddFolder && (
              <Item onPress={onAddFolder}>
                <AddFolderIcon />
              </Item>
            )}
          </Content>
        )}
      </Wrapper>
      <Trigger onPress={() => setIsVisible((v) => !v)}>
        <AddIcon />
      </Trigger>
    </Container>
  )
}

const Container = styled.View`
  bottom: 32px;
  right: 25px;
  position: absolute;
  align-items: flex-end;
`

const Wrapper = styled.View`
  position: relative;
`

const Content = styled.View`
  position: absolute;
  margin-bottom: 16px;
  border-radius: 24px;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.Color.Neutral100};
  border: 0.5px solid ${({ theme }) => theme.Color.Neutral150};
`

const Item = styled.TouchableOpacity`
  flex: 1;
  width: 56px;
  height: 60px;
  justify-content: center;
  align-items: center;
`

export const FloatingMenu = Object.assign(Main, { Item })
