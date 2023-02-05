import { FC, PropsWithChildren } from "react"
import { StyleSheet, Text, TextProps } from "react-native"
import styled from "styled-components/native"

export type LabelProps = TextProps

const InternalText = styled.Text`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
  color: ${({ theme }) => theme.Color.Neutral500};
`

export const Label: FC<TextProps> = ({ children, ...props }) => {
  return <InternalText {...props}>{children}</InternalText>
}
