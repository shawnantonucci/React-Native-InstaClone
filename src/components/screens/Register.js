import React, { Component } from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";

class Register extends Component {
  
  login = () => {
    //Navigate to Main app
    this.props.navigation.navigate("main");
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          height: 100 + "%",
          width: 100 + "%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() => this.login()}
      >
        <Text>REGISTER PAGE</Text>
      </TouchableOpacity>
    );
  }
}

export default Register;