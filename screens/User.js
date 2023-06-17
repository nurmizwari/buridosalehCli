import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
export default function User() {
  // person-circle-outline
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="person-circle" size={150} color="#DDE6ED" />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Nama Warung"
          // onChangeText={onChangeText}
          // value={text}
        />
        <TextInput
          style={styles.input}
          placeholder="Nama Pemilik"
          // onChangeText={onChangeText}
          // value={text}
        />
        <TextInput
          style={styles.input}
          placeholder="Alamat"
          // onChangeText={onChangeText}
          // value={text}
        />
      </View>
      <View
        style={{
          // height: 200,
          padding: 10,
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={{
            marginBottom: 10,
            height: 50,
            borderRadius: 10,
            backgroundColor: '#79EA99',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontWeight: 700}}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#DDE6ED',
  },
});
// rnfs snippet
