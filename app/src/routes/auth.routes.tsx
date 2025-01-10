import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '@screens/SingIn';
import { SignUp } from '@screens/SingUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen 
        name="signIn"
        component={SignIn}
      />
      
      <Screen 
        name="signUp"
        component={SignUp}
      />
    </Navigator>
  )
}