import { Text, View, Image } from 'react-native';
import { styles } from './styles/containers';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.subcontainer}>
        <View style={styles.firstBlock}>
        </View>

        <View style={styles.secondBlock}>

        </View>
      </View>

      <View style={styles.subcontainer}>
        <View style={styles.thirdBlock}>

        </View>

        <View style={styles.firstBlock}>

        </View>
      </View>

      <View style={styles.subcontainer}>
        <View style={styles.secondBlock}>

        </View>

        <View style={styles.thirdBlock}>
        </View>
      </View>

    </View>
  );
}