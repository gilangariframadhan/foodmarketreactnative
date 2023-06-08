import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProfileDummy} from '../../../assets';
import {getData} from '../../../utils';

const HomeProfile = () => {
  const [photo, setPhoto] = useState(ProfileDummy);

  useEffect(() => {
    getData('userProfile').then(res => {
      console.log('user profile: ', res);
      setPhoto({uri: res.profile_photo_url});
    });
  }, []);
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>FoodMarket</Text>
        <Text style={styles.desc}>Let’s get some foods</Text>
      </View>
      <Image source={photo} styles={styles.profile} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  profile: {width: 50, height: 50, borderRadius: 8},
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {fontSize: 24, fontFamily: 'Poppins-Light', color: '#8D92A3'},
});
