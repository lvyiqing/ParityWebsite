import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  FlatList,
  ListView
} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Util from '../util/Utils';
import Search from './Common/Search';
import Link from './Home/Link';
import Carousel from './Home/Carousel';
import Recommend from './Home/Recommend';
import { StackNavigator } from 'react-navigation';

 class Home extends Component<{}> {
    static navigationOptions = {
      header:null,
    }

    constructor() {
        super();
        this.state = {
            selectedTab: '首页',
        }
      }

    render() {
        const { navigate } = this.props.navigation;
      return (
            <ScrollView style={{backgroundColor: '#efede8',}}>
                <View style={styles.title}>
                    <Image source={require("../images/title.png")} />
                </View>
                <View style={styles.search} >
                    <Text style={styles.inpult}
                    onPress={() => navigate('Search')}>
                    <IconFA size={20} name="search" />
                    {"   "}请输入您想比价的商品或型号
                    </Text>
                </View>
                <Link />
                <Carousel />
                <View style={{marginLeft: Util.size.width/20, marginTop:Util.size.height/30}}>
                    <Text style={{fontSize: 20, color: 'black'}}>今日推荐</Text>
                </View>
                <Recommend />
            </ScrollView>
      );
    }
  }
  const child =  StackNavigator(
    {
        Home: {screen: Home},
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