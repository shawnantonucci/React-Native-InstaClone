import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import config from "./config";

class InstaClone extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get("window").width
    };
  }
  lastTap = null;

  handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
      this.likeToggled();
    } else {
      this.lastTap = now;
    }
  };

  likeToggled = () => {
    this.setState({
      liked: !this.state.liked
    });
  };

  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageUri =
      "https://lh3.googleusercontent.com/yQ82fiiVQVa9sMZa2mTHbMH6W0TRlwJ8nMJnDVVV_Xd9ebr_zyUcmEgwmE_pUVUWPYSujVJ2XC8UDtF6cZpb2HrgKw" +
      "=s" +
      imageHeight +
      "-c";

    const heartIconColor = this.state.liked
      ? config.images.heartIconRed
      : config.images.heartIcon;

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

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => this.handleDoubleTap()}
        >
          <Image
            style={{ width: this.state.screenWidth, height: 425 }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>

        <View style={styles.iconBar}>
          <TouchableOpacity onPress={() => this.likeToggled()}>
            <Image
              style={[styles.icon, { height: 40, width: 40 }]}
              source={heartIconColor}
            />
          </TouchableOpacity>
          <Image
            style={[styles.icon, { height: 36, width: 36 }]}
            source={config.images.speechBubble}
          />
          <Image
            style={[styles.icon, { height: 45, width: 40 }]}
            source={config.images.shareIcon}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 55,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },

  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },

  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderColor: "rgb(233,233,233)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },

  icon: {
    marginLeft: 5
  }
});

export default InstaClone;
