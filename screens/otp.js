import React from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';

import {OTP} from 'react-native-otp-form';
const App = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboard}>
      <View
        style={{flex: 1, backgroundColor: 'black', justifyContent: 'center'}}>
        <View style={{width: '85%', height: '5%',marginHorizontal:30}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            We have sent OTP to this number
          </Text>
        </View>
        <View style={{width: '85%', height: '5%', flexDirection: 'row',marginHorizontal:30}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            +91 9947210937
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
             marginHorizontal:10,
              color:"yellow"
            }}>
            Edit
          </Text>
        </View>

        <OTP
          codeCount={6}
          containerStyle={{
            width: 10,
            justifyContent: 'center',
            alignSelf: 'center',
            
          }}
          otpStyles={{backgroundColor: '#2b2a27',borderRadius:5}}
        />

        <View
          style={{
            backgroundColor: '#2b2a27',
            height: '7%',
            width: '70%',
            borderRadius: 8,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:30
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            Verify OTP
          </Text>
        </View>

        <View
          style={{
            width: '85%',
            height: '5%',
            flexDirection: 'row',
            marginHorizontal: 30,
            top:'50%',
            justifyContent:'center',
            alignSelf:'center'
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Didn't get OTP?
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
              marginHorizontal:10,
              color:'yellow'
            }}>
            Click here
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
export default App;

const styles = StyleSheet.create({
  container2: {},
  keyboard: {
    flex: 1,
  },
});
