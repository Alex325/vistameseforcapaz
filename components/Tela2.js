import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import MaskedView from '@react-native-masked-view/masked-view';
import { Button, TouchableHighlight } from 'react-native';
import { Text } from 'react-native';

const clothingOptions = [
    { id: 1, source: require('../assets/img1.png') },
    { id: 2, source: require('../assets/img2.png') },
    { id: 3, source: require('../assets/img3.png') },
    { id: 4, source: require('../assets/img4.png') },
];

export default function Tela2({ route, navigation }) {
    const [color, setColor] = useState('#c0c0c0');
    const [nomeCor, setNomeCor] = useState('');
    const [selectedOption, setSelectedOption] = useState(clothingOptions[0]);

    const { height } = route.params



    const onColorChange = async color => {
        setColor(color);
        const cor = await (await fetch(`https://www.thecolorapi.com/id?hex=${color.replace('#', '').toUpperCase()}`)).json();

        setNomeCor(cor.name.value);
    };

    const continuar = () => {
        navigation.navigate('Tela3', { height, color, selectedOption });
      };

    return (
        <View style={{ flex: 1 }}>
            <Text>Nome da cor: {nomeCor}</Text>
            <View style={{ flex: 1 }}>
                <ColorPicker
                    color={color}
                    onColorChange={onColorChange}
                    thumbSize={30}
                    sliderSize={20}
                    noSnap={true}
                />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <MaskedView
                    style={{ flex: 1, width: '100%' }}
                    key={selectedOption.id}
                    maskElement={
                        <Image
                            source={selectedOption.source}
                            style={{ flex: 1, aspectRatio: 0.65263157894737, alignSelf: 'center' }}
                            resizeMode='cover'
                        />
                    }
                >
                    <View style={{ flex: 1, backgroundColor: `${color}` }} />
                </MaskedView>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 16 }}>

                {clothingOptions.map(option => (
                    <TouchableHighlight
                        key={option.id}
                        style={{ width: 60, aspectRatio: 1 }}
                        onPress={() => setSelectedOption(option)}
                    >
                        <Image
                            style={{ flex: 1, aspectRatio: 1 }}
                            source={option.source}
                        />
                    </TouchableHighlight>
                ))}
            </View>
            <Button style={{ flex: 1 }} title='Continuar' onPress={continuar} />
        </View>
    );
}