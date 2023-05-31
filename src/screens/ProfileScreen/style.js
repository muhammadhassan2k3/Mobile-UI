import { StyleSheet,Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    ProfileHeader: {
        paddingHorizontal:16,
        paddingTop: 45,
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: '#5DB075',
        // height: 245,
        width:windowWidth,
    },
    logOutAndSettingButtonStyle: {
        fontSize:16,
        fontWeight:'500',
        lineHeight:24,
        color: '#FFFFFF',
        fontStyle: 'normal',

    },
    ProfleStyle: {
        fontSize:30,
        lineHeight:30,
        textAlign: 'center',
        color:'#FFFFFF',
        fontStyle: 'normal',
        fontWeight:'600',
    },
    profileImgStyle:{
        marginTop:60,
        borderRadius:100,
        alignSelf:'center',
        borderColor:'White',
        borderWidth:5,
        border:'#FFFFFF'
    },
    profilerName : {
        marginTop:57,
        color:'#000000',
        textAlign:'center',
        fontWeight:'600',
        fontSize:30,
        lineHeight:36,
        fontStyle:'normal'

    },
    profilerBio : {
        marginTop:8,
        color:'#000000',
        textAlign:'center',
        fontWeight:'600',
        fontSize:16,
        lineHeight:36,
        fontStyle:'normal'

    },
    btnContainerStyle: {
        backgroundColor:'white',
        flexDirection:'row',
        marginTop:24 ,
        alignSelf:'center', 
        backgroundColor:'#E8E8E8',
        borderRadius:100,
        borderColor:'#E8E8E8',
        border:10,
    },
    btnStyle: {
        marginHorizontal:2,
        paddingVertical:15,
        paddingHorizontal:50,
        borderRadius:100,

        
    },

})
export default styles;