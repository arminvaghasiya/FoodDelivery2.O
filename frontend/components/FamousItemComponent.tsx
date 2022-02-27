import React from 'react';
import {View, Text, Image} from 'react-native';

export type ItemProps = {
  restaurantImage: string;
  famousFood: string;
};

const FamousItemComponent = (props: ItemProps) => {
  return (
    <View>
      <View
        style={{
          width: 68,
          height: 68,
          borderRadius: 50,
          margin: 10,
          marginBottom: 50,
        }}>
        <Image
          style={{height: '100%', width: '100%', borderRadius: 50}}
          source={{
            uri: props.restaurantImage,
          }}></Image>
        <Text
          style={{
            alignSelf: 'center',
            alignContent: 'center',
            textAlign: 'center',
            marginTop: 10,
            fontSize: 12.5,
          }}>
          {props.famousFood}
        </Text>
      </View>
    </View>
  );
};

export default FamousItemComponent;
