import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles/containers';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.doubleRow}>
        <View style={styles.inside}>
          <TouchableOpacity style={styles.blackButton}></TouchableOpacity>
        </View>

        <View style={styles.inside}>
          <TouchableOpacity style={styles.greyButton}></TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.doubleRow}>
        <View style={styles.inside}>
          <TouchableOpacity style={styles.wineButton}></TouchableOpacity>
        </View>

        <View style={styles.inside}>
          <TouchableOpacity style={styles.blackButton}></TouchableOpacity>
        </View>
      </View>

      <View style={styles.doubleRow}>
        <View style={styles.inside}>
          <TouchableOpacity style={styles.greyButton}></TouchableOpacity>
        </View>

        <View style={styles.inside}>
          <TouchableOpacity style={styles.wineButton}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
