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

  //   POST https://fcm.googleapis.com/v1/projects/myproject-b5ae1/messages:send HTTP/1.1

  // Content-Type: application/json
  // Authorization: Bearer ya29.ElqKBGN2Ri_Uz...HnS_uNreA

  // {
  //    "message":{
  //       "token":"bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1...",
  //       "data":{},
  //       "notification":{
  //         "body":"This is an FCM notification message!",
  //         "title":"FCM Message"
  //       }
  //    }
  // }

  const handleLogin = async () => {
    // Kode untuk melakukan proses login, misalnya dengan mengirim data ke server
    console.log('name:', name);
    console.log('Password:', password);

    const FIREBASE_API_KEY =
      'AAAAt0PqXzk:APA91bHNw6SPNuaocnfFdqKYuusdx8XrCxXlVxHjHmC1_JpjplzneucO5c8aKOHz4pTZ4sAmWQBC-WLdmMKNcwps8WY9YnDTiSeDydZ8wl_VrKxky79nteh3vMm6YPIjUyFlERj-oOBf';
    const message = {
      registration_ids: [
        'cXLpt9oeQpSREGrNwqSFgw:APA91bGCtbxbWolcUSTkuw8jik3BBKpYjzndAzcPTGt-NixTWiYpiNeqXoFvGvOmtWUszfw9RAvI9289hrm5qO-rH_BnnjaOiANINd7GmAkx2Mh69VKHR7Tv9Mjb7RihNhnvUekkJoW7',
      ],
      notification: {
        title: 'india vs south africa test',
        body: 'IND chose to bat',
        vibrate: 1,
        sound: 1,
        show_in_foreground: true,
        priority: 'high',
        content_available: true,
        image:
          'https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-127-641a1d518802b.jpg?crop=0.813xw:0.721xh;0.0994xw,0.128xh&resize=1200:*',
      },
      data: {
        title: 'india vs south africa test',
        body: 'IND chose to bat',
        score: 50,
        wicket: 1,
      },
    };

    let headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'key=' + FIREBASE_API_KEY,
    });

    let response = await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers,
      body: JSON.stringify(message),
    });
    response = await response.json();
    console.log(response);

    // console.log(data, 'data');
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
