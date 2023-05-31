import React from 'react'
import styles from './styles'
import { Text, View, SafeAreaView, Image, FlatList, } from 'react-native'
import { SearchBar } from 'react-native-elements'

const renderHeader = () => (
        <View style={styles.headerContainer}>
            <Text
                onPress={() => alert('Back')}
                style={styles.buttonStyle}>Back
            </Text>

            <Text style={styles.headerText}>Feed</Text>

            <Text
                onPress={() => alert("Filter Pressed")}
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
  { id: 1,
     header: 'Header', 
            mintAgo: '8m ago', 
                subHeader: "He 'll want to use your yacht, and I don't want this thing smelling like fish." },

  { id: 2, 
    header: 'Header', 
            mintAgo: '8m ago', 
                subHeader: "He 'll want to use your yacht, and I don't want this thing smelling like fish." },
{ id: 3, 
    header: 'Header', 
            mintAgo: '8m ago', 
                subHeader: "He 'll want to use your yacht, and I don't want this thing smelling like fish." },
{ id: 4, 
    header: 'Header', 
            mintAgo: '8m ago', 
                subHeader: "He 'll want to use your yacht, and I don't want this thing smelling like fish.",
                    image: require('../../../assets/loading.png'), },
];

const Item = ({header, mintAgo, subHeader}) => (
  <View style={styles.imageViewStyle}>
    <View>
        <Image
            source={require('../../../assets/loading.png')}
            style={styles.imageStyle}
        />
    </View>
    <View style={styles.headerViewStyle}>
        <View style={{flexDirection: 'row',justifyContent: 'space-between' }}>
            <Text style={styles.nameTextStyles} >{header}</Text>
            <Text style={styles.mintTextStyles}>{mintAgo}</Text>
        </View>
        <Text style={styles.subHeaderStyle} numberOfLines={2}>{subHeader}</Text>
        <View style={styles.borderLine} />
        </View>
  </View>
);

const renderContentBlock = () => (
        <FlatList
            data={DATA}
            renderItem={({item}) => 
            <Item 
                header={item.header} mintAgo={item.mintAgo} 
                subHeader={item.subHeader}
            />}
            keyExtractor={item => item.id}
        />
        
)

const renderImage = () => (
    <View style={{alignItems: 'center'}}>
        <Image
            source={require('../../../assets/loading.png')}
            style={{width: "90%", height: 176}}
        />
    </View>
)

const Feed = () => {
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
        <View style={styles.topViewContainerStyles}>
            {renderHeader()}
            {renderSearchBar()}
            {renderContentBlock()}
            {renderImage()}
        </View>
      </SafeAreaView>
  )
}

export default Feed;