import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
  TextComponent,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import FamousItem from '../../data/FamousItem';
import FamousItemComponent from '../FamousItemComponent';

const FamousItems = () => {
  return (
    <View>
      <View
        style={{
          height: 8,
          backgroundColor: '#ebebeb',
          marginVertical: 14,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 15,
          alignItems: 'center',
          marginTop: 25,
        }}>
        <View style={{}}>
          <Entypo name="emoji-happy" size={23} color="#8f58c7" />
        </View>
        <Text style={{fontSize: 19, fontWeight: 'bold', marginLeft: 4}}>
          Eat What Makes You Happy...
        </Text>
      </View>
      <View>
        <View style={{height: 300, marginLeft: 13}}>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingVertical: 10}}>
            <FlatList
              data={FamousItem}
              contentContainerStyle={{alignSelf: 'flex-start'}}
              numColumns={Math.ceil(FamousItem.length / 2)}
              scrollEnabled={false}
              style={{marginTop: 25}}
              renderItem={({item}) => (
                <FamousItemComponent
                  famousFood={item.famousFood}
                  restaurantImage={item.restaurantImage}
                />
              )}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default FamousItems;
