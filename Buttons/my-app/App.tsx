
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles/containers';

declare global {
  interface Console {
    sayPressing(index: string): void;
    sayHexColor(cor: string): void;
  }
}

Object.assign(console, {
  sayPressing(index: string) {
    console.log('Pressionando o', index, 'botão')
  },
  sayHexColor(cor: string) {
    console.log("Cor de fundo: ", cor.slice(1))
  }
})

function showColor(botao: string) {
  console.sayHexColor(botao)
}

function pressButton(botao: string) {
  console.sayPressing(botao)
}

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.doubleRow}>
        <View style={styles.inside}>
          <TouchableOpacity style={styles.botao1} onPress={() => { pressButton('primeiro') }}>
            <ImageBackground
              source={require('./assets/Boa-Noite.jpg')}
              style={styles.botao1}
            ></ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.inside}>
          <TouchableOpacity style={styles.botao2} onPress={() => { pressButton('segundo') }}>
            <ImageBackground
              source={require('./assets/Boa-Noite.jpg')}
              style={styles.botao1}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.doubleRow}>
        <View style={styles.inside}>
          <TouchableOpacity style={styles.botao3} onPress={() => { showColor(styles.botao3.backgroundColor) }}>
            <ImageBackground
              source={require('./assets/Boa-Noite.jpg')}
              style={styles.botao1}
            ></ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.inside}>
          <TouchableOpacity style={styles.botao1} onPress={() => { showColor(styles.botao1.backgroundColor) }}>
            <ImageBackground
              source={require('./assets/Boa-Noite.jpg')}
              style={styles.botao1}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.doubleRow}>
        <View style={styles.inside}>
          <TouchableOpacity style={styles.botao2} onPress={() => { showColor(styles.botao2.backgroundColor) }}>
            <ImageBackground
              source={require('./assets/Boa-Noite.jpg')}
              style={styles.botao1}
            ></ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.inside}>
          <TouchableOpacity style={styles.botao3} onPress={() => { showColor(styles.botao3.backgroundColor) }}>
            <ImageBackground
              source={require('./assets/Boa-Noite.jpg')}
              style={styles.botao1}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
