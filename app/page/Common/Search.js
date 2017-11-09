import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';
import Util from '../../util/Utils';

export default class Search extends Component<{}> {
  constructor() {
    super();
    this.state = {
        selectedTab: '首页',
    }
  }
    static navigationOptions = {
      tabBarVisible:false,
      headerTitle: <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
        <TextInput underlineColorAndroid= 'transparent' style={{
        width: Util.size.width/1.6,
        height: Util.size.width/10, 
        borderWidth: 1,
        paddingTop: Util.size.width/50,
        paddingBottom: Util.size.width/50,
        borderColor: '#CCC',
        borderRadius: 4,
    }} placeholder="请输入商品关键字"/>
    <Text style={{color:"black", justifyContent: 'center', paddingLeft: Util.size.width/20,}}>搜索</Text></View>,
    }
    render() {
      return (
        <ScrollView>
          <View style={styles.dor}>
            <Text style={{fontSize: 20}}>热门搜索</Text>
          </View>
          <View style={styles.hot}>
            <View style={styles.hots}>
              <TouchableHighlight>
                <Text numberOfLines={1} style={styles.font}>iphon 7</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.hots}>
              <TouchableHighlight>
                <Text numberOfLines={1} style={styles.font}>小米 Note3</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.hots}>
              <TouchableHighlight>
                <Text numberOfLines={1} style={styles.font}>iphon 8</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.hots}>
              <TouchableHighlight>
                <Text numberOfLines={1} style={styles.font}>iphon x</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    dor: {
      paddingTop: Util.size.width/20,
      paddingLeft: Util.size.width/20,
    },
    hot: {
      paddingTop: Util.size.width/30,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    hots: {
      width: Util.size.width/5,
      height: Util.size.width/15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#B8B8B8',
      backgroundColor: '#B8B8B8',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    font: {
      paddingLeft: Util.size.width/50,
    }

  })