import { StyleSheet } from "react-native";

export const mainStyles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'lightblue',
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
        fontFamily: 'Mina-Bold',
        color: '#e91e62',
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontFamily: 'Kalnia-Medium',
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
        backgroundColor:'#e91e62',
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
        borderWidth: 3,
        borderColor: '#0909db',
        backgroundColor: '#fff',
    },
    heading: {
        flex: 1,
        color: '#e91e62',
        fontFamily: 'Mina-Bold',
        textAlign: 'center',
        fontSize: 18,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 4,
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
        fontFamily: 'Mina-Regular',
        color: '#0909db',
        textAlign: 'center',
        flex: 1,
    },

    // Test
    answer: {
        borderWidth:3,
        borderColor: '#0909db',
        backgroundColor: 'white',
        minHeight: 60,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // margin: 10,
        paddingHorizontal: 20,
        // padding: '2%',
    },

    // Home
    box: {
        backgroundColor: 'white',
        marginTop: '5%',
        padding: '7%',
        borderRadius: 20,
        borderColor: '#0909db',
        borderWidth: 1,
    },

});
