import { Platform, StyleSheet,Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    topViewContainerStyles: {
        paddingTop: Platform.OS === 'android' ? 40 : 0,
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
        width: 110,
        height: 110
    },
    textStyles: {
        fontSize: 24,
        fontWeight: '500',
        color: '#000000',
        marginTop: 15,
        marginBottom: 10,
    },
    marketingViewStyle: {
        marginLeft: 16
    },
    innerTextStyles: {
        width: 90,
        fontSize: 14,
        marginTop: 5,
    },
    innerTextStyles2: {
        fontWeight: '600',
        fontSize: 14,
        marginTop: 8,
        marginBottom: 13
    },
    marketingInnerViewStyle: {
        marginRight: 16,
    }
})

export default styles;