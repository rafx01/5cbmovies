import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Signin } from '@/screens/Signin';
import { Homepage } from '@/screens/Homepage';
import { Register } from '@/screens/Register';

const Stack = createStackNavigator({
  screens: {
    Signin: {
      options: {
        headerShown: false,
      },
      screen: Signin,
    },
    Homepage: {
      options: {
        headerShown: true,
      },
      screen: Homepage,
    },
    Register: {
      options: {
        headerShown: true,
      },
      screen: Register,
    },
  },
});

type RootNavigatorParamList = StaticParamList<typeof Stack>;

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootNavigatorParamList {}
  }
}

const Navigation = createStaticNavigation(Stack);
export default Navigation;
