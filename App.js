import React, { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/Home";
import ShowsScreen from "./src/screens/Shows";
import NewShowScreen from "./src/screens/NewShow";

import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { appReducer, initialState, AppContext } from "./src/context/AppContext";

const TabBar = ({ navigation, state }) => {
  const itemColor = (index) => (state.index === index ? "blue" : "black");

  return (
    <View style={tabBarStyles.viewStyle}>
      <>
        <TouchableOpacity
          style={tabBarStyles.buttonStyle}
          onPress={() => navigation.navigate("Home")}
        >
          <Feather name="home" size={24} color={itemColor(0)} />
        </TouchableOpacity>
        <TouchableOpacity
          style={tabBarStyles.buttonStyle}
          onPress={() => navigation.navigate("Shows")}
        >
          <Feather name="tv" size={24} color={itemColor(1)} />
        </TouchableOpacity>
        <TouchableOpacity
          style={tabBarStyles.buttonStyle}
          onPress={() => navigation.navigate("New Show")}
        >
          <Feather name="plus-circle" size={24} color={itemColor(2)} />
        </TouchableOpacity>
      </>
    </View>
  );
};

const tabBarStyles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: "center",
    flex: 1,
    borderRightColor: "#cccccc",
    borderRightWidth: 1,
    borderLeftColor: "#cccccc",
    borderLeftWidth: 1,
  },
});

const App = () => {
  const TabNav = createBottomTabNavigator();
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <NavigationContainer>
        <TabNav.Navigator tabBar={(props) => <TabBar {...props} />}>
          <TabNav.Screen name="Home" component={HomeScreen} />
          <TabNav.Screen name="Shows" component={ShowsScreen} />
          <TabNav.Screen name="New Show" component={NewShowScreen} />
        </TabNav.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
