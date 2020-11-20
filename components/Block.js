import React from "react";
import { View, StyleSheet } from "react-native";

const Block = (props) => {
  return <View style={{ ...styles.block, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  block: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    // marginVertical: 15,
    // paddingLeft: 45,
    // color: 'rgba(255,255,255,0.7)',
    // marginHorizontal: 25,
    // fontSize: 16,
  },
});

export default Block;
