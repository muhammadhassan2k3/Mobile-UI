import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./style";

const ContentScreenData = [
    {
        tittle: 'Header',
        info: 'Hell want to use your yacht, and I dont want this thing smelling like fish.',
        timer: '8m ago',
        img: require('../../../../assets/profileImg.png'),

    },
    {
        tittle: 'Header',
        info: 'Hell want to use your yacht, and I dont want this thing smelling like fish.',
        timer: '8m ago',
        img: require('../../../../assets/profileImg.png'),
    },

]

const renderContentData = () => {
    return (
        <FlatList
            data={ContentScreenData}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
                <View>
                    <Image source={item.img}
                        style={styles.imgStyle}
                    />
                    <View>
                        <Text style={styles.headerStyle}>{item.tittle}</Text>
                        <Text style={styles.infoStyle}>{item.info}</Text>
                        <Text style={styles.timerStyle}>{item.timer}</Text>
                    </View>
                </View>
            }
        />
    )
}

const ContentScreen = () => {
    return (
        <View>
            <ScrollView>
            {renderContentData()}
            </ScrollView>
            
        </View>
    )
}
export default ContentScreen;