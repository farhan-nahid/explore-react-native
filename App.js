import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Hello World !</Text>
      </View>
      <View style={styles.body}>
        <Text>
          My Name is <Text style={styles.myName}>{name ? 'Farhan' : 'Nahid'}</Text>{' '}
        </Text>
      </View>

      <View style={styles.mainButton}>
        <Button title='Update Name' onPress={() => setName((prevState) => !prevState)} />
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
  body: {
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
});
