import Slider from '@react-native-community/slider';
import MaskedView from '@react-native-masked-view/masked-view';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
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

      <ImageBackground style={{}} source={require('./assets/sim.png')}>
        <View style={{ backgroundColor: '#000000' }}>
        </View>
      </ImageBackground>
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
