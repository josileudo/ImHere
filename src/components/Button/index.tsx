import { Text, TouchableOpacity, View } from "react-native";
import React, { PureComponent } from "react";
import { styles } from "./styles";

export interface ButtonProps {
  title?: string;
  type?: "primary" | "secondary";
  onPress?: (value: any) => void;
}

export const Button = ({ title, type, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles({ type: type }).button}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Text style={styles().buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
