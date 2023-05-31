import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"white",
    },
    feedHeaderStyle: {
        marginHorizontal:16,
        marginTop: 44,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    backAndFiltterButtonStyle: {
        fontSize:16,
        fontWeight:'500',
        lineHeight:24,
        color: '#5DB075',
        fontStyle: 'normal',

    },
    feedStyle: {
        fontSize:30,
        lineHeight:30,
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight:'600',
    },
    searchBarStyle: {
        marginTop:18,
        backgroundColor:'#F6F6F6',
        marginHorizontal:10,
        borderRadius:120,
        padding:15,
        borderRadius:100,
        fontSize:16,
    },
    feedLoadingImg: {
        height:50,
        width:50,
        flexDirection:'row',
        marginTop:21,
        marginLeft:16,
        borderRadius:8
    },
    feedHeadingStyle: {
        marginLeft:16,
        fontWeight:'600',
        fontSize:16,
        color:'#000000'
    },
    feedTimerStyle: {
        marginLeft:180,
        fontSize:14,
        fontWeight:'400',
        lineHeight:17,
        color:'#BDBDBD'
    }
})

export default styles;