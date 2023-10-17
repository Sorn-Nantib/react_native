// /* eslint-disable react-native/no-inline-styles */
// import React, { useState } from 'react';
// import { Button, SafeAreaView, Text, View, StyleSheet, TextInput, ScrollView, Image, Dimensions } from 'react-native';
// import CompanyData from './Components/CompanyData';
// import CostomButton from './Components/CostomButton';

// const App = () => {
//   let names = 'Nantib';
//   let lastName = 'Koe';
//   const [name, setName] = useState("SOk");
//   const [dis, setDis] = useState('');
//   const [pass, setPass] = useState('');
//   const [email, setEmail] = useState('');

//   const age = 30;
//   return (
//     <SafeAreaView>
//       <View style={{
//         flex: 1,
//         height: "100%",
//         width: "100%",
//         justifyContent: "center",
//         resizeMode: "cover",
//         position: "absolute",

//         flexDirection: "column",
//       }}>
//         <Image style={{ resizeMode: "cover", width: Dimensions.get('window').width, height: Dimensions.get('window').height, }} source={require('./assets/images/iconLogin.png')} />
//         <Text style={{ color: "red" }} >Choose languse</Text>

//       </View>

//       {/* <ScrollView>
//         <View>

//           {
//             dis != '' ?
//               <Text style={{ fontSize: 29 }}>{dis}</Text> : ''}
//           {pass != '' ? <Text>{pass} </Text> : ''}
//           {email != '' ? <Text style={{ fontSize: 20 }}>{email}</Text> : ''}
//           <Text>{age < 30 ? 'Hello' : 'Bye'}</Text>
//           {age < 30 ? <Text>Botha</Text> : <Text>SOkey</Text>}
//           <UserData />
//           <CompanyData />
//           <CompanyData />
//           <CompanyData />
//           <Button title='Update' onPress={() => setName("Nan")} />
//           <CompanyData />
//           <CostomButton onPress={fruit} title={"Add me "} />
//           <User name={name} />
//           <TextInput style={{ fontSize: 20 }} placeholder='Enter Name' value={dis} onChangeText={(text) => setDis(text)} />

//           <TextInput style={{ fontSize: 20 }} placeholder='Enter Pass' value={pass} secureTextEntry={true} onChangeText={(text) => setPass(text)} />
//           <TextInput style={{ fontSize: 20 }} placeholder='Enter Email' value={email} onChangeText={(text) => setEmail(text)} />
//         </View>

//         <View>
//           <Button title="save me" onPress={fruit} />
//         </View>
//       </ScrollView> */}
//     </SafeAreaView>
//   );
// };
// export default App;

// const UserData = () => {
//   return (
//     <View>
//       <Text>Name : Nantib</Text>
//       <Text>Age : 23</Text>
//       <Text>Email :sorn@gmail.com</Text>
//     </View>
//   );
// };
// const User = (props) => {
//   console.warn(props.name)
//   return (

//     <View style={{ backgroundColor: 'green' }}>
//       <Text style={{ fontSize: 30 }}>{props.name}</Text>
//     </View>
//   )
// }

// const fruit = val => {
//   data = 20;
//   console.warn(data);
// };

import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import CostomButton from './Components/CostomButton';

export default function App() {
  const video = React.useRef(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // React.useEffect(() => {
  //   if (video) {
  //     video.current.playAsync();
  //   }
  // }, [video]);

  return (
    <>
      <View style={styles.container}>
        <Image
          style={{
            resizeMode: 'cover',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          source={require('./assets/images/iconLogin.png')}
        />
      </View>

      <View style={styles.containerSub}>
        <Text style={styles.forgot_button}>Choose language</Text>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              marginRight: 20,
              alignItems: 'flex-start',
            }}>
            <Image
              style={{ resizeMode: 'cover', width: 50, height: 50 }}
              source={require('./assets/images/khmer.png')}
            />
            <Text
              style={{
                height: 30,
                fontSize: 16,
                fontFamily: 'Roboto',
                fontWeight: '500', // backgroundColor: 'rgba(52, 52, 52, 0.1)',
                textAlign: 'center',
                color: 'white',
              }}>
              ភាសាខ្មែរ
            </Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              alignItems: 'flex-start',
            }}>
            <Image
              style={{ resizeMode: 'cover', width: 50, height: 50 }}
              source={require('./assets/images/english.png')}
            />
            <Text
              style={{
                height: 30,
                fontSize: 16,
                fontFamily: 'Roboto',
                fontWeight: '500', // backgroundColor: 'rgba(52, 52, 52, 0.1)',
                textAlign: 'center',
                color: 'white',
              }}>
              English
            </Text>
          </View>
        </View>
        <Text style={{ color: 'white' }}>
          Change your language preference later in Settings{' '}
        </Text>

        <View
          style={{
            flexDirection: 'row',

            height: 50,
            paddingRight: 50,
            paddingLeft: 50,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'white',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Image
            style={{ resizeMode: 'cover', marginRight: 15 }}
            source={require('./assets/images/nextIcon.png')}
          />
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Get Started</Text>

        </View>

        <Text style={{ fontSize: 16, fontWeight: "normal", color: "white", marginTop: 60 }}>Help Center</Text>
        <Text style={{ fontSize: 14, fontWeight: "normal", color: "white", marginTop: 10 }}>version 1.0</Text>




        {/* <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View> */}

        {/* <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View> */}

        {/* <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity style={styles.loginBtn}>
          <Text>LOGIN</Text>
        </TouchableOpacity> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    flexDirection: 'column',
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSub: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',

    marginBottom: 5,
    marginTop: 250,
    // backgroundColor: 'rgba(52, 52, 52, 0.1)',
    textAlign: 'center',
    color: 'white',
  },

  loginBtn: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 0

  },
});
