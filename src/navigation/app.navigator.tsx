import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Settings, User } from 'lucide-react-native';
import { HomePage } from '../modules/home/pages/home.page';
import { ProfilePage } from '../modules/profile/pages/profile.page';
import { SettingsPage } from '../modules/settings/pages/settings.page';
import { AppTabEnum } from '../common/enums/app-tab.enum';
import { AppTabParamList } from '../common/types/app-tab-param-list.type';
import { appColors } from '../theme/colors';

const Tab = createBottomTabNavigator<AppTabParamList>();

export function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: appColors.primary,
        tabBarInactiveTintColor: appColors.mutedText,
        tabBarStyle: {
          backgroundColor: appColors.surface,
          borderTopColor: appColors.border,
        },
      }}
    >
      <Tab.Screen
        name={AppTabEnum.Home}
        component={HomePage}
        options={{
          title: 'Ana Sayfa',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={AppTabEnum.Profile}
        component={ProfilePage}
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={AppTabEnum.Settings}
        component={SettingsPage}
        options={{
          title: 'Ayarlar',
          tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
