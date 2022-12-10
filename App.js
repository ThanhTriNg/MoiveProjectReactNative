// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeView from "./views/HomeView";
// import AccountView from "./views/AccountView";
// import AccountPin from "./views/AccountPinView";
// import AccountForgotPasswordView from "./views/AccountForgotPasswordView";
// import AccountForgotPasswordView2 from "./views/AccountForgotPasswordView2";
// import AccountForgotPasswordView3 from "./views/AccountForgotPasswordView3";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="Home"
//             component={HomeView}
//             options={{ title: "HOME" }}
//           />
//           <Stack.Screen
//             name="AccountForgotPasswordView3"
//             component={AccountForgotPasswordView3}
//             options={{ title: "Tạo mật khẩu mới" }}
//           />
//           <Stack.Screen
//             name="AccountForgotPasswordView2"
//             component={AccountForgotPasswordView2}
//             options={{ title: "Quên mật khẩu" }}
//           />
//           <Stack.Screen
//             name="AccountForgotPasswordView"
//             component={AccountForgotPasswordView}
//             options={{ title: "Quên mật khẩu" }}
//           />
//           <Stack.Screen
//             name="AccountPIN"
//             component={AccountPin}
//             options={{ title: "Tạo mã PIN" }}
//           />
//           <Stack.Screen
//             name="AccountView"
//             component={AccountView}
//             options={{ title: "Điền thông tin cá nhân" }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Screens
import Home from "./screens/home";
import Recents from "./screens/recents";
import Profile from "./screens/profile";

//Views
import AccountView from "./views/AccountView";
import AccountPin from "./views/AccountPinView";
import NotificationView from "./views/NotificationView";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createMaterialBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const RecentStack = createNativeStackNavigator();
function RecentStackScreen() {
  return (
    <RecentStack.Navigator>
      <RecentStack.Screen name="Recents" component={Recents} />
    </RecentStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="AccountView" component={AccountView} />
      <ProfileStack.Screen name="NotificationView" component={NotificationView} />
    </ProfileStack.Navigator>
  );
}

const App = (props) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        swipeEnabled
        initialRoute="Home"
        activeColor="#02ad94"
        inactiveColor="#dedede"
        style={{ backgroundColor: "#000" }}
        barStyle={{ backgroundColor: "#0f0f0f", padding: 4 }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="2"
          component={RecentStackScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="camera-metering-spot"
                color={color}
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="3"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
