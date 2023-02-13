import { FC, useState } from "react"
import { PressableProps } from "react-native"
import styled from "styled-components/native"

export const Trigger: FC<PressableProps> = ({
  children,
  onPressIn,
  onPressOut,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <TriggerInternal
      {...props}
      onPressIn={(e) => {
        onPressIn?.(e)
        setIsPressed(true)
      }}
      onPressOut={(e) => {
        onPressOut?.(e)
        setIsPressed(false)
      }}
      isPressed={isPressed}
    >
      {children}
    </TriggerInternal>
  )
}

const TriggerInternal = styled.Pressable<{ isPressed: boolean }>`
  background-color: ${({ theme, isPressed }) =>
    isPressed ? theme.Color.Main600 : theme.Color.Main500};
  border-radius: 24px;
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
`
