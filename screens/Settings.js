import React, { Component } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet, TouchableWithoutFeedback, Slider } from "react-native";

import { Block, Text, PanSlider } from "../components";
import * as theme from "../theme";
import mocks from "../settings";

class Settings extends Component {
  static navigationOptions = {
    headerTitle: <></>,

    headerLeft: ({ onPress }) => (
      <TouchableWithoutFeedback onPress={() => onPress()}>
        <MaterialIcons
          size={theme.sizes.font * 1.5}
          color={theme.colors.black}
          name="arrow-back"
        />
      </TouchableWithoutFeedback>
    ),
    headerLeftContainerStyle: {
      paddingLeft: theme.sizes.base * 2
    },
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0
    }
  };
  state = {
    direction: 45,
    speed: 12
  };

  render() {
    const { params } = this.props.navigation.state;
    const { navigation, settings } = this.props;
    const name = params ? params.name : null;

    const Icon = settings[name].icon;

    return (
      <Block flex={1} style={styles.settings}>
          <Block style={{marginBottom:30}}>
            <Icon size={theme.sizes.font * 4} color={theme.colors.black} />
          </Block>
        <Block flex={0} row>
          <Block column>
            <Block flex={1.2} row style={{ alignItems: "flex-end" }}>
              <Text h1>34</Text>
              <Text h1 size={34} height={80} weight={"600"} spacing={0.1}>
                °C
              </Text>
            </Block>
            <Text caption>Temperature</Text>
          </Block>
          <Block flex={1} center>
            <PanSlider />
          </Block>
        </Block>
        <Block flex={1}>
          <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
            <Block row space="between">
              <Text welcome color="black">
                Direction
              </Text>
              <Text>{this.state.direction}</Text>
            </Block>
            <Slider
              thumbTintColor={theme.colors.accent}
              minimumTrackTintColor={theme.colors.accent}
              minimumValue={0}
              maximumValue={90}
              onValueChange={value =>
                this.setState({ direction: parseInt(value, 10) })
              }
            />
          </Block>
          <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
            <Block row space="between">
              <Text welcome color="black">
                Speed
              </Text>
              <Text>{this.state.speed}</Text>
            </Block>

            <Slider
              thumbTintColor={theme.colors.accent}
              minimumTrackTintColor={theme.colors.accent}
              minimumValue={0}
              maximumValue={30}
              onValueChange={value =>
                this.setState({ speed: parseInt(value, 10) })
              }
            />
          </Block>
        </Block>
      </Block>
    );
  }
}
Settings.defaultProps = {
  settings: mocks
};

export default Settings;

const styles = StyleSheet.create({
  settings: {
    backgroundColor: "#FFF",
    padding: theme.sizes.base * 2
  }
});
