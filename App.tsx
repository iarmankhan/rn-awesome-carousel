import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {data} from "./data";

const {width, height} = Dimensions.get('screen');
const imageW = width * 0.7;
const imageH = imageW * 1.54;

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <FlatList
                horizontal
                pagingEnabled
                data={data}
                keyExtractor={(_, index) => `${index}`}
                renderItem={({item}) => (
                    <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={{uri: item}}
                            style={{
                                width: imageW,
                                height: imageH,
                                resizeMode: 'cover'
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
