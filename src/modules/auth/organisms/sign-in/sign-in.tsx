import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { FC } from "react"
import { AuthNavigationStack } from "../../types"
import { SignInForm } from "../sign-in-form"

export type SignInProps = NativeStackScreenProps<AuthNavigationStack, "SignIn">

export const SignIn: FC<SignInProps> = ({ navigation }) => {
  return (
    <SignInForm
      onSubmit={() => console.log("here")}
      onMoveToSignUp={() => {
        navigation.push("SignUp")
      }}
    />
  )
}
