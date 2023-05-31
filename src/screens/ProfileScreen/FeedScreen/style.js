import { StyleSheet,Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#F6F6F6',
        flex:1,
    },

    imgStyle: {
        marginTop:16,
        marginHorizontal:16,
        width:windowWidth - 40,
        height:240,
        alignSelf:'center',
        borderRadius:10,
    },
    headerStyle: {
        marginTop:8,
        fontSize:16,
        fontStyle:'normal',
        fontWeight:'600',
        lineHeight:19,
        color:'#000000',
        borderRadius:100,
        marginHorizontal:18,
    },
    infoStyle: {
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:14,
        lineHeight:17,
        color:'#000000',
        marginVertical:8,
        marginHorizontal:18,

    },
    timerStyle: {
        color: '#BDBDBD',
        fontStyle:'normal',
        fontWeight:'400',
        lineHeight:17,
        marginHorizontal:18,

    }

})

export default styles;