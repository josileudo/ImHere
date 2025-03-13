import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fff",
    fontSize: 22,
    marginTop: 48,
    fontWeight: "bold",
  },
  eventDate: {
    color: "#c1c1c1",
    fontSize: 16,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 32,
    marginBottom: 44,
  },
  eventInput: {
    flex: 1,
    height: 56,
    padding: 16,
    backgroundColor: "#1f1e25",
    borderRadius: 4,
    fontSize: 16,
    color: "#fff",
  },
  list: {
    flex: 1,
    gap: 8,
  },
});
