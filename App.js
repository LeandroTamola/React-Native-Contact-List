import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListView from "./components/ListView";
import DetailView from "./components/DetailView";
import { AppProvider } from "./components/AppContext";

export default function App({ navigation, route }) {
  const Stack = createStackNavigator();

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="List"
            component={ListView}
            options={{ title: "Contacts" }}
          />
          <Stack.Screen name="Detail" component={DetailView} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
