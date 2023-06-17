import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  VirtualizedList,
  Button,
} from 'react-native';
import React from 'react';
import {useRef, useEffect, useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import {launchCamera} from 'react-native-image-picker';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {Permissions} from 'react-native-permissions';

export default function Home() {
  const devices = useCameraDevices();
  const device = camView === 'back' ? devices.back : devices.front;

  const cameraRef = useRef(Camera);
  const [isCameraActive, setCameraActive] = useState(false);
  // const camera = useRef < Camera > null;
  const [image, setImage] = useState('');
  const [camView, setCamView] = useState('back');

  const handleFlipCamera = () => {
    console.log(camView, 'device');
    // setCamView(prevView => (prevView === 'back' ? 'front' : 'back'));
    camView === 'back' ? setCamView('front') : setCamView('back');
  };

  useEffect(() => {
    checkPermission();
    // requestCameraPermission();
  }, [checkPermission, devices]);

  const checkPermission = useCallback(async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    // const newMicrophonePermission = await Camera.requestMicrophonePermission();
    // console.log(newCameraPermission);
    if (newCameraPermission == 'denied') {
      await Linking.openSettings();
    }
  }, [devices]);

  if (device == null) return <ActivityIndicator />;

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46cd2-aed5-3ad53abb28ba',
      Warung: 'Mas Anggun',
      alamat: 'Cicadas',
      stock: 50,
    },
    {
      id: '3ac68afc-c605-48d3-da4f8-fbd91aa97f63',
      Warung: 'Mang Ari',
      alamat: 'Cibungkul',
      stock: 50,
    },
    {
      id: '58694a0f-3da1-471fd-bd96-145571e29d72',
      Warung: 'Bu Hani',
      alamat: 'Cicadas',
      stock: 50,
    },
    {
      id: '58694a0f-3da1-471f-bd96-1s571e29d72',
      Warung: 'Bu Sri',
      alamat: 'Cipesing',
      stock: 50,
    },
    {
      id: '58694a0f-3da1-471f-bd96-1s571e29dd',
      Warung: 'Bu Bieng',
      alamat: 'Beh Bukinem',
      stock: 50,
    },
    {
      id: '58694a0f-3da1-47sss1f-bd96-1s571e29dd',
      Warung: 'Bu Bieng',
      alamat: 'Beh Bukinem',
      stock: 50,
    },
  ];

  const renderItem = ({item}) => (
    <View
      style={{
        padding: 5,
        backgroundColor: '#79EA99',
        height: 70,
        width: 150,
        // elevation: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10,
      }}>
      <Text style={{color: 'black', fontWeight: 700}}>{item.Warung}</Text>
      <Text style={{color: 'black'}}>{item.alamat}</Text>

      <Text
        style={{
          color: 'black',
          backgroundColor: '#FFEEBB',
          padding: 3,
          borderRadius: 5,
          fontWeight: 700,
        }}>
        Stock:{item.stock}
      </Text>
    </View>
  );

  const takePhoto = async () => {
    try {
      if (cameraRef.current == null) {
        throw new Error('Camera is Null');
      }

      const photo = await cameraRef.current.takePhoto({
        qualityPriorition: 'quality',
        // flash: `${torch}`,
      });
      console.log(photo, 'photooo');
      console.log(photo.path.split('/cache/')[1], 'photo');
      setImage(photo.path);
      console.log(image, 'image');
      setCameraActive(false);
    } catch (error) {
      console.log(error);
    }
  };

  //! FUNGSI FLIP MASIH BELUM BERFUNGSI
  return (
    <ScrollView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#24CE9E" />

      <LinearGradient
        colors={['#24CE9E', '#24CE9E', '#24CE9E']}
        style={styles.gradient}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 7,
          }}>
          <Text
            style={{
              fontWeight: 800,
              color: 'white',
              fontSize: 20,
            }}>
            Hi Bu Warung 👋
          </Text>
          <Image
            // style={{ marginTop: 10 }}
            source={require('../assets/bel.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 7,
            // justifyContent: "space-between",
          }}>
          <Image
            // style={{ marginTop: 10 }}
            source={require('../assets/location.png')}
          />
          <Text
            style={{
              fontWeight: 500,
              fontSize: 16,
              color: 'white',
              // fontSize: 20,
            }}>
            Cicadas
          </Text>
        </View>
      </LinearGradient>

      <View
        style={{
          padding: 10,
        }}>
        <View
          style={{
            // padding: 10,
            height: 200,
            width: '100%',
            // borderRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            overflow: 'hidden',
            elevation: 10,
          }}>
          <ImageBackground
            source={require('../assets/salehpisang.jpg')}
            resizeMode="cover"
            style={{
              width: 'auto',
              height: '100%',
              // borderRadius: 10,
              elevation: 5,
            }}></ImageBackground>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: 'white',
            elevation: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 700,
              fontSize: 16,
              elevation: 3,
            }}>
            Stock Saleh Burido Pesahangan : 100 Bks
          </Text>
          <Text
            style={{
              color: 'black',
              fontWeight: 700,
              fontSize: 16,
              elevation: 3,
            }}>
            Stock Saleh Warung Anda :{' '}
            <Text
              style={{
                fontStyle: 'italic',
                fontWeight: 700,
              }}>
              70 Bks
            </Text>
          </Text>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flex: 1,
            marginVertical: 20,
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            elevation: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)', // Warna bayangan
            shadowOffset: {width: 0, height: 2}, // Ukuran bayangan (lebar, tinggi)
            shadowOpacity: 0.8, // Opasitas bayangan (0-1)
            shadowRadius: 4, // Jari-jari bayangan
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 700,
              marginVertical: 10,
              fontSize: 18,
            }}>
            Pesan Saleh
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Bungkus"
            // value={email}
            // onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'black', fontWeight: 700, fontSize: 14}}>
              Kirim
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          // padding: 10,
          marginTop: -20,
          marginBottom: 10,
          paddingHorizontal: 10,
          elevation: 10,
        }}>
        <View
          style={{
            flex: 1,
            // marginVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            elevation: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)', // Warna bayangan
            shadowOffset: {width: 10, height: 10}, // Ukuran bayangan (lebar, tinggi)
            shadowOpacity: 0.8, // Opasitas bayangan (0-1)
            shadowRadius: 4, // Jari-jari bayangan
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 700,
              marginVertical: 10,
              fontSize: 18,
            }}>
            Warung Langganan
          </Text>

          <FlatList
            horizontal
            data={DATA}
            // numColumns={2} // Jumlah kolom dalam grid
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      {image && (
        <Image
          source={{uri: 'file://' + image}}
          style={{width: 200, height: 200}}
        />
      )}
      {!isCameraActive && (
        <TouchableOpacity
          style={{
            backgroundColor: 'yellow',
            padding: 10,
            alignItems: 'center',
          }}
          onPress={() => setCameraActive(true)}>
          <Text>Activate Camera</Text>
        </TouchableOpacity>
      )}
      {isCameraActive && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
          ref={cameraRef}
        />
      )}
      {isCameraActive && (
        <>
          <View
            style={{
              flexDirection: 'row',
              // width: '100%',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              marginBottom: 50,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'yellow',
                padding: 10,
                alignItems: 'center',
                borderRadius: 10,
              }}
              onPress={() => {
                setCameraActive(false);
              }}>
              <Text>Kembali</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'yellow',
                padding: 10,
                alignItems: 'center',
                borderRadius: 10,
              }}
              onPress={takePhoto}>
              <Text>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'yellow',
                padding: 10,
                alignItems: 'center',
                borderRadius: 10,
              }}
              onPress={() => {
                console.log(camView, 'Test');
                camView === 'back' ? setCamView('front') : setCamView('back');
              }}>
              <Text>Flip</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 10,
    // backgroundColor: "#F5FCFF",
  },
  warung: {
    fontSize: 18,
  },
  gradient: {
    // ...StyleSheet.absoluteFillObject,
    padding: 16,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 'auto',
  },
  input: {
    height: 40,
    width: '100%',
    // borderColor: '#DDE6ED',
    backgroundColor: '#DDE6ED',
    // borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    height: 40,
    width: '100%',
    // borderColor: "blue",
    // elevation: 3,
    backgroundColor: '#79EA99',
    // borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
