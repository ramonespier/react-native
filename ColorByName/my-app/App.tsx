import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  // const [cor, setCor] = useState<string>('')

  const fetchColor = async (cor: string) => {
    try {
      const response: Response = await fetch(`https://www.thecolorapi.com/id?name=${cor}`)
      const data: string = await response.json()
      console.log(data);

    } catch (err) {
      console.error('Erro ao buscar cor: ', err)
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={{ backgroundColor: 'black', height: 100, width: 100 }}
        ></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
