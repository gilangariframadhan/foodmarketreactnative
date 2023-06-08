import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {setLoading, signUpAction} from '../../redux/action';
import {showMessage, storeData, useForm} from '../../utils';
import axios from 'axios';
import {API_HOST} from '../../config';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });

  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector(state => state);

  const onSubmit = async () => {
    try {
      const data = {
        ...form,
        ...registerReducer,
      };
      console.log('form: ', data);
      dispatch(setLoading(true));
      const submitRegister = await axios.post(`${API_HOST.url}/register`, data);

      console.log('response: ', submitRegister);
      const token = `${submitRegister.data.data.token_type} ${submitRegister.data.data.access_token}`;
      const profile = submitRegister.data.data.user;

      storeData('token', {
        value: token,
      });
      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);
        console.log('Token', token);

        // const submitFoto = await

        axios({
          method: 'POST',
          url: `${API_HOST.url}/users/photo`,
          data: photoForUpload,
          headers: {
            Authorization: token,
            'Content-Type:': 'multipart/form-data',
          },
          transformRequest: (data, header) => {
            return photoForUpload;
          },
        })
          .then(res => console.log('res:', res))
          .catch(err => console.log('err', JSON.stringify(err)));

        // axios.post(
        //   `${API_HOST.url}/users/photo`,
        //   photoForUpload,
        //   {
        //     headers: {
        //       Authorization: token,
        //       'Content-Type:': 'multipart/form-data',
        //     },
        //   },
        // );

        // profile.profile_photo_url = `http://10.0.2.2:8000/api/storage/${submitFoto.data.data[0]}`;
        // storeData('userProfile', profile);
        // navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      } else {
        storeData('userProfile', profile);
        navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      }
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      showMessage('Upload photo tidak berhasil', error);
      console.log('error: ', error);
    }
    // dispatch(signUpAction(data, photoReducer, navigation));
  };

  return (
    <View style={styles.page}>
      <Header
        title="Address"
        subtitle="Make sure it’s valid"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <TextInput
          label="Phone Number"
          placeholder="Type your phone number"
          value={form.phoneNumber}
          onChangeText={value => setForm('phoneNumber', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Address"
          placeholder="Type your address"
          value={form.address}
          onChangeText={value => setForm('address', value)}
        />
        <Gap height={16} />
        <TextInput
          label="House Number"
          placeholder="Type your house number"
          value={form.houseNumber}
          onChangeText={value => setForm('houseNumber', value)}
        />
        <Gap height={16} />
        <Select
          label="City"
          value={form.city}
          onSelectChange={value => setForm('city', value)}
        />
        <Gap height={16} />
        <Button text="Sign Up Now" onPress={onSubmit} />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
