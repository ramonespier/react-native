import { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [hexInput, setHexInput] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('#ffffff');
  const [colorName, setColorName] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [colorTranslate, setColorTranslate] = useState<string>('');

  const fetchColor = async () => {
    try {
      const hex: string = hexInput.replace('#', '');

      if (hex.length > 6 || hex.length < 3) {
        setColorName('Formato hexadecimal incorreto');
        setBackgroundColor('#ffffff');
        return;
      }

      const response: Response = await fetch(`https://www.thecolorapi.com/id?hex=${hex}`);
      const data: any = await response.json();

      setColorName(data.name.value);
      setBackgroundColor(data.hex.value);

      await translate(data.name.value, language || 'en');

    } catch (error) {
      setColorName('Cor inválida');
      setBackgroundColor('#ffffff');
    }
  };

  const translate = async (text: string, languageTarget = 'en') => {
    try {

      const key = "YOUR_AZURE_TRANSLATOR_KEY"; // Substitua pela sua chave de API do Azure Translator
      const endpoint = "https://api.cognitive.microsofttranslator.com";
      const region = "eastus";
      const url = `${endpoint}/translate?api-version=3.0&to=${languageTarget}`;

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify([{ Text: text }]),
        headers: {
          "Ocp-Apim-Subscription-Key": key,
          "Ocp-Apim-Subscription-Region": region,
          "Content-type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }

      const data = await response.json();
      const translatedText = data[0]?.translations[0]?.text;

      if (translatedText) {
        setColorTranslate(translatedText);
        console.log('Traduzido:', translatedText);
      } else {
        throw new Error("Texto traduzido não encontrado");
      }

    } catch (error) {
      console.error('Erro ao traduzir:', error);
      setColorTranslate("Erro ao traduzir");
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

      <TextInput
        placeholder="Código do idioma (ex: en, pt, es)"
        value={language}
        onChangeText={setLanguage}
        style={styles.input}
      />

      <TouchableOpacity onPress={fetchColor} style={styles.botao}>
        <Text>Buscar Cor</Text>
      </TouchableOpacity>

      <View style={styles.responses}>
        <Text style={styles.colorName}>{colorName}</Text>
        <Text style={styles.colorName}>{colorTranslate}</Text>
      </View>
    </View>
  );
}
