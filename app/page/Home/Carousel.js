import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import Util from '../../util/utils';
import Swiper from 'react-native-swiper';

export default class Carousel extends Component<{}> {
    render() {
        return(
        <View style={styles.swiper}>
            <Swiper
            loop={true}
            autoplay={true}
            autoplayTimeout={3}
            horizontal={true}
            >
                <TouchableHighlight >
                    <Image source={require('../../images/cuxiao1.jpg')} style={styles.swiperImage}/>
                </TouchableHighlight>
                <TouchableHighlight >
                    <Image source={require('../../images/cuxiao2.jpg')} style={styles.swiperImage}/>
                </TouchableHighlight>
                <TouchableHighlight >
                    <Image source={require('../../images/cuxiao3.jpg')} style={styles.swiperImage}/>
                </TouchableHighlight>
            </Swiper>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    swiper: {
        marginTop: Util.size.height/30,
        width: Util.size.width/1,
        height: Util.size.height/3,
    },
    swiperImage: {
        width: Util.size.width/1,
        height: Util.size.height/3,
    },
})