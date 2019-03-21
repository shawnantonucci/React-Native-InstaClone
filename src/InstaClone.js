import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class InstaClone extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.tempNav}>
          <Text>InstaClone</Text>
        </View>

        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  "https://lh3.googleusercontent.com/8EV9X_4gFvmiIF5hv20RUfJurdGB-sGBMKaLBIjmyEZmcp4f8RTnCGFr3z3b53cZeYEzsiBE4Y9vOwIEQIzX4rrQsg"
              }}
            />
            <Text style={{ marginLeft: 10 }}>RyanABryne</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </View>
        </View>

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
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },

  userBar: {
    width: 100 + "%",
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  }
});

export default InstaClone;
