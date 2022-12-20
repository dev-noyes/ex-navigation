import * as React from "react";
import { View, Text, Button, TextInput, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StackNavigatorScreen from "./src/screens/stack";
import TabsNavigatorScreen from "./src/screens/tabs";
import DrawerNavigatorScreen from "./src/screens/drawer";

const Stack = createNativeStackNavigator();

function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Stack" onPress={() => navigation.navigate("Stack")} />
      <Button title="BottomTab" onPress={() => navigation.navigate("BottomTab")} />
      <Button title="Drawer" onPress={() => navigation.navigate("Drawer")} />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Stack" component={StackNavigatorScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTab" component={TabsNavigatorScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Drawer" component={DrawerNavigatorScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
