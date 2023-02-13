import {
  ElementType,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useState,
} from "react"
import { PressableProps, View } from "react-native"
import { StyledComponent } from "styled-components"
import styled, { DefaultTheme } from "styled-components/native"

export type ButtonVariant = "primary" | "secondary" | "destructive"

export interface ButtonProps extends PressableProps {
  variant?: ButtonVariant
}

export const Button = forwardRef<View, ButtonProps>(
  ({ children, variant = "primary", onPressIn, onPressOut, ...props }, ref) => {
    const [isPressed, setIsPressed] = useState(false)

    const Component = VARIANT_TO_COMPONENT[variant]

    return (
      <Component
        onPressIn={(e) => {
          setIsPressed(true)
          onPressIn?.(e)
        }}
        onPressOut={(e) => {
          setIsPressed(false)
          onPressOut?.(e)
        }}
        isPressed={isPressed}
        {...props}
        ref={ref}
      >
        {children}
      </Component>
    )
  },
)

const InternalButton = styled.Pressable<{
  isPressed: boolean
}>`
  flex-direction: row;
  justify-content: center;
  padding: 16px 0;
  border-radius: 16px;
`

const PrimaryButton = styled(InternalButton)`
  background-color: ${({ theme, isPressed }) =>
    isPressed ? theme.Color.Main600 : theme.Color.Main500};
  border: 2px solid
    ${({ theme, isPressed }) =>
      isPressed ? theme.Color.Main600 : theme.Color.Main500};
`

const DestructiveButton = styled(InternalButton)`
  background-color: ${({ theme, isPressed }) =>
    isPressed ? theme.Color.Attention600 : theme.Color.Attention500};
  border: 2px solid
    ${({ theme, isPressed }) =>
      isPressed ? theme.Color.Attention600 : theme.Color.Attention500};
`

const SecondaryButton = styled(InternalButton)`
  background-color: ${({ theme, isPressed }) =>
    isPressed ? theme.Color.Neutral150 : theme.Color.Neutral100};
  border: 2px solid ${({ theme }) => theme.Color.Neutral150};
`

const VARIANT_TO_COMPONENT: Record<
  ButtonVariant,
  StyledComponent<
    ForwardRefExoticComponent<PressableProps & RefAttributes<View>>,
    DefaultTheme,
    {
      isPressed: boolean
    },
    never
  >
> = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  destructive: DestructiveButton,
}
