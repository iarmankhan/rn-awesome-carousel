import {StatusBar} from 'expo-status-bar';
import React, {useRef} from 'react';
import {Animated, Dimensions, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {data} from "./data";

const {width, height} = Dimensions.get('screen');
const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default function App() {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <View style={StyleSheet.absoluteFillObject}>
                {data.map((item, index) => {
                    const opacity = scrollX.interpolate({
                        inputRange: [(index - 1) * width, index * width, (index+1) * width],
                        outputRange: [0, 1, 0],
                    })
                    return (
                        <Animated.Image
                            key={`image-${index}`}
                            source={{uri: item}}
                            style={[StyleSheet.absoluteFillObject, {opacity}]}
                            blurRadius={50}
                        />
                    )
                })
                }
            </View>
            <Animated.FlatList
                horizontal
                pagingEnabled
                onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: true})}
                data={data}
                keyExtractor={(_, index) => `${index}`}
                renderItem={({item}) => (
                    <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={{uri: item}}
                            style={{
                                width: imageW,
                                height: imageH,
                                resizeMode: 'cover',
                                borderRadius: 16
                            }}
                        />
                    </View>
                )}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});
