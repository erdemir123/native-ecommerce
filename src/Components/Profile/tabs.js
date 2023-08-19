import { StyleSheet, Text } from "react-native";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Profile from "./Profile";
import Orders from "./Orders";
import { useState } from "react";
import Colors from "../../data/color";

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});

export default function tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "PROFILE" },
    { key: "second", title: "ORDERS" },
  ]);
  const renderTabsBar = (props) => {
    return (
      <TabBar
        {...props}
        tabStyle={styles.tabStyle}
        indicatorStyle={{ backgroundColor: Colors.black }}
        activeColor={Colors.main}
        inactiveColor={Colors.white}
        renderLabel={({ route, color }) => <Text style={{color:color}}>{route.title}</Text>}
      />
    );
  };
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabsBar}
    />
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "black",
  },
});
