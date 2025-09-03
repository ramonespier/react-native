import { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';

export default function App() {

  const [hexInput, setHexInput] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [colorName, setColorName] = useState<string>('');

  const fetchColor = async () => {
    try {

      const hex: string = hexInput.replace('#', '');
      const response: Response = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`);
      const data: any = await response.json();

      if (hex.length > 6) {
        setColorName('Formato hexadecimal incorreto')
        setBackgroundColor('')
        return;
      }

      setColorName(data.name.value);
      setBackgroundColor(data.hex.value);

    } catch (error) {
      setColorName('Cor inválida');
      setBackgroundColor('#ffffff');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <TextInput
        placeholder="Digite o HEX da cor (ex: #3498db)"
        value={hexInput}
        onChangeText={setHexInput}
        style={styles.input}
      />

      <TouchableOpacity onPress={fetchColor} style={styles.botao}>
        <Text>Buscar Cor</Text>
      </TouchableOpacity>

      <Text style={styles.colorName}>{colorName}</Text>
    </View>
  );
}
