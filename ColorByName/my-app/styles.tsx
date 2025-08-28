import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 50,
      },
      button: {
        width: 80,
        height: 80,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1
      },
      footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 20,
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#ccc",
      },
      footerText: {
        fontSize: 16,
        fontWeight: "bold",
      },
  });