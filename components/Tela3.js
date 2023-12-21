import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import MaskedView from '@react-native-masked-view/masked-view';
import { Button, TouchableHighlight } from 'react-native';
import Manequim from './Manequim';



const clothingOptions = [
    { id: 1, source: require('../assets/img1.png') },
    { id: 2, source: require('../assets/img2.png') },
    { id: 3, source: require('../assets/img3.png') },
    { id: 4, source: require('../assets/img4.png') },
];

const App = ({ route }) => {
    const { height, color, selectedOption } = route.params;

    const onColorChange = (newColor) => {
        setColor(newColor);
    };

    useEffect(() => {
    }, [selectedOption]);

    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1, marginBottom: 100}}>
                <Manequim height={height} />
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                <MaskedView
                    style={{
                        flex: 1,
                        width: '100%',
                        height: '100%'
                    }}
                    key={selectedOption.id}
                    maskElement={
                        <Image
                            source={selectedOption.source}
                            style={{ height: height - 50, aspectRatio: 0.65263157894737, alignSelf: 'center', marginTop: 215 }}
                            resizeMode='cover'
                        />
                    }
                >
                    <View style={{ flex: 1, backgroundColor: `${color}`, justifyContent: 'center', alignItems: 'center' }}></View>
                </MaskedView>
            </View>

            <Button style={{ flex: 1 }} title='Salvar' />
        </View>
    );
};

const styles = StyleSheet.create({
    imagemView: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});

export default App;
