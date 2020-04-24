import React, { Component } from 'react';
import { ImageBackground, Dimensions, Image, View, Text } from 'react-native';

import MButton from './MButton';
import { strings } from '../lng/pagel';

const { width, height } = Dimensions.get("window");

class pageo extends Component{
    render() {
        return(
            <ImageBackground
                source = {require('../img/s.jpg')}
                style={{height, width, alignItems:"center",
                justifyContent:"center"}}>
                <Image
                    source = { require('../img/ss.jpg')}>
                </Image>
                <View>
                    <MButton
                        title={strings.titleone}
                    ></MButton>
                    <MButton
                        title={strings.titletwo}
                    ></MButton>
                </View>
            </ImageBackground>
        );
    }
}
export default pageo;