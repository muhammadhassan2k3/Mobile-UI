import { Platform, StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5DB075',
    },
    ModalStyle: {
        backgroundColor: '#FFFFFF',
        margin: 50,
        borderRadius: 8,
        height: 363,
        width: windowWidth-20,
        alignItems: 'center',
    },
    textStyle: {
        marginTop: 32,
        fontSize: 30,
        fontWeight: '600',
    },
    innerTextStyle: {
        fontSize: 16,
        marginHorizontal: 16,
        textAlign: 'center',
        fontWeight: '500',
        color: '#666666',
        marginTop: 16,
    },
    buttonStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#5DB075',
        width: 311,
        paddingVertical: 15,
        marginTop: 45,
    },
    lastButton: {
        color: '#5DB075',
        marginTop: 18,
        fontSize: 16,
        fontWeight: '600'
    }
})

export default styles;