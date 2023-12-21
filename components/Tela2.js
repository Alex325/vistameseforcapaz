const clothingOptions = [
    { id: 1, source: require('./assets/img1.png') },
    { id: 2, source: require('./assets/img2.png') },
    { id: 3, source: require('./assets/img3.png') },
    { id: 4, source: require('./assets/img4.png') },
];

export default function Tela2() {
    const [color, setColor] = useState('#c0c0c0');
    const [selectedOption, setSelectedOption] = useState(clothingOptions[0]);

    const onColorChange = color => {
        setColor(color);
    };

    useEffect(() => {
    }, [selectedOption]);

    return (
        <View style={{ flex: 1 }}>
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
                            style={{ flex: 1, aspectRatio: 0.65263157894737 }}
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
            <Button style={{ flex: 1 }} title='Continuar' />
        </View>
    );
}