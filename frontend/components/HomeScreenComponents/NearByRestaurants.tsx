import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Restaurants from './Restaurants';
import RestaurantNearbyMeData from '../../data/RestaurantNearbyMeData';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NearbyRestaurants = () => {
  return (
    <View>
      <View
        style={{
          height: 8,
          backgroundColor: '#ebebeb',
          marginVertical: 14,
        }}></View>
      <View style={{margin: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              borderRadius: 15,
              borderColor: '#8f58c7',
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 3,
            }}>
            <MaterialIcons name="restaurant" size={18} color="black" />
          </View>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 4}}>
            All Restaurants Nearby
          </Text>
        </View>
        <Text style={{color: 'gray', marginTop: 3}}>
          Discover unique taste near you
        </Text>
      </View>
      <FlatList
        data={RestaurantNearbyMeData}
        renderItem={({item}) => (
          <Restaurants
            restaurantName={item.restaurantName}
            restaurantImage={item.restaurantImage}
            rating={item.rating}
            timeTodeliver={item.timeTodeliver}
            category={item.category}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NearbyRestaurants;
