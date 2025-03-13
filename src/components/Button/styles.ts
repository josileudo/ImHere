import { StyleSheet } from "react-native";
import { ButtonProps } from "./index";

const colors = {
  primary: "#31cf67",
  secondary: "#e23c44",
};

export const styles = ({ type = "primary" }: ButtonProps = {}) =>
  StyleSheet.create({
    button: {
      width: 56,
      height: 56,
      borderRadius: 4,
      backgroundColor: colors[type as keyof typeof colors],
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
