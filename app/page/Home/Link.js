import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Util from '../../util/utils';
import IconFA from 'react-native-vector-icons/FontAwesome';

export default class Search extends Component<{}> {
    render() {
        return(
        <View style={styles.shortcut}>
            <View style={[styles.icons,{backgroundColor: '#ADADAD', borderColor: '#ADADAD'}]}>
                <IconFA size={20} name="search" style={styles.icon} />
            </View>
            <View style={[styles.icons,{backgroundColor: '#ADADAD', borderColor: '#ADADAD'}]}>
                <IconFA size={20} name="search" style={styles.icon} />
            </View>
            <View style={[styles.icons,{backgroundColor: '#ADADAD', borderColor: '#ADADAD'}]}>
                <IconFA size={20} name="search" style={styles.icon} />
            </View>
            <View style={[styles.icons,{backgroundColor: '#ADADAD', borderColor: '#ADADAD'}]}>
                <IconFA size={20} name="search" style={styles.icon} />
            </View>
        </View> 
        )
    }
}

const styles = StyleSheet.create({
    shortcut: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:Util.size.width/30,
    }, 
    icons: {
        alignItems: 'center',
        justifyContent: 'center',
        height: Util.size.width/8,
        width: Util.size.width/8,
        borderWidth: 1,
        borderRadius: 100,
    },
    icon: {
        color: 'white',
    },
})