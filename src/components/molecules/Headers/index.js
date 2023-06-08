import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcBack} from '../../../assets';

const Header = ({title, subtitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'},
  subtitle: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'},
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
});
