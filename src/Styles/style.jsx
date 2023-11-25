import { StyleSheet } from "react-native";

export const mainStyles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    // Buttons
    buttons: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "flex-end",
        justifyContent: "space-between",

    },
    button: {
        width: 185,
        height: 150,
        backgroundColor: '#1125d6',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        margin: 5
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    },
});
