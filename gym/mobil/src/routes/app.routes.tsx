import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { gluestackUIConfig } from '../../config/gluestack-ui.config'

import HomeSvg from '@assets/home.svg'
import HistorySvg from '@assets/history.svg'
import ProfileSvg from '@assets/profile.svg'

import { Home } from '@screens/Home';
import { Exercise } from '@screens/Exercise';
import { History } from '@screens/History';
import { Profile } from '@screens/Profile';
import { Platform } from 'react-native'

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

type AppRoutes = {
    home: undefined;
    exercise: undefined;
    profile: undefined;
    history: undefined;
  }

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();


import { BottomTabBar } from '@react-navigation/bottom-tabs';

function CustomTabBar(props: BottomTabBarProps) {
  // Filter out the 'exercise' route
  const filteredRoutes = props.state.routes.filter(
    (route) => route.name !== 'exercise'
  );

  const customState = {
    ...props.state,
    routes: filteredRoutes,
    index: Math.min(props.state.index, filteredRoutes.length - 1),
  };

  return <BottomTabBar {...props} state={customState} />;
}


export function AppRoutes() {
    const { tokens } = gluestackUIConfig
    const iconSize = tokens.space['6']

    return (
        <Navigator 
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{ 
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: tokens.colors.green500,
            tabBarInactiveTintColor: tokens.colors.gray200,
            tabBarStyle: {
                backgroundColor: tokens.colors.gray600,
                borderTopWidth: 0,
                height: Platform.OS === 'android' ? 80 : 96,
                paddingBottom: tokens.space['10'],
                paddingTop: tokens.space['6'],
              },
          }}>
            <Screen 
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                      <HomeSvg fill={color} width={iconSize} height={iconSize} />
                    ),
                }}
            />
            <Screen 
                name='history'
                component={History}
                options={{
                    tabBarIcon: ({ color }) => (
                      <HistorySvg fill={color} width={iconSize} height={iconSize} />
                    ),
                }}
            />
            <Screen 
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                      <ProfileSvg fill={color} width={iconSize} height={iconSize} />
                    ),
                }}
            />
            <Screen 
                name='exercise'
                component={Exercise}
                options={{ 
                  tabBarStyle: { display: 'none' },
                  tabBarButton: () => null,
                }}
            />
            
        </Navigator>
    );
}