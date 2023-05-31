import React from 'react'
import { Text, View, SafeAreaView, FlatList, Image, ScrollView } from 'react-native'
import styles from '../Market/styles'
import { SearchBar } from 'react-native-elements'


const renderHeader = () => (
        <View style={styles.headerContainer}>
            <Text
                onPress={() => alert('Back')}
                style={styles.buttonStyle}>Back</Text>

            <Text style={styles.headerText}>Market</Text>

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
      itemName: 'Item #1 Name Goes Here',
      itemPrice: "$19.99" 
    },
    {
      id: 2,
      image: require('../../../assets/loading.png'),
      itemName: 'Item #1 Name Goes Here',
      itemPrice: "$19.99" 
    },
    {
      id: 3,
      image: require('../../../assets/loading.png'),
      itemName: 'Item #1 Name Goes Here',
      itemPrice: "$19.99" 
    },
    {
      id: 4,
      image: require('../../../assets/loading.png'),
      itemName: 'Item #1 Name Goes Here',
      itemPrice: "$19.99" 
    },
];

const renderMarketingItems = (title, data) => {
    return (
        <View style={styles.marketingViewStyle}>
                <Text style={styles.textStyles}>{title}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem= {({item}) => 
                        <View style={styles.marketingInnerViewStyle}>
                            <Image
                                source={item.image}
                                style={styles.imageStyle}
                            />
                            <Text style={styles.innerTextStyles}>{item.itemName}</Text>
                            <Text style={styles.innerTextStyles2}>{item.itemPrice} </Text>
                        </View>
                    }

                    
                
                />
        </View>

)}



const MarketScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
        <View style={styles.topViewContainerStyles}>
            {renderHeader()}
            {renderSearchBar()}
            <ScrollView>
                {renderMarketingItems('Hot deals', DATA)}
                {renderMarketingItems('Trending', DATA)}
                {renderMarketingItems('Deals', DATA)}
            </ScrollView>
        </View>
      </SafeAreaView>
  )
}

export default MarketScreen
