import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function Tela1() {
  const [heightMultiplier, setHeightMultiplier] = useState(0);
  const height = 200 + 40 * heightMultiplier;
  return (
    <View style={{flex: 1}}>
      <View style={styles.imagemView}>
        <Image style={{ height: height, aspectRatio: 1 }} source={require('./assets/stick.png')} />
      </View>
      <Slider value={heightMultiplier} onValueChange={setHeightMultiplier} step={1} minimumValue={1} maximumValue={5} />
      <Button title='Continuar'/>
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
