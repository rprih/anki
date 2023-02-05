import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { FC } from "react"
import { AuthNavigationStack } from "../../types"
import { SignUpForm } from "../sign-up-form"

export type SignUpProps = NativeStackScreenProps<AuthNavigationStack, "SignUp">

export const SignUp: FC<SignUpProps> = ({ navigation }) => {
  return (
    <SignUpForm
      onSubmit={() => console.log("here")}
      onMoveToSignIn={() => {
        navigation.push("SignIn")
      }}
    />
  )
}
