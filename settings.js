import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as theme from "./theme";

export default {
  light: {
    name: "Light",
    icon: ({ size, color, ...props }) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        name="lightbulb-on-outline"
        color={theme.colors.accent}
        {...props}
      />
    )
  },
  ac: {
    name: "AC",
    icon: ({ size, color, ...props }) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        name="air-conditioner"
        color={theme.colors.accent}
      />
    )
  },
  temperature: {
    name: "Temperature",
    icon: ({ size, color, ...props }) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        name="temperature-celsius"
        color={theme.colors.accent}
      />
    )
  },
  fan: {
    name: "Fan",
    icon: ({ size, color, ...props }) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        name="fan"
        color={theme.colors.accent}
      />
    )
  },
  "wi-fi": {
    name: "Wi-Fi",
    icon: ({ size, color, ...props }) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        name="wifi"
        color={theme.colors.accent}
      />
    )
  },
  electricity: {
    name: "Electricity",
    icon: ({ size, color, ...props }) => (
      <MaterialIcons
        size={size || theme.sizes.font}
        name="power"
        color={theme.colors.accent}
      />
    )
  }
};
