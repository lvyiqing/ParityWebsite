import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Util from '../utils';

export default class Home extends Component<{}> {
    static navigationOptions = {
      tabBarLabel: '首页',
    }
    render() {
      return (
        <ScrollView>
            <View style={styles.title}>
                <Image source={require("../images/title.png")} />
            </View>
            <View style={styles.search} >
                <Text style={styles.inpult}>
                请输入您想比价的商品或型号
                </Text>
            </View>
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    title: {
        paddingTop:Util.size.height/7,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    search: {
        paddingTop:Util.size.height/13,
        flexDirection: 'row',
        flex:1,  
        alignItems: 'center',  
    },
    inpult: { 
        flex:1, 
        height: 45,
        borderWidth: 1,
        marginLeft: Util.size.width/8,
        marginRight: Util.size.width/8,
        paddingLeft: Util.size.width/25,
        paddingTop: 10,
        borderColor: '#CCC',
        borderRadius: 4,
    }
})
