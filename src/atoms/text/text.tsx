import { forwardRef } from "react"
import { Text as NativeText, TextProps as NativeTextProps } from "react-native"
import styled from "styled-components/native"

const InternalText = forwardRef<NativeText, NativeTextProps>(
  ({ children, ...props }, ref) => {
    return (
      <NativeText {...props} ref={ref}>
        {children}
      </NativeText>
    )
  },
)

const TitleLarge = styled.Text`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${({ theme }) => theme.Color.Neutral500};
`

const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.Color.Neutral500};
`

const Button = styled.Text`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.Color.Neutral500};
`

const Input = styled.Text`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.Color.Neutral500};
`

const Hint = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.Color.Neutral500};
`

const Caption = styled.Text`
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.Color.Neutral500};
`

const Link = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.Color.Neutral500};
`

const Menu = styled.Text`
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: ${({ theme }) => theme.Color.Neutral500};
`

const BodyLarge = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.Color.Neutral500};
`

const BodySmall = styled.Text`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.Color.Neutral500};
`

export const Text = Object.assign(InternalText, {
  TitleLarge,
  Title,
  Button,
  Input,
  Hint,
  Caption,
  Link,
  Menu,
  BodyLarge,
  BodySmall,
})
