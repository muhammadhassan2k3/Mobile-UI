import React from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

const SearchContentData = [
    {
        id: 1,
        info: 'Search result',
    },
    {
        id: 2,
        info: 'Search result',
    },
    {
        id: 3,
        info: 'Search result',
    },
    {
        id: 4,
        info: 'Search result',
    },
    {
        id: 5,
        info: 'Search result',
    },
    {
        id: 6,
        info: 'Search result',
    },
];
const ItemSeparator = () => (
    <View
        style={{
            height: 1,
            backgroundColor: '#E8E8E8',
            marginHorizontal: 35
        }}
    />
);

const renderSearchContentHeader = () => {
    return (
        <View style={styles.contentHeaderStyle}>
            <Text
                onPress={() => alert("Back")}
                style={styles.backAndFilterBtnStyle}>Back</Text>
            <Text style={styles.ContentHeadingStyle}>Content</Text>
            <Text
                onPress={() => alert("Filter")}
                style={styles.backAndFilterBtnStyle}>Filter</Text>
        </View>
    )
}
const renderSearchBar = () => {
    return (
        <View>
            <TextInput
                style={styles.searchBarStyle}
                placeholder="Search"
            />
        </View>
    )
}
const renderSerachContentData = () => {
    return (
        <View>
            <FlatList
                data={SearchContentData}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <Text style={styles.infoStyle}>{item.info}</Text>
                }
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    )
}
const SearchContentScreen = () => {
    return (
        <View style={styles.container}>
            {renderSearchContentHeader()}
            {renderSearchBar()}
            {renderSerachContentData()}
        </View>
    )
}

export default SearchContentScreen;