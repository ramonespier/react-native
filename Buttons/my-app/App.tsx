
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles/containers';

declare global {
  interface Console {
    sayPressingFirst(): void;
    sayPressingSecond(): void;
    sayPressingThird(): void;
    sayPressingFourth(): void;
    sayPressingFifth(): void;
    sayPressingSixth(): void;
    sayHexColor(cor: string): void;
  }
}

Object.assign(console, {
  sayPressingFirst() {
    console.log("Pressionando primeiro botão...")
  },
  sayPressingSecond() {
    console.log("Pressionando segundo botão...")
  },
  sayPressingThird() {
    console.log("Pressionando terceiro botão...")
  },
  sayPressingFourth() {
    console.log("Pressionando quarto botão...")
  },
  sayPressingFifth() {
    console.log("Pressionando quinto botão...")
  },
  sayPressingSixth() {
    console.log("Pressionando sexto botão...")
  },

  sayHexColor(cor: string) {
    console.log("Cor de fundo: ", cor.slice(1))
  }
})

function showColor(botao: string) {
  console.sayHexColor(botao)
}

{// funcoes de SayPress()
  function firstButton() {
    console.sayPressingFirst()
  }
  function secondButton() {
    console.sayPressingSecond()
  }
  function thirdButton() {
    console.sayPressingThird()
  }
  function fourthButton() {
    console.sayPressingFourth()
  }
  function fifthButton() {
    console.sayPressingFifth()
  }
  function sixthButton() {
    console.sayPressingSixth()
  }
}//


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.doubleRow}>
        <View style={styles.inside}>
          <TouchableOpacity style={styles.botao1} onPress={() => { showColor(styles.botao1.backgroundColor) }}>
            <ImageBackground
              source={require('./assets/Boa-Noite.jpg')}
              style={styles.botao1}
            ></ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={styles.inside}>
          <TouchableOpacity style={styles.botao2} onPress={() => { showColor(styles.botao2.backgroundColor) }}>
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
