import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Rating from '../Rating';

const FoodCard = ({image, name, rating}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>{name}</Text>
        <Rating number={rating} />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    borderRadius: 8,
    overflow: 'hidden',
    margin: 24,
  },
  image: {width: 200, height: 140, resizeMode: 'cover'},

  content: {padding: 12},
  text: {fontSize: 16, fontFamily: 'Poppins-Reguler', color: '#020202'},
});
