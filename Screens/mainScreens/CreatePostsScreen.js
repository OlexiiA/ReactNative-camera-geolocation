import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const HorizontalLine = () => {
  return <View style={styles.line}></View>;
};

export default function PostsScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <AntDesign name="arrowleft" size={24} color="#BDBDBD" style={{marginRight: 70, marginLeft: 16}}/>
        <Text style={{ fontSize: 17, fontWeight: '500'}}>Создать публикацию</Text>

      </View>
      <HorizontalLine />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 11,
    paddingTop: 11,
    fontSize: 17,
  },
  line: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "100%",
  },
});
