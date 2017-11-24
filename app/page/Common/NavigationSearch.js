import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView,
    Image,
    TextInput,

  } from 'react-native';
  import Util from '../../util/Utils';
  import { StackNavigator } from 'react-navigation';
  import SearchResult from './SearchResult';

   class Heard extends Component<{}> {
    static navigationOptions = {
      }
    render() {
        // const { navigate } = this.props.navigation;
      return (
        <View style={styles.heard}>
            <TextInput underlineColorAndroid= 'transparent' style={styles.input} placeholder="请输入商品关键字"/>
            <TouchableHighlight>
                <Text style={{color:"black", justifyContent: 'center', paddingLeft: Util.size.width/20,}}>搜索</Text>
            </TouchableHighlight>
        </View>
      )
    }
  }

//   const result =  StackNavigator(
//     {
//         Heard: {screen: Heard},
//         SearchResult: {screen: SearchResult},
//     },
//  );

  const styles = StyleSheet.create({
      input: {
        width: Util.size.width/1.6,
        height: Util.size.width/10, 
        borderWidth: 1,
        paddingTop: Util.size.width/50,
        paddingBottom: Util.size.width/50,
        borderColor: '#CCC',
        borderRadius: 4,
      },
      heard: {
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
      },
  })

  export default Heard;