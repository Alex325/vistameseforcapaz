import { Image } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Manequim({ height }) {
    return (
        <View style={styles.imagemView}>
            <Image style={{ height: height, aspectRatio: 1 }} source={require('../assets/stick.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    imagemView: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  });
  