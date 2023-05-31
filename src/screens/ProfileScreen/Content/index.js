import React from "react";
import {FlatList, Image, Text, View} from "react-native";
import styles from '../Content/style'
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from "react-native-gesture-handler";

const FeedScreensData = [{
    key: 1,
    header: 'Header',
    img: require('../../../../assets/profileImg.png'),
    time: '8m ago',
    subHeader: 'Hell want to use your yacht, and I dont want this thing smelling like fish.',

}, {
    key: 2,
    header: 'Header',
    img: require('../../../../assets/profileImg.png'),
    time: '8m ago',
    subHeader: 'Hell want to use your yacht, and I dont want this thing smelling like fish.',
}, {
    key: 3,
    header: 'Header',
    img: require('../../../../assets/profileImg.png'),
    time: '8m ago',
    subHeader: 'Hell want to use your yacht, and I dont want this thing smelling like fish.',
}, {
    key: 4,
    header: 'Header',
    img: require('../../../../assets/profileImg.png'),
    time: '8m ago',
    subHeader: 'Hell want to use your yacht, and I dont want this thing smelling like fish.',
},];

const renderFeedScreenData = () => {
    const navigation = useNavigation();
    return (<FlatList
        data={FeedScreensData}
        keyExtractor={item => item.key}
        renderItem={({item}) => <View style={{flexDirection: 'row',}}>
            <View>
                <Image
                    style={styles.feedLoadingImg}
                    source={item.img}/>
            </View>

            <View style={{flex: 1}}>
                <View style={{flexDirection: "row", marginTop: 21}}>

                    <Text
                        style={styles.feedHeadingStyle}
                    > {item.header} </Text>
                    <Text
                        style={styles.feedTimerStyle}
                    >{item.time}
                    </Text>
                </View>
                <Text
                    style={{marginTop: 8, marginRight: 24, marginLeft: 16, fontWeight: '400', color: '#000000'}}
                >{item.subHeader}</Text>
                <View style={{backgroundColor: '#E8E8E8', paddingTop: 1, width: 280, marginVertical: 8}}/>
            </View>

        </View>}
    />)
}

const Content = () => {
    return (<View>
        <ScrollView>
            {renderFeedScreenData()}
        </ScrollView>
    </View>)
}
export default Content;