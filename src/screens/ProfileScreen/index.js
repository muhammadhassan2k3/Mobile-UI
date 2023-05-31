import React, { useState } from "react";
import { View, Text,TouchableOpacity, Image,StatusBar } from "react-native";
import styles from "./style";
import Content from "./Content";
import ContentScreen from "./FeedScreen";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler"; 


const ProfileScreen = () => {
    const [activeIndex,setActiveIndex] = useState(0)
    const navigation = useNavigation(); 

    const renderProfileHeader = () => {
        return (
            <View style={styles.ProfileHeader}>
                <Text
                    style={styles.logOutAndSettingButtonStyle}>
                    Setting</Text>
                <Text
                    style={styles.ProfleStyle}
                >Profile</Text>
                <Text 
                onPress={()=>navigation.navigate('RatingScreen')}
                style={styles.logOutAndSettingButtonStyle}>
                    logout</Text>
            </View>
        )
    }
    const renderProfileImg = () => {
        return(
            <View style = {{backgroundColor:'#5DB075', height:150}}>
                <Image
                    style = {styles.profileImgStyle}
                    source={require('../../../assets/profileImg.png')}
                    />
            </View>
        )
    }
    
    const renderNameAndBio = () => {
        return(
            <View>
                <Text style = {styles.profilerName}>Victoria Robertson</Text>
                <Text style = {styles.profilerBio}>A mantra goes here</Text>
            </View>
        )
    }
    
    const renderDetailsButton = () => {
        return(
            <View style = {styles.btnContainerStyle}>
                <TouchableOpacity
                onPress={()=>{setActiveIndex(0)}}
                style = {[styles.btnStyle,activeIndex === 0 && {backgroundColor:'white',borderRadius:100,}]}>
                    <Text>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{setActiveIndex(1)}}
                style = {[styles.btnStyle, activeIndex === 1 && {backgroundColor:'white',borderRadius:100,}]}>
                    <Text>Photos</Text>
                </TouchableOpacity>
            </View>
        )
    }


    const renderFlatlist = () => {
        if(activeIndex === 0) {
            return <Content/>
        } else {
           return <ContentScreen/>            
        }
    }



    return(
        <View>
            {renderProfileHeader()}
            {renderProfileImg()}
            {renderNameAndBio()}
            {renderDetailsButton()}
            {renderFlatlist()}           
                   </View>
    )
  
}

export default ProfileScreen;