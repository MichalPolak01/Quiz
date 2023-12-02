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


    // Onboard
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#0909db',
        textAlign: 'center',
    },
    description: {
        fontWeight: '400',
        color: '#0909db',
        textAlign: 'center',
        paddingHorizontal: 64,
    },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#3868c2',
        marginHorizontal: 8,
    },
    buttonNext: {
        position: "absolute",
        backgroundColor: '#3868c2',
        borderRadius: 100,
        padding: 20,
    },

    // Results
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 2,
        elevation: 1,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#0909db',
        backgroundColor: '#fff',
    },
    heading: {
        flex: 1,
        color: '#0909db',
        fontWeight: '700',
        fontFamily: 'Verdana',
        textAlign: 'center',
        fontSize: 17,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal: 2,
        elevation: 1,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#0909db',
        padding: 10,
        backgroundColor: '#fff',
    },
    ceil: {
        fontSize: 12,
        fontFamily: 'Verdana',
        textAlign: 'center',
        flex: 1,
    },

    // Test
    answer: {
        borderWidth:3,
        borderColor: '#0909db',
        backgroundColor: 'white',
        height: 60,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        paddingHorizontal: 20,
    },
});
