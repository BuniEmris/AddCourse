import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const DATA = [
    {
      title: "0",
    },
    {
      title: "1",
    },
    {
      title: "2",
    },
    {
      title: "3",
    },
    {
      title: "4",
    },
    {
      title: "5",
    },
    {
      title: "6",
    },
    {
      title: "7",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="university" style={styles.icon} />
        <Text style={styles.headerText}>Courses</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyText}>All Courses</Text>
        <AntDesign name="pluscircle" style={styles.bodyIcon} />
        <FlatList
          style={styles.itemList}
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.itemBack}>{item.title}</View>
          )}
        />
        <View style={styles.itemStick0}></View>
        <View style={styles.itemStick1}></View>
        <View style={styles.itemStick2}></View>
        <View style={styles.itemStick3}></View>
        <View style={styles.itemStick4}></View>
        <View style={styles.itemStick5}></View>
        <View style={styles.itemStick6}></View>
        <View style={styles.itemStick7}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: 140,
    backgroundColor: "#5A83ED",
  },
  headerText: {
    alignSelf: "center",
    position: "absolute",
    top: 90,
    color: "white",
    fontSize: 24,
  },
  icon: {
    fontSize: 64,
    color: "white",
    alignSelf: "center",
    position: "absolute",
    top: 20,
  },
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F0F4F5",
  },
  bodyText: {
    fontSize: 18,
    position: "absolute",
    left: 30,
    top: 20,
  },
  bodyIcon: {
    fontSize: 24,
    position: "absolute",
    right: 30,
    top: 20,
  },
  itemList: {
    color: "blue",
    fontSize: 20,
  },
  itemBack: {
    width: "70%",
    height: 30,
    backgroundColor: "white",
    alignSelf: "center",
    top: 60,
    padding: 0.5,
    marginBottom: 35,
  },
  itemStick0: {
    alignSelf: "center",
    width: 2,
    height: 30,
    backgroundColor: "black",
    position: "absolute",
    top: 60,
    right: 47,
  },
  itemStick1: {
    alignSelf: "center",
    width: 2,
    height: 30,
    backgroundColor: "black",
    position: "absolute",
    top: 125,
    right: 47,
  },
  itemStick2: {
    alignSelf: "center",
    width: 2,
    height: 30,
    backgroundColor: "black",
    position: "absolute",
    top: 190,
    right: 47,
  },
  itemStick3: {
    alignSelf: "center",
    width: 2,
    height: 30,
    backgroundColor: "black",
    position: "absolute",
    top: 255,
    right: 47,
  },
  itemStick4: {
    alignSelf: "center",
    width: 2,
    height: 30,
    backgroundColor: "black",
    position: "absolute",
    bottom: 310,
    right: 47,
  },
  itemStick5: {
    alignSelf: "center",
    width: 2,
    height: 30,
    backgroundColor: "black",
    position: "absolute",
    bottom: 245,
    right: 47,
  },
  itemStick6: {
    alignSelf: "center",
    width: 2,
    height: 30,
    backgroundColor: "black",
    position: "absolute",
    bottom: 180,
    right: 47,
  },
  itemStick7: {
    alignSelf: "center",
    width: 2,
    height: 30,
    backgroundColor: "black",
    position: "absolute",
    bottom: 115,
    right: 47,
  },
});
