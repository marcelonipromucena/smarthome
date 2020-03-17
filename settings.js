import React from "react";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import theme from "./theme";

export default {
  light: {
    name: "Light",
    icon: <MaterialCommunityIcons size={theme.sizes.font} name="lightbulb-on-outline" color={theme.colors.accent} />
  },
  ac: {
    name: "AC",
    icon: <MaterialCommunityIcons size={theme.sizes.font} name="air-conditioner" color={theme.colors.accent} />
  },
  temperature: {
    name: "Temperature",
    icon: <MaterialCommunityIcons size={theme.sizes.font} name="temperature-celsius" color={theme.colors.accent} />
  },
  fan: {
    name: "Fan",
    icon: <MaterialCommunityIcons size={theme.sizes.font} name="fan" color={theme.colors.accent} />
  },
  "wi-fi": {
    name: "Wi-Fi",
    icon: <MaterialCommunityIcons size={theme.sizes.font} name="wifi" color={theme.colors.accent} />
  },
  electricity: {
    name: "Electricity",
    icon: <MaterialIcons size={theme.sizes.font} name="power"  color={theme.colors.accent} />
  }
};
