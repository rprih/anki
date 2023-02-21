import { forwardRef, useState } from "react"
import { TextInput, TextInputProps, useColorScheme } from "react-native"
import styled from "styled-components/native"

export interface InputProps extends TextInputProps {
  isError?: boolean
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ style, onFocus, onBlur, isError, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
      <StyledInput
        style={style}
        isFocused={isFocused}
        isError={isError ?? false}
        onFocus={(...params) => {
          setIsFocused(true)
          onFocus?.(...params)
        }}
        onBlur={(...params) => {
          setIsFocused(false)
          onBlur?.(...params)
        }}
        ref={ref}
        {...props}
      />
    )
  },
)

const StyledInput = styled.TextInput<
  TextInputProps & { isFocused: boolean; isError: boolean }
>`
  ${({ isFocused, isError, theme }) => {
    if (isFocused) {
      return `border: 1px solid ${theme.Color.Main500};`
    }

    if (isError) {
      return `border: 1px solid ${theme.Color.Attention500};`
    }

    return `border: 1px solid ${theme.Color.Neutral150};`
  }}

  border-radius: 8px;
  padding: 16px 12px;
  color: ${({ theme }) => theme.Color.Neutral500};
  background-color: ${({ theme }) => theme.Color.Neutral100};
`
