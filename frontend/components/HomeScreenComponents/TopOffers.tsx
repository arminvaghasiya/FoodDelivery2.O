import React from 'react';
import {ScrollView, FlatList, StyleSheet, Text, View} from 'react-native';
import Offer from '../Offer';
import OfferData from '../../data/OfferData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TopOffers = () => {
  return (
    <View style={{marginVertical: 15, top: 15, backgroundColor: 'white'}}>
      <View
        style={{
          height: 8,
          marginBottom: 22,
          marginTop: 5,
          backgroundColor: '#ebebeb',
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
          marginTop: 10,
        }}>
        <MaterialCommunityIcons name="sale" size={20} color="#8f58c7" />
        <Text style={styles.title}>Top Offers</Text>
      </View>
      <Text style={{color: 'gray', marginLeft: 10, marginTop: 5}}>
        Big Savings On Your Loved Eateries
      </Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 10}}>
        <FlatList
          contentContainerStyle={{alignSelf: 'flex-start'}}
          numColumns={Math.ceil(OfferData.length / 2)}
          scrollEnabled={false}
          data={OfferData}
          renderItem={({item}) => (
            <Offer
              restaurantImage={item.restaurantImage}
              restaurantName={item.restaurantName}
              rating={item.rating}
              timeTodeliver={item.timeTodeliver}
            />
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 3,
  },
});

export default TopOffers;
