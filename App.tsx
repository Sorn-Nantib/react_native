/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import CompanyData from './Components/CompanyData';

const App = () => {
  let name = 'Nantib';
  let lastName = 'Koe';
  const age = 30;
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 29}}>Hello</Text>
        <Text>{name} </Text>
        <Text style={styles.container}>{lastName}</Text>
        <Text>{age < 30 ? 'Hello' : 'Bye'}</Text>
        {age < 30 ? <Text>Bopha</Text> : <Text>SOkey</Text>}
        <UserData />
        <CompanyData />
        <CompanyData />
        <CompanyData />
      </View>
      <View>
        <Button title="save me" />
      </View>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    color: 'red',
  },
});

const UserData = () => {
  return (
    <View>
      <Text>Name : Nantib</Text>
      <Text>Age : 23</Text>
      <Text>Email :sorn@gmail.com</Text>
    </View>
  );
};
