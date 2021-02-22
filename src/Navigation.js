import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, Feather, Entypo } from "@expo/vector-icons";
import PayButton from "./components/PayButton/index";

import HomeScreen from "./screens/Home/index";
import WalletScreen from "./screens/Wallet/index";
import PayScreen from "./screens/Pay/index";
import Notifications from "./screens/Notifications/index";
import Store from "./screens/Store/Store";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: Ionicons,
    name: "ios-home-outline",
  },
  Wallet: {
    lib: Ionicons,
    name: "wallet-outline",
  },
  Notifications: {
    lib: Ionicons,
    name: "notifications-outline",
  },
  Store: {
    lib: Feather,
    name: "shopping-bag",
  },
};

const iconsFocused = {
  Home: {
    lib: Ionicons,
    name: "ios-home-sharp",
  },
  Wallet: {
    lib: Ionicons,
    name: "wallet",
  },
  Notifications: {
    lib: Ionicons,
    name: "notifications-sharp",
  },
  Store: {
    lib: Entypo,
    name: "shopping-bag",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Pay") {
            return (
              <PayButton
                onPress={() => navigation.navigate("Pay")}
                focused={focused}
              />
            );
          }
          const { lib: Icon, name } = focused
            ? iconsFocused[route.name]
            : icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#fff",
          borderTopColor: "rgba(253, 255, 252, 0.5)",
        },
        activeTintColor: "#016330",
        inactiveTintColor: "#4c5359",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ title: "Carteira" }}
      />
      <Tab.Screen name="Pay" component={PayScreen} options={{ title: "" }} />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ title: "Notificações" }}
      />
      <Tab.Screen name="Store" component={Store} options={{ title: "Store" }} />
    </Tab.Navigator>
  );
}
