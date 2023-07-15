import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import React, {useEffect} from 'react';
import {BackHandler, Alert} from 'react-native';
import MyTabs from './navigation';
import messaging from '@react-native-firebase/messaging';
import {PermissionsAndroid} from 'react-native';

export default function App() {
  //! backhandler
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Tunggu!', 'Yakin keluar ?', [
        {
          text: 'Tidak',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Ya', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  async function getTokenDevice() {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log(token);
  }
  function getUserPermissions() {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }

  useEffect(() => {
    getUserPermissions();
    requestUserPermission();
    getTokenDevice();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        JSON.stringify(remoteMessage.notification?.title),
        remoteMessage.data?.title,
        // remoteMessage.notification?.body,
      );
    });

    return unsubscribe;
  }, []);

  async function sendMessage() {
    const FIREBASE_API_KEY =
      'key=AAAAt0PqXzk:APA91bHNw6SPNuaocnfFdqKYuusdx8XrCxXlVxHjHmC1_JpjplzneucO5c8aKOHz4pTZ4sAmWQBC-WLdmMKNcwps8WY9YnDTiSeDydZ8wl_VrKxky79nteh3vMm6YPIjUyFlERj-oOBf';
    const message = {
      registration_ids: [
        'cXLpt9oeQpSREGrNwqSFgw:APA91bGCtbxbWolcUSTkuw8jik3BBKpYjzndAzcPTGt-NixTWiYpiNeqXoFvGvOmtWUszfw9RAvI9289hrm5qO-rH_BnnjaOiANINd7GmAkx2Mh69VKHR7Tv9Mjb7RihNhnvUekkJoW7',
        'xxxxx....',
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
  }

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
