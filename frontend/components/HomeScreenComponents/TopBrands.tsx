import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, Button} from 'react-native';
import Discount from '../Discount';
import {Col, Row, Grid} from 'react-native-easy-grid';
import AntDesign from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;

const App = () => {
  return (
    <View style={{marginVertical: 25}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 15,
          marginTop: 10,
        }}>
        <AntDesign name="like1" size={22} color="#af7ae6" />
        <Text style={{fontWeight: 'bold', fontSize: 19, marginLeft: 5}}>
          Top Brands : )
        </Text>
      </View>
      <View
        style={{
          height: 265,
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Grid style={styles.horGrid}>
          <Col>
            <View style={styles.poster}>
              <Image
                style={styles.banner}
                source={{
                  uri: 'https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-table_181624-34062.jpg?size=626&ext=jpg',
                }}></Image>
              <Discount />
              <Text style={styles.textc}>Pizza</Text>
            </View>
          </Col>
          <Col>
            <View style={styles.poster}>
              <Image
                style={styles.banner}
                source={{
                  uri: 'https://www.poptos.com/assets/image/upload/welcome.png',
                }}></Image>
              <Discount />
              <Text style={styles.textc}>Pizza</Text>
            </View>
          </Col>
          <Col>
            <View style={styles.poster}>
              <Image
                style={styles.banner}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Burger_King_Whopper_Combo.jpg/1024px-Burger_King_Whopper_Combo.jpg',
                }}></Image>
              <Discount />
              <Text style={styles.textc}>Pizza</Text>
            </View>
          </Col>
          <Col>
            <View style={styles.poster}>
              <Image
                style={styles.banner}
                source={{
                  uri: 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/PizzaHut.jpg?itok=5vNSzG6r',
                }}></Image>
              <Discount />
              <Text style={styles.textc}>Pizza</Text>
            </View>
          </Col>
        </Grid>
        <Grid style={styles.horGrid}>
          <Col>
            <View style={styles.poster}>
              <Image
                style={styles.banner}
                source={{
                  uri: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/mcdonalds-burgers-fries.jpg?quality=82&strip=1&resize=640%2C360',
                }}></Image>
              <Discount />
              <Text style={styles.textc}>Pizza</Text>
            </View>
          </Col>
          <Col>
            <View style={styles.poster}>
              <Image
                style={styles.banner}
                source={{
                  uri: 'https://gumlet.assettype.com/swarajya%2F2016-03%2Fa1431a1b-fd5e-4ec8-ae83-95753bb4c2bd%2Fdosa.jpg?w=1200&auto=format%2Ccompress&ogImage=true',
                }}></Image>
              <Discount />
              <Text style={styles.textc}>Pizza</Text>
            </View>
          </Col>
          <Col>
            <View style={styles.poster}>
              <Image
                style={styles.banner}
                source={{
                  uri: 'https://media.womensweekly.com.sg/public/2020/06/Tips-You-Didnt-Know-Could-Help-You-Save-Money-At-Starbucks.jpg',
                }}></Image>
              <Discount />
              <Text style={styles.textc}>Pizza</Text>
            </View>
          </Col>
          <Col>
            <View style={styles.poster}>
              <Image
                style={styles.banner}
                source={{
                  uri: 'https://geekrobocook.com/wp-content/uploads/2021/02/Pav-Bhaji.jpg',
                }}></Image>
              <Discount />
              <Text style={styles.textc}>Pizza</Text>
            </View>
          </Col>
        </Grid>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  poster: {
    width: 70,
    height: 70,
    backgroundColor: '#000',
    borderRadius: 50,
  },
  banner: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  horGrid: {
    marginLeft: 19,
    width: 350 % windowWidth,
    margin: 10,
    marginVertical: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  textc: {
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 7,
  },
});

export default App;
