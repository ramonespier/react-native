import { Text, View, Image } from 'react-native';
import { styles } from './styles/containers';

const image = {uri: 'https://static.wixstatic.com/media/3655b5_b1bb7007c8744baf9b1ea28420b586b6~mv2.jpg/v1/fill/w_568,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3655b5_b1bb7007c8744baf9b1ea28420b586b6~mv2.jpg'}

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.subcontainer}>
        <View style={styles.firstBlock}>
          <Image
            source={image}
            width={300}
            height={300}
            resizeMode='cover'
          />
        </View>

        <View style={styles.secondBlock}>
          <Image src='' />
        </View>
      </View>

      <View style={styles.subcontainer}>
        <View style={styles.thirdBlock}>
          <Image src='' />
        </View>

        <View style={styles.firstBlock}>
          <Image src='' />
        </View>
      </View>

      <View style={styles.subcontainer}>
        <View style={styles.secondBlock}>
          <Image src='' />
        </View>

        <View style={styles.thirdBlock}>
        </View>
        <Image src='' />
      </View>

    </View>
  );
}