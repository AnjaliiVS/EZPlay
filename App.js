import React, {useState,useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Alert,Pressable
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const Phonenumber = () => {
  const [phoneNumber, setphoneNumber] = useState('');
  const phoneInput = useRef(null);
  const buttonPress = () => {
    Alert.alert(phoneNumber);
  };

  return <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.keyboard}>
  <View style={{flex: 1,backgroundColor:'white'}}>
  <View style={{height:'30%',width:'100%',backgroundColor:'#8A2BE2',borderBottomRightRadius:100,justifyContent:'center'}}>
  <Text style={{fontSize: 20, color: '#ffffff', fontWeight: 'bold',marginHorizontal:20}}>
  What Is Your Phone {"\n"} Number?
      </Text>
    </View>
  

    <View style={{width: '85%', height: '7%', marginHorizontal: 48,justifyContent:'center',top:'4%'}}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
             
            
            }}>
        Please enter your phone number to {"\n"}verify your account
          </Text>
        </View>
        
         
       

        <View style={styles.phcontainer}>

                    <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInputs}
        onChangeFormattedText={text => {
          setphoneNumber(text);
        }}
      />
   

      </View>

        <View
          style={{
            backgroundColor: '#FFD700',
            height: '7%',
            width: '70%',
            borderRadius: 8,
            alignSelf: 'center',justifyContent:'center',
            alignItems:'center',
            top:'30%'
          
          }}>
          <Text
           
            
            style={{
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
          
            }}>
           Send Verification
          </Text>
        </View>

        <View style={{justifyContent:'center',alignSelf: 'center',top:'32%'}}>
        

        <Text
          
          style={{
            fontSize: 14,
            textAlign: 'auto',
            color: 'grey',

            fontWeight: 'bold',
          }}>
        Skip
        </Text>
      </View>





</View></KeyboardAvoidingView>


}




export default Phonenumber

const styles = StyleSheet.create({
    container: {
      height: '80%',
      width: '100%',
      top: '8%',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    container2: {
      
      backgroundColor:'#8A2BE2',
  
      justifyContent: 'center',
     
      borderBottomLeftRadius:30
  
    },
    keyboard: {
      flex: 1,
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    textInput: {
      width: '90%',
      height: 40,
      borderRadius: 7,
      borderWidth: 0.9,
      borderColor: 'black',
    },
    textInput1: {
      width: '100%',
      height: 40,
      borderRadius: 7,
      borderWidth: 2,
      borderColor: 'rgba(51, 52, 88, 0.06)',
      marginBottom: 20,
    },
    phcontainer:{
      
      top:'10%',
      alignItems: 'center',
    },
    phoneContainer: {
      width: '75%',
      height: 50,
    },
   
    textInputs: {
      paddingVertical: 0,
    },
  })














    
  