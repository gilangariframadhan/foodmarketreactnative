import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
import {FoodDummy1} from '../../assets';

const OrderSummary = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subtitle="You deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>OrderSummary</Text>
        <ItemListFood
          type="order-summary"
          name="Sop Bumil"
          price="300.000"
          image={FoodDummy1}
          items={14}
        />
        <Text style={styles.label}>Details Transaction</Text>
        <ItemValue label="Cherry Healty" value="IDR 18.000.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 180.000" />
        <ItemValue
          label="Total Price"
          value="IDR 18.200.000"
          valueColor="#1ABC9C"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value="Angga" />
        <ItemValue label="Phone No." value="0898 2910 1281" />
        <ItemValue label="Address" value="Permata Indah" />
        <ItemValue label="House No." value="45" />
        <ItemValue label="City" value="Pontianak" />
      </View>
      <View style={styles.button}>
        <Button
          text="Cancle My Order"
          onPress={() => navigation.replace('SuccessOrder')}
        />
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 14,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Reguler',
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, marginTop: 24},
});
