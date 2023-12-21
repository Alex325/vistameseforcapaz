import Slider from '@react-native-community/slider';
import MaskedView from '@react-native-masked-view/masked-view';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
<<<<<<< HEAD
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [heightMultiplier, setHeightMultiplier] = useState(0);
  const height = 200 + 40 * heightMultiplier;
  return (
    <View style={{flex: 1}}>
      <View style={styles.imagemView}>
        <Image style={{ height: height, aspectRatio: 1 }} source={require('./assets/stick.png')} />
      </View>
      <Slider value={heightMultiplier} onValueChange={setHeightMultiplier} step={1} minimumValue={1} maximumValue={5} />
      <Button title='Continuar'/>
=======
import { Image, StyleSheet, Text, View } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

export default function App() {
  const [color, setColor] = useState('');

  const onColorChange = color => {
    setColor(color);
  };
  return (
    <View>
      <ColorPicker
        color={color}
        onColorChange={onColorChange}
        thumbSize={30}
        sliderSize={30}
        noSnap={true}
      />
      <View style={{ backgroundColor: '#000000', }}>
        <Image style={{}} source={require('./assets/sim.png')} />
      </View>
>>>>>>> 2b16473396e6226d6dfce3174ff945021815b869
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
