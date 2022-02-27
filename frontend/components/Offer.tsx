import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export type OfferProps = {
  restaurantName: string;
  restaurantImage: string;
  rating: string;
  timeTodeliver: string;
};

const Offer = (props: OfferProps) => {
  return (
    <View
      style={{
        height: 155,
        width: 160,
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 5,
      }}>
      <View style={{}}>
        <Image
          source={{
            uri: props.restaurantImage,
          }}
          style={styles.image}></Image>
      </View>
      <View
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          padding: 2,
          borderRadius: 4,
          top: 82,
        }}>
        <Text style={{fontSize: 12, color: '#8f58c7', fontWeight: 'bold'}}>
          60% OFF Upto {'\u20B9'}125
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          marginTop: 2,
        }}>
        <Text style={{fontWeight: 'bold'}}>{props.restaurantName}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 8,
          alignItems: 'center',
        }}>
        <Entypo name="star" size={15} color="gray" />
        <Text style={{fontSize: 12, color: 'gray', marginHorizontal: 3}}>
          {props.rating}
        </Text>
        <Text style={{marginBottom: 5}}>.</Text>
        <Text style={{fontSize: 12, color: 'gray', marginHorizontal: 6}}>
          {props.timeTodeliver}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 105,
    width: 145,
    alignSelf: 'center',
    borderRadius: 12,
  },
});
export default Offer;
