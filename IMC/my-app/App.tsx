import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [peso, setPeso] = useState<string>('')
  const [altura, setAltura] = useState<string>('')
  const [data, setData] = useState<string>('')

  function calculo(peso: string, altura: string): void {

    const pesoNum = parseFloat(peso)
    const alturaNum = parseFloat(altura)

    if (isNaN(pesoNum) || isNaN(alturaNum)) {
      setData('Os valores devem ser númericos')
      return;
    }
  
    const IMC = pesoNum / (alturaNum ** 2)

    if (IMC < 18.5) {
      setData(`Usuário abaixo do peso, com IMC de ${IMC.toFixed(2)}`)
      return;

    } else if (IMC < 24.9) {
      setData(`Usuário com peso normal, com IMC de ${IMC.toFixed(2)}`)
      return;

    } else if (IMC < 29.9) {
      setData(`Usuário com sobrepeso, com IMC de ${IMC.toFixed(2)}`)
      return;

    } else if (IMC < 34.9) {
      setData(`Usuário com Obesidade Grau I, com IMC de ${IMC.toFixed(2)}`)
      return;

    } else if (IMC < 39.9) {
      setData(`Usuário com Obesidade Grau II, com IMC de ${IMC.toFixed(2)}`)
      return;

    } else if (IMC >= 40) {
      setData(`Usuário com Obesidade Grau III, com IMC de ${IMC.toFixed(2)}`)
      return;
    }

  }

  function limpar() {
    setData('')
    setPeso('')
    setAltura('')
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Cálculo do IMC</Text>

      <View style={styles.menu}>
        <TextInput
          placeholder='Seu peso (kg)'
          value={peso}
          onChangeText={(peso) => { setPeso(peso) }}
          style={styles.input}
        />
        <TextInput
          placeholder='Sua altura (m)'
          value={altura}
          onChangeText={(altura) => { setAltura(altura) }}
          style={styles.input}
        />
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.limpar}
          onPress={limpar}
        >
          <Text style={{ color: '#fff', fontWeight: '600' }}>
            Limpar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.enviar}
          onPress={() => calculo(peso, altura)}
        >
          <Text style={{ fontWeight: '600' }}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <Text style={styles.mensagem}>{data}</Text>
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

  mensagem: {
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'italic'
  },

  title: {
    fontSize: 23,
    fontWeight: '600',
    padding: 10,
    alignItems: 'flex-start'
  },

  menu: {
    backgroundColor: '#bcbcbc',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    width: 350,
    height: 200,
    borderWidth: 1,
  },

  botoes: {
    backgroundColor: '#ababab',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 90,
    width: 350,
    height: 50,
    borderWidth: 1,
    borderColor: '#353535'
  },

  limpar: {
    backgroundColor: 'crimson',
    padding: 10,
  },

  enviar: {
    backgroundColor: 'cyan',
    padding: 10,
  },

  input: {
    backgroundColor: 'aliceblue',
    padding: 5,
    width: '80%'
  }
});
