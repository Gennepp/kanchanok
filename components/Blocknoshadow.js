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
    
    // marginVertical: 15,
    // paddingLeft: 45,
    // color: 'rgba(255,255,255,0.7)',
    // marginHorizontal: 25,
    // fontSize: 16,
  },
});

export default Blocknoshadow;
