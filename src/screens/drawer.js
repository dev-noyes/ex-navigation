import * as React from "react";
import { Button, View,Text } from "react-native";
import { createDrawerNavigator, useDrawerStatus } from "@react-navigation/drawer";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go to Main" onPress={() => navigation.navigate("Main")} />
      <Button onPress={() => navigation.navigate("Notifications")} title="Go to notifications" />
      <Text>useDrawerStatus : {useDrawerStatus()}</Text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Text>useDrawerStatus : {useDrawerStatus()}</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigatorScreen() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}
