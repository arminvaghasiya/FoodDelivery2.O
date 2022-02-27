import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Product from '../data/Product';
import ProductScreenComponent from '../components/ProductScreenComponent';

const ProductScreen = () => {
  return (
    <View>
      <FlatList
        data={Product}
        renderItem={({item}) => (
          <ProductScreenComponent
            productName={item.productName}
            productCategory={item.productCategory}
            productDescription={item.productDescription}
            productImage={item.productImage}
            productNoOfRating={item.productNoOfRating}
            productPrice={item.productPrice}
            productRating={item.productRating}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductScreen;
