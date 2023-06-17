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

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Kode untuk melakukan proses login, misalnya dengan mengirim data ke server
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <View style={styles.container}>
      <Image
        // style={{ marginTop: 10 }}
        source={require('../assets/verification.gif')}
      />
      <Text style={{color: 'black', fontWeight: 700}}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
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
      <TouchableOpacity style={styles.button}>
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
