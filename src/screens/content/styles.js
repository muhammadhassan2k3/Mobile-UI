import { Platform, StyleSheet,Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    topViewContainerStyles: {
        marginTop: Platform.OS === 'android' ? 40 : 0,
        flex: 1,
        backgroundColor: "white",
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 10,
        marginBottom: 20,
        justifyContent: "space-between",
        marginHorizontal: 16,
    },
    buttonStyle: {
        fontSize: 16,
        color: "#5DB075",
        fontWeight: '500'
    },
    headerText: {
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: "500",
    },
    searchContainerStyle: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    inputContainerStyles: {
        backgroundColor: '#F6F6F6',
        borderRadius: 100,
        color: 'black',
        height: 50,
        width: windowWidth-20,
        borderWidth:1,
        borderColor:'#E8E8E8',
    },
    imageStyle: {
        borderRadius: 8,
        marginTop: 8,
        width: windowWidth - 26,
        height: 240
    },
    imageViewStyle: {
        alignItems: 'center',
    },
    headerTextStyle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
    },
    containerViewStyle: {
        marginTop: 8,
    },
    subHeaderStyle: {
        color: '#000000',
        marginTop: 8,
        fontSize: 14,
        fontWeight: '400',
    },
    mintTextStyles: {
        color: '#BDBDBD',
        fontSize: 14,
        marginTop: 8,
    }
})

export default styles;