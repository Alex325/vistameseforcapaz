import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Manequim from './Manequim';

export default function Tela1({ navigation }) {
  const [heightMultiplier, setHeightMultiplier] = useState(0);
  const height = 200 + 40 * heightMultiplier;

  const continuar = () => {
    // Navegue para a próxima tela e passe os dados como parâmetros
    navigation.navigate('Tela2', { height });
  };

  return (
    <View style={{ flex: 1 }}>
      <Manequim height={height}/>
      <Slider value={heightMultiplier} onValueChange={setHeightMultiplier} step={1} minimumValue={1} maximumValue={5} />
      <Button title='Continuar' onPress={continuar} />
    </View>
  );
}
