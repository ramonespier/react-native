import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.firstBlock}>
        <Text style={styles.title}>M. Shadows</Text>
      </View>

      <View style={styles.secondBlock}>
        <Text style={styles.title}>Synyster Gates</Text>
      </View>

      <View style={styles.thirdBlock}>
        <Text style={styles.title}>Zacky Vengeance</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    flex: 1,
  },
  
  title: {
    padding: 15,
    color: '#fff',
    fontSize: 30,
    fontWeight: 800,
    fontStyle: 'italic',
  },

  firstBlock: {
    flex: 2,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  secondBlock: {
    flex: 1,
    backgroundColor: '#8B0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  thirdBlock: {
    flex: 4,
    backgroundColor: '#4B4B4B',
    alignItems: 'center',
    justifyContent: 'center', 
  },

})