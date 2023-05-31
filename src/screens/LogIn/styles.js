import { StyleSheet } from 'react-native'


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerText: {
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: "600",
        textAlign: "center",
        marginTop: 32,
        color: "#000000",
        marginBottom: 32,
    },
    inputStyles: {
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 16,
        padding: 16,
        marginBottom: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
    },
    buttonStyle: {
        backgroundColor: '#5DB075',
        borderRadius: 100,
        marginHorizontal: 16,
        height: 51,
    },
    forgotStyles: {
        color: "#5DB075",
        textAlign: "center",
        marginTop: 16,
        fontStyle: 'normal',
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 19
    },
    passwordButtonText: {
        marginVertical: 16,
        marginRight: 15,
        color: "#5DB075",
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
    },
    passwordContainer: {
        flexDirection: 'row',
        backgroundColor: "#F6F6F6",
        marginHorizontal: 16,
        borderRadius: 8,
    },
    passwordFieldStyles: {
        flex: 1,
        padding: 16,
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        color: "black",
        fontStyle: 'normal',
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 19
    },
})
