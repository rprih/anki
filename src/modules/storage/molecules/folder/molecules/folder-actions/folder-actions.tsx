import { FC, useState } from "react"
import styled from "styled-components/native"
import { DeleteSvg } from "./icons/delete-svg"
import { OptionsSvg } from "./icons/options-svg"

export interface FolderActionsProps {
  onEdit: () => void
  onDelete: () => void
}

export const FolderActions: FC<FolderActionsProps> = ({ onEdit, onDelete }) => {
  const [isEditPressed, setIsEditPressed] = useState(false)
  const [isDeletePressed, setIsDeletePressed] = useState(false)

  return (
    <Container>
      <EditAction
        onPressIn={() => setIsEditPressed(true)}
        onPressOut={() => setIsEditPressed(false)}
        onPress={onEdit}
        isPressed={isEditPressed}
      >
        <OptionsSvg />
      </EditAction>
      <DeleteAction
        onPressIn={() => setIsDeletePressed(true)}
        onPressOut={() => setIsDeletePressed(false)}
        onPress={onDelete}
        isPressed={isDeletePressed}
      >
        <DeleteSvg />
      </DeleteAction>
    </Container>
  )
}

const Container = styled.View`
  flex-direction: row;
`

const Action = styled.Pressable`
  width: 64px;
  height: 64px;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
`

const DeleteAction = styled(Action)<{ isPressed: boolean }>`
  background-color: ${({ isPressed, theme }) =>
    isPressed ? theme.Color.Attention500 : theme.Color.Attention400};
`

const EditAction = styled(Action)<{ isPressed: boolean }>`
  background-color: ${({ isPressed, theme }) =>
    isPressed ? theme.Color.Main500 : theme.Color.Main400};
`
