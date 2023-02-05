import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthNavigationStack } from "../../types"
import { SignIn } from "../sign-in"
import { SignUp } from "../sign-up"
import { WelcomeScreen } from "../welcome-screen"

const { Screen, Navigator } = createNativeStackNavigator<AuthNavigationStack>()

export const Auth = () => {
  return (
    <Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        header: () => null,
      }}
    >
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Navigator>
  )
}
