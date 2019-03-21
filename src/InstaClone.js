import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class InstaClone extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.tempNav} />

        <Image
          style={{ width: 100 + "%", height: 100 }}
          source={{
            uri:
              "https://lh3.googleusercontent.com/yQ82fiiVQVa9sMZa2mTHbMH6W0TRlwJ8nMJnDVVV_Xd9ebr_zyUcmEgwmE_pUVUWPYSujVJ2XC8UDtF6cZpb2HrgKw"
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 75,
    backgroundColor: "rgb(250,250,250)"
  }
});

export default InstaClone;
