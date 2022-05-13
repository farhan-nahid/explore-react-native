import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Hello World !</Text>
      </View>
      <View style={styles.body}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel dignissimos ipsum quidem id ducimus quam
          sapiente ex eos facilis! Error, quas illum sunt voluptatibus itaque possimus voluptates ipsum. Nobis.
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
    padding: 20,
    borderRadius: 10,
    fontSize: 16,
  },

  body: {
    marginTop: 20,
  },
});
