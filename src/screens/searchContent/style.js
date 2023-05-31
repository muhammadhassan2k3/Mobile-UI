import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,
    },
    contentHeaderStyle: {
        marginHorizontal: 16,
        marginTop: 80,
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    backAndFilterBtnStyle: {
        fontWeight:"500",
        fontSize:16,
        marginTop:9,
        color:'#5DB075',
        lineHeight:19
    },
    ContentHeadingStyle: {
        fontSize:30,
        lineHeight:36,
        fontWeight:'600',
        color:'#000000',
    },
    searchBarStyle: {
        marginTop:32,
        backgroundColor:'#F6F6F6',
        marginHorizontal:10,
        borderRadius:120,
        padding:15,
        borderRadius:100,
        fontSize:23,
    },
    infoStyle: {
        marginTop:32,
        marginBottom:14,
        color: '#000000',
        fontSize:16,
        fontWeight:'500',
        marginHorizontal: 33,
        
    }
})

export default styles;