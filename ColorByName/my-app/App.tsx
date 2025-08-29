import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function App() {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const colors: string[] = [
    "#FF0000", "#0000FF", "#008000", "#FFFF00",
    "#800080", "#FFA500", "#FFC0CB", "#A52A2A",
    "#000000", "#808080", "#00FFFF", "#00FF00",
    "#664040", "#8e7cc3", "#b4a7d6", "#d9d2e9",
    "#16537e", "#2986cc", "#bf9000", "#e69138",
    "#e69138", "#ffe599", "#274e13", "#4c1130"
  ];

  const fetchColorName = async (hex: string) => {
    try {
      const response = await fetch(`https://www.thecolorapi.com/id?hex=${hex.replace("#", "")}`);
      const data = await response.json();
      setSelectedColor(`${data.name.value}`);
    } catch (err) {
      console.error("Erro ao buscar cor:", err);
      setSelectedColor(hex);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.grid}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, { backgroundColor: color }]}
            onPress={() => fetchColorName(color)}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {selectedColor ? `Cor selecionada: ${selectedColor}` : "Nenhuma cor selecionada"}
        </Text>
      </View>
      
    </View>
  );
}


