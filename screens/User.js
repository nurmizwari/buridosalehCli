import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// import Stepper from 'react-native-stepper-ui';
// import Stepper from 'react-stepper-horizontal';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

export default function User() {
  // person-circle-outline
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
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
      <View style={{flex: 1}}>
        <ProgressSteps
          // activeStep={currentStep}
          nextBtnDisabled={true}
          previousBtnDisabled={true}
          progressBarColor="blue"
          removeBtnRow={true}
          completedProgressBarColor="green">
          <ProgressStep
            label="First Step"
            nextBtnText={'Cuy'}
            nextBtnStyle={{
              textAlign: 'center',
              padding: 8,
              backgroundColor: '#F8CC23',
              display: 'none',
            }}>
            <View style={{alignItems: 'center'}}>
              <Text>This is the content within step 1!</Text>
              {/* <TouchableOpacity onPress={handleNextStep}>
                <Text>Next</Text>
              </TouchableOpacity> */}
            </View>
          </ProgressStep>
          <ProgressStep
            label="Second Step"
            nextBtnStyle={{
              textAlign: 'center',
              padding: 8,
              backgroundColor: '#F8CC23',
              display: 'none',
            }}>
            <View style={{alignItems: 'center'}}>
              <Text>This is the content within step 2!</Text>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Third Step"
            nextBtnStyle={{
              textAlign: 'center',
              padding: 8,
              backgroundColor: '#F8CC23',
              display: 'none',
            }}>
            <View style={{alignItems: 'center'}}>
              <Text>This is the content within step 3!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
      <View></View>
      {/* <View
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
      </View> */}
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
