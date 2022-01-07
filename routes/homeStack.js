import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Todo from "../screens/todo";
import Profile from "../screens/profile";
import Buddy from "../screens/buddy";
import Notifications from "../screens/notifications";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet } from "react-native-web";
import Signup from "../screens/signup";
import Login from "../screens/login";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Todo"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#489fb5",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 55,
          paddingBottom: 6,
          paddingTop: 6,
        },
      })}
    >
      <Tab.Screen
        name="Todo"
        component={Todo}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="md-list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Buddy"
        component={Buddy}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5 name="user-friends" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarBadge: "",
          tabBarBadgeStyle: {
            backgroundColor: "#ffa62b",
          },
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "ios-notifications" : "ios-notifications-outline"}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name={focused ? "user-alt" : "user"}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabs: {
    paddingVertical: 20,
  },
});
