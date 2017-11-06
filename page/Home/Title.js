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
  import Search from './Search';
  import { StackNavigator } from 'react-navigation';
  import Util from '../../utils';
  import IconFA from 'react-native-vector-icons/FontAwesome';

   class Title extends Component<{}> {
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>
                <View style={styles.title}>
                    <Image source={require("../../images/title.png")} />
                </View>
                <View style={styles.search} >
                    <Text style={styles.inpult}
                    onPress={() => navigate('Search')}>
                    <IconFA size={20} name="search" />
                    {"   "}请输入您想比价的商品或型号
                    </Text>
                </View>
            </View>
        )
    }
  }

const child =  StackNavigator(
    {
        Title: {screen: Title},
        Search: {screen: Search},
    }
);

  
const styles = StyleSheet.create({
    title: {
        marginTop:Util.size.width/20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    search: {
        marginTop:Util.size.width/30,
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    inpult: { 
        borderWidth: 1,
        justifyContent: 'center',
        paddingLeft: Util.size.width/25,
        paddingTop: Util.size.width/50,
        paddingBottom: Util.size.width/50,
        borderColor: '#CCC',
        borderRadius: 4,
        width: Util.size.width/1.2,
    },
})

export default child;