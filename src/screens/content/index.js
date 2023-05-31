import { SafeAreaView, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-elements'
import styles from '../content/styles'

const renderHeader = () => (
        <View style={styles.headerContainer}>
            <Text
                onPress={() => alert('Back')}
                style={styles.buttonStyle}>Back
            </Text>

            <Text style={styles.headerText}>Content</Text>

            <Text
                onPress={() => alert('Filter Pressed')}
                style={styles.buttonStyle}>Filter</Text>
        </View>
)

const renderSearchBar = () => (
    <View style={styles.searchContainerStyle} >
        <SearchBar 
            placeholder='Search'
            inputContainerStyle={styles.inputContainerStyles}
            containerStyle={styles.searchContainerStyle}
            searchIcon={false}
            placeholderTextColor='#BDBDBD'
            inputStyle={{fontSize: 16}}
        />
    </View>
)

const DATA = [
    { 
      id: 1,
      image: require('../../../assets/loading.png'),
      header: 'Header', 
      mintAgo: '8m ago', 
      subHeader: "He 'll want to use your yacht, and I don't want this thing smelling like fish." 
    },
    { 
      id: 2,
      image: require('../../../assets/loading.png'),
      header: 'Header', 
      mintAgo: '8m ago', 
      subHeader: "He 'll want to use your yacht, and I don't want this thing smelling like fish." 
    },
];

const Item = ({header, mintAgo, subHeader, image}) => (
  <View style={{marginHorizontal: 16}}>
        <View style={styles.imageViewStyle}>
            <Image
                source={image}
                style={styles.imageStyle}
            />
        </View>
        <View style={styles.containerViewStyle}>
            <Text style={styles.headerTextStyle} >{header}</Text>
            <Text style={styles.subHeaderStyle} numberOfLines={2}>{subHeader}</Text>
            <Text style={styles.mintTextStyles}>{mintAgo}</Text>
        </View>
  </View>
);


const renderContentScreen = () => (
     <FlatList
            data={DATA}
            renderItem={({item}) => 
            <Item 
                header={item.header} mintAgo={item.mintAgo} 
                subHeader={item.subHeader} image={item.image}
            />}
            keyExtractor={item => item.id}
        />
)


const ContentScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
        <View style={styles.topViewContainerStyles}>
            {renderHeader()}
            {renderSearchBar()}
            {renderContentScreen()}
        </View>
      </SafeAreaView>
  )
}

export default ContentScreen;