import React, { Component } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';

import { Block, Text } from '../components';
import * as theme from '../theme';
import mocks from '../settings';

class Settings extends Component {
  static navigationOptions = {
    headerTitle: null,

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
      paddingLeft: theme.sizes.base * 2,
    },
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
  };

  render() {
    const { params } = this.props.navigation.state;
    const name = params ? params.name : null;

    return (
      <Block flex={1} style={styles.settings}>
        <Block row></Block>
      </Block>
    );
  }
}
Settings.defaultProps = {
  settings: mocks,
};

export default Settings;

const styles = StyleSheet.create({
  settings: {
    backgroundColor: '#FFF',
    padding: theme.sizes.base * 2,
  },
  slider: {},
});
