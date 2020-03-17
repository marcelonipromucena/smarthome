import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Block, Text } from "../components";
import * as theme from "../theme";

class Settings extends Component {
  render() {
    const { navigation } = this.props;
    const { name } = navigation.getParam("name");

    return (
      <Block flex={1}>
        <Text> Settings for {name}</Text>
      </Block>
    );
  }
}

export default Settings;
