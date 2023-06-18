import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Kode untuk melakukan proses login, misalnya dengan mengirim data ke server
    console.log('name:', name);
    console.log('Password:', password);
    const {data} = await axios.post(
      'http://10.0.2.2:3000/login', // harus pake ini gantinya localhost biar konek ke server
      {
        Name: name,
        Password: password,
      },
      // {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      // },
    );
    console.log(data, 'data');
  };
  async function getUser(name, password) {
    console.log('masuk lofin');
    try {
      const response = await axios.post(
        // 'http://10.0.2.2:3000/buridoapps',
        'http://10.0.2.2:3000/login',

        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: {
            Name: name,
            Password: password,
          },
        },
      );
      console.log(response, 'responsee');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        // style={{ marginTop: 10 }}
        source={require('../assets/verification.gif')}
      />
      <Text style={{color: 'black', fontWeight: 700}}>name</Text>
      <TextInput
        style={styles.input}
        placeholder="name"
        value={name}
        onChangeText={text => setName(text)}
        autoCapitalize="none"
      />
      <Text style={{color: 'black', fontWeight: 700}}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={{color: 'black', fontWeight: 700}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 20,
    // backgroundColor: "red",
  },
  input: {
    height: 60,
    // margin: 12,
    marginBottom: 5,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#DDE6ED',
  },
  button: {
    width: '100%',
    marginTop: 10,
    elevation: 4,
    backgroundColor: '#79EA99',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
  },
});
