import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Amogus</Text>
      <Slider step={1} minimumValue={0} maximumValue={4} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
