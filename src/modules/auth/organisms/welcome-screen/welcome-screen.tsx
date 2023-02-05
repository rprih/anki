import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { FC } from "react"
import { View } from "react-native"
import styled from "styled-components/native"
import { Button } from "../../../../atoms/button"
import { Text } from "../../../../atoms/text"
import { AuthNavigationStack } from "../../types"

export type WelcomeScreenProps = NativeStackScreenProps<
  AuthNavigationStack,
  "WelcomeScreen"
>

export const WelcomeScreen: FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <Wrapper>
      <Container>
        <HeadingText>Interval repetition</HeadingText>
        <View style={{ height: 8 }} />
        <MainText>Unlock the power of your memory with MemoryBooster</MainText>
        <View style={{ height: 64 }} />
        <Button onPress={() => navigation.push("SignUp")}>
          <ButtonText>Get started</ButtonText>
        </Button>
        <View style={{ height: 16 }} />
        <Button variant="secondary" onPress={() => navigation.push("SignIn")}>
          <Text.Button>I already have an account</Text.Button>
        </Button>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`

const Container = styled.View`
  padding: 0 25px;
`

const HeadingText = styled(Text.Button)`
  text-align: center;
  color: ${({ theme }) => theme.Color.Main500};
`

const MainText = styled(Text.TitleLarge)`
  text-align: center;
`

const ButtonText = styled(Text.Button)`
  color: ${({ theme }) => theme.Color.Main0};
`
