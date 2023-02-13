import { FC } from "react"
import { View } from "react-native"
import styled from "styled-components/native"
import { Button } from "../../../../atoms/button"
import { Text } from "../../../../atoms/text"
import { useCurrectTheme } from "../../../../hooks/use-current-theme"

export interface DeleteConfirmationProps {
  title: string
  subtitle: string
}

export const DeleteConfirmation: FC<DeleteConfirmationProps> = ({
  title,
  subtitle,
}) => {
  const theme = useCurrectTheme()

  return (
    <Container>
      <Title>{title}</Title>
      <View style={{ height: 24 }} />
      <Subtitle>{subtitle}</Subtitle>
      <View style={{ height: 24 }} />
      <Button variant="destructive">
        <Text.Button style={{ color: theme.Color.Main0 }}>Delete</Text.Button>
      </Button>
      <View style={{ height: 16 }} />
      <Button variant="secondary">
        <Text.Button>Cancel</Text.Button>
      </Button>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
`

const Title = styled(Text.Title)`
  text-align: center;
`

const Subtitle = styled(Text.BodyLarge)`
  text-align: center;
`
