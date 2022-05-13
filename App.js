import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState(false);
  const [inputName, setInputName] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Hello World !</Text>
      </View>
      <View style={styles.mt10}>
        <Text>
          My Name is <Text style={styles.myName}>{name ? 'Farhan' : 'Nahid'}</Text>
        </Text>
      </View>

      <View style={styles.mainButton}>
        <Button title='Update Name' onPress={() => setName((prevState) => !prevState)} />
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder='John Cena'
          placeholderTextColor='#A0BCC2'
          onChangeText={(value) => setInputName(value)}
        />
        <Text style={styles.mt10}>
          Input Name:{' '}
          <Text style={styles.myName}>{inputName ? inputName : 'John Cena'}</Text>
        </Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  heading: {
    fontWeight: 'bold',
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  mt10: {
    marginTop: 20,
  },
  myName: {
    color: 'teal',
    fontWeight: 'bold',
    fontSize: 16,
  },
  mainButton: {
    marginTop: 20,
  },
  input: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'teal',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    width: 200,
    borderRadius: 10,
  },
});
