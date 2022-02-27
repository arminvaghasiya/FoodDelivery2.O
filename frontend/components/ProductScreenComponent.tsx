import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export type ProductComponentType = {
  productName: string;
  productCategory: string;
  productRating: number;
  productNoOfRating: string;
  productPrice: string;
  productDescription: string;
  productImage: string;
};

const ProductScreenComponent = (props: ProductComponentType) => {
  return (
    <View style={{height: 160, padding: 13, flexDirection: 'row'}}>
      <View style={{flex: 3}}>
        <View>
          <Image
            style={{height: 13, width: 13, borderRadius: 2}}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png',
            }}
          />
        </View>
        <View style={{}}>
          <Text style={{fontSize: 13, fontWeight: '600', marginTop: 7}}>
            {props.productName}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 11, color: 'gray', marginTop: 7}}>
            {props.productCategory}
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: '#fcfcf2',
            borderColor: '#fce651',
            padding: 1,
            borderRadius: 4,
            alignItems: 'center',
            width: 96,
            marginTop: 7,
          }}>
          <View style={{flexDirection: 'row'}}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                // key={`${item.id}-${i}`}
                style={{margin: 0.5}}
                name={i < Math.floor(props.productRating) ? 'star' : 'star-o'}
                size={11}
                color={'#fabe1b'}
              />
            ))}
            <Text
              style={{
                fontSize: 11,
                color: '#696965',
                fontWeight: 'bold',
                marginLeft: 2,
              }}>
              {props.productNoOfRating}
            </Text>
          </View>
        </View>
        <View style={{justifyContent: 'center', marginTop: 7}}>
          <Text style={{fontSize: 12, fontWeight: '500'}}>
            {'\u20B9'}
            <Text style={{fontSize: 12}}>{props.productPrice}</Text>
          </Text>
        </View>
        <View style={{marginTop: 7}}>
          <Text style={{fontSize: 12, color: '#4f4f4d'}}>
            {props.productDescription}
          </Text>
        </View>
      </View>
      <View style={{flex: 1, marginTop: 5, marginRight: 10}}>
        <View>
          <Image
            style={{height: 95, width: 95, borderRadius: 10}}
            source={{
              uri: props.productImage,
            }}
          />
        </View>
        <View
          style={{
            height: 32,
            width: 85,
            position: 'absolute',
            top: '63%',
            left: '6%',
            backgroundColor: '#fcf7ff',
            borderColor: '#be8ee6',
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: 9,
          }}>
          <Pressable style={{flexDirection: 'row'}}>
            <Text style={{color: '#a041f0', fontWeight: '500'}}>ADD</Text>
            <Text
              style={{
                color: '#a041f0',
                fontWeight: '500',
                position: 'absolute',
                top: '-32%',
                fontSize: 12,
                left: '50%',
              }}>
              +
            </Text>
          </Pressable>
        </View>
        <View style={{position: 'absolute', top: '90%', left: '15%'}}>
          <Text style={{fontSize: 11, color: '#848385'}}>customizable</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductScreenComponent;
