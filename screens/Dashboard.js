import React, { Component } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import { Block, Text } from "../components";
import * as theme from "../theme";
import mocks from "../settings";

class Dashboard extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigation } = this.props;

    return (
      <ScrollView contentContainerStyle={styles.dashboard}>
        <Block column>
          <Text welcome>Welcome</Text>
          <Text name>John Doe</Text>
        </Block>

        <Block row style={{ paddingVertical: 10 }}>
          <Block flex={1.2} row style={{ alignItems: "flex-end" }}>
            <Text h1>34</Text>
            <Text h1 size={34} height={80} weight={"600"} spacing={0.1}>
              °C
            </Text>
          </Block>
          <Block flex={1} column>
            <Text caption>Humidity</Text>
            <Text>Chart</Text>
          </Block>
        </Block>

        <Block flex={1} column space="between">
          <Block row space="around">
            <TouchableOpacity
              activeOpacity={0.08}
              onPress={() => {
                navigation.navigate("Settings", { name: "light" });
              }}
            >
              <Block center middle style={styles.button}>
                <Text button>{settings["light"].name}</Text>
              </Block>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.08}
              onPress={() => {
                navigation.navigate("Settings", { name: "ac" });
              }}
            >
              <Block center middle style={styles.button}>
                <Text button>{settings["ac"].name}</Text>
              </Block>
            </TouchableOpacity>
          </Block>
          <Block row space="around">
            <TouchableOpacity
              activeOpacity={0.08}
              onPress={() => {
                navigation.navigate("Settings", { name: "temperature" });
              }}
            >
              <Block center middle style={styles.button}>
                <Text button>{settings["temperature"].name}</Text>
              </Block>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.08}
              onPress={() => {
                navigation.navigate("Settings", { name: "fan" });
              }}
            >
              <Block center middle style={styles.button}>
                <Text button>{settings["fan"].name}</Text>
              </Block>
            </TouchableOpacity>
          </Block>

          <Block row space="around">
            <TouchableOpacity
              activeOpacity={0.08}
              onPress={() => {
                navigation.navigate("Settings", { name: "wi-fi" });
              }}
            >
              <Block center middle style={styles.button}>
                <Text button>Wi-{settings["wi-fi"].name}</Text>
              </Block>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.08}
              onPress={() => {
                navigation.navigate("Settings", { name: "electricity" });
              }}
            >
              <Block center middle style={styles.button}>
                <Text button>{settings["electricity"].name}</Text>
              </Block>
            </TouchableOpacity>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

Dashboard.defaultProps = {
  settings: mocks
}

export default Dashboard;

const styles = StyleSheet.create({
  dashboard: {
    padding: theme.sizes.base * 2,
    flex: 1
  },
  button: {
    backgroundColor: theme.colors.button,
    width: 120,
    height: 120,
    borderRadius: 120 / 2
  }
});
