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

export interface SignUpFormData {
  email: string
  password: string
  repeatPassword: string
}

export interface SignUpFormProps {
  isSubmitting?: boolean
  onMoveToSignIn?: () => void
  onSubmit: SubmitHandler<SignUpFormData>
  initialData?: SignUpFormData
}

export const SignUpForm: FC<SignUpFormProps> = ({
  isSubmitting,
  onSubmit,
  onMoveToSignIn,
  initialData,
}) => {
  const theme = useCurrectTheme()
  const form = useForm<SignUpFormData>({
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
            <Text.TitleLarge>Sign Up</Text.TitleLarge>
            <View style={{ height: 24 }} />
            <View style={{ flexDirection: "column" }}>
              <Label>Email</Label>
              <View style={{ height: 8 }} />
              <InputField
                name="email"
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect={false}
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
                autoComplete="password-new"
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
            <View style={{ flexDirection: "column" }}>
              <Label>Repeat Password</Label>
              <View style={{ height: 8 }} />
              <InputField
                name="repeatPassword"
                secureTextEntry
                placeholder="Repeat your password"
                autoCapitalize="none"
                textContentType="password"
                autoCorrect={false}
                autoComplete="password-new"
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
                  Sign up
                </Text.Button>
              </Button>
            </View>
          </MainView>
        </FormProvider>
      </ScrollView>
      <Footer>
        <Text style={{ color: theme.Color.Neutral400 }}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={onMoveToSignIn}>
          <Text style={{ color: theme.Color.Main500, marginLeft: 4 }}>
            Sign in
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
    repeatPassword: yup.string().min(4).required(),
  })
  .required()
