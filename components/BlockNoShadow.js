import React from "react";
import { View, StyleSheet } from "react-native";

const Blocknoshadow = (props) => {
  return <View style={{ ...styles.block, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  block: {
    width: 350,
    height: 590,
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Blocknoshadow;
