import React, { useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';

type ButtonStyle = {
  backgroundColor: string;
  width: number;
  height: number;
  borderRadius: number;
};

export default function App() {
  const [data, setData] = useState<string>("");

  function selecionarBotao(style: ButtonStyle) {
    let [, hex] = style.backgroundColor.split("#");

    const informacoesBotao = `
      backgroundColor: ${hex} 
      width: ${style.width} 
      height: ${style.height} 
      borderRadius: ${style.borderRadius}
    `;

    setData(informacoesBotao);
  }

  function limparData() {
    setData("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <View style={styles.rowDirection}>
          <View style={styles.buttonSpace}>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => selecionarBotao(styles.button1 as ButtonStyle)}
            />
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => selecionarBotao(styles.button2 as ButtonStyle)}
            />
          </View>
        </View>
      </View>
      
      <View style={styles.linha}>
        <View style={styles.rowDirection}>
          <View style={styles.buttonSpace}>
            <TouchableOpacity
              style={styles.button3}
              onPress={() => selecionarBotao(styles.button3 as ButtonStyle)}
            />
          </View>
          <View style={styles.buttonSpace}>
            <TouchableOpacity
              style={styles.button4}
              onPress={() => selecionarBotao(styles.button4 as ButtonStyle)}
            />
          </View>
        </View>
      </View>

      <View style={styles.linha}>
        <View style={styles.quadroFinal}>
          <Text style={styles.texto}>{data}</Text>
          <TouchableOpacity style={styles.limparSelecao} onPress={limparData}>
            <Text>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
