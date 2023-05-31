import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
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
    inputContainerStyles: {
        backgroundColor: '#F6F6F6',
        borderRadius: 100,
        color: 'black',
        height: 60,
        borderWidth:1,
        borderColor:'#E8E8E8',
    },
    searchContainerStyle: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    imageViewStyle: {
        flexDirection: 'row',
        marginTop: 10,
    },
    imageStyle: {
        marginLeft: 16,
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    nameTextStyles: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginLeft: 16,
    },
    mintTextStyles: {
        fontSize:14,
        fontWeight:'400',
        lineHeight:17,
        color:'#BDBDBD',
        marginRight: 18
    },
    headerViewStyle: {
        flex:1,
    },
    subHeaderStyle: {
        marginTop:8, 
        marginLeft:16, 
        fontSize:14, 
        fontWeight:'400'
    },
    borderLine: {
        backgroundColor: '#E8E8E8',
        paddingTop:1,
        width:280,
        marginTop: 14
    },
})