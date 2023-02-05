import { forwardRef } from "react"
import {
  TouchableHighlight,
  TouchableHighlightProps,
  useColorScheme,
} from "react-native"
import styled from "styled-components/native"
import { useCurrectTheme } from "../../hooks/use-current-theme"

export type ButtonVariant = "primary" | "secondary"

export interface ButtonProps extends TouchableHighlightProps {
  variant?: ButtonVariant
}

export const Button = forwardRef<TouchableHighlight, ButtonProps>(
  ({ children, variant = "primary", ...props }, ref) => {
    const theme = useCurrectTheme()

    const Component = variant === "primary" ? PrimaryButton : SecondaryButton
    const underlayColor =
      variant === "primary" ? theme.Color.Main600 : theme.Color.Neutral150

    return (
      <Component {...props} ref={ref} underlayColor={underlayColor}>
        {children}
      </Component>
    )
  },
)

const InternalButton = styled.TouchableHighlight<ButtonProps>`
  flex-direction: row;
  justify-content: center;
  padding: 16px 0;
  border-radius: 16px;
`

const PrimaryButton = styled(InternalButton)`
  background-color: ${({ theme }) => theme.Color.Main500};
  border: 2px solid ${({ theme }) => theme.Color.Main500};
`
const SecondaryButton = styled(InternalButton)`
  background-color: ${({ theme }) => theme.Color.Neutral100};
  border: 2px solid ${({ theme }) => theme.Color.Neutral150};
`
