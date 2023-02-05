import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { ScrollView, View, TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { Button } from "../../../../atoms/button"
import { Label } from "../../../../atoms/label"
import { Text } from "../../../../atoms/text"
import { useCurrectTheme } from "../../../../hooks/use-current-theme"
import { InputField } from "../../../../molecules/input-field/input-field"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FC } from "react"

export interface SignInFormData {
  email: string
  password: string
}

export interface SignInFormProps {
  isSubmitting?: boolean
  onMoveToSignUp?: () => void
  onSubmit: SubmitHandler<SignInFormData>
  initialData?: SignInFormData
}

export const SignInForm: FC<SignInFormProps> = ({
  isSubmitting,
  onSubmit,
  onMoveToSignUp,
  initialData,
}) => {
  const theme = useCurrectTheme()
  const form = useForm<SignInFormData>({
    mode: "onSubmit",
    defaultValues: initialData,
    resolver: yupResolver(schema),
  })

  const {
    handleSubmit,
    formState: { errors },
  } = form

  return (
    <Container>
      <ScrollView>
        <FormProvider {...form}>
          <MainView>
            <Text.TitleLarge>Sign In</Text.TitleLarge>
            <View style={{ height: 24 }} />
            <View style={{ flexDirection: "column" }}>
              <Label>Email</Label>
              <View style={{ height: 8 }} />
              <InputField
                name="email"
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="email"
                isError={Boolean(errors?.email)}
              />
              {Boolean(errors?.email) && (
                <>
                  <View style={{ height: 8 }} />
                  <Text.Hint style={{ color: theme.Color.Attention500 }}>
                    {errors.email?.message ?? ""}
                  </Text.Hint>
                </>
              )}
            </View>
            <View style={{ height: 24 }} />
            <View style={{ flexDirection: "column" }}>
              <Label>Password</Label>
              <View style={{ height: 8 }} />
              <InputField
                name="password"
                secureTextEntry
                placeholder="Enter your password"
                autoCapitalize="none"
                textContentType="password"
                autoCorrect={false}
                autoComplete="email"
                isError={Boolean(errors.password)}
              />
              {Boolean(errors.password) && (
                <>
                  <View style={{ height: 8 }} />
                  <Text.Hint style={{ color: theme.Color.Attention500 }}>
                    {errors.password?.message}
                  </Text.Hint>
                </>
              )}
            </View>
            <View style={{ height: 24 }} />
            <View>
              <Button onPress={handleSubmit(onSubmit)}>
                <Text.Button style={{ color: theme.Color.Main0 }}>
                  Sign In
                </Text.Button>
              </Button>
            </View>
          </MainView>
        </FormProvider>
      </ScrollView>
      <Footer>
        <Text style={{ color: theme.Color.Neutral400 }}>
          Don`t have an account?
        </Text>
        <TouchableOpacity onPress={onMoveToSignUp}>
          <Text style={{ color: theme.Color.Main500, marginLeft: 4 }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  )
}

const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
`

const Container = styled.SafeAreaView`
  flex-grow: 1;
`

const MainView = styled.View`
  padding: 0 20px;
`

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(4).required(),
  })
  .required()
