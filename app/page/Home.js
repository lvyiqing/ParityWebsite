import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Image,
} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Util from '../util/Utils';
import Search from './Common/Search';
import Link from './Home/Link';
import Recommend from './Home/Recommend';
import Discount from './Home/Discount';
import { StackNavigator } from 'react-navigation';
import Category from './Category';

 class Home extends Component<{}> {
    static navigationOptions = {
      header:null,
    }

    constructor() {
        super();
        this.state = {
            hots: ['refs.hot', 'refs.hot2'],
        }
      }

    goHot() {
        this.refs.hot.scrollTo({y: 200},);
    }

    goHot1() {
        this.refs.hot.scrollTo({y: 1080},);
    }

    render() {
        const { navigate } = this.props.navigation;
      return (
            <ScrollView ref='hot' style={{backgroundColor: '#efede8',}}>
                <View style={{backgroundColor: 'white',}}>
                    <View style={styles.title}>
                        <Image style={styles.img} source={require("../images/title1.png")} />
                    </View>
                    <View style={styles.search} >
                        <Text style={styles.inpult}
                        onPress={() => navigate('Search')}>
                        <IconFA size={20} name="search" />
                        {"   "}请输入您想比价的商品或型号
                        </Text>
                    </View>
                    <Link navigation={this.props.navigation}
                        goHot={this.goHot.bind(this)}
                        goHot1={this.goHot1.bind(this)}/>
                </View>

                <View style={{backgroundColor: 'white', marginTop:Util.size.height/50,}}>
                    <View style={styles.hotTitle}>
                        <Text style={{fontSize: 20, color: 'black'}}>热门商品</Text>
                    </View>
                <Recommend />
                </View>
                <View style={{backgroundColor: 'white', marginTop:Util.size.height/50,}}>
                    <View style={styles.hotTitle}>
                        <Text style={{fontSize: 20, color: 'black'}}>热门优惠</Text>
                    </View>
                <Discount />
                </View>
            </ScrollView>
      );
    }
  }
  const child =  StackNavigator(
    {
        Home: {screen: Home},
        Search: {screen: Search},
        Category: {screen: Category},
    }
 );

  const styles = StyleSheet.create({
    title: {
        marginTop:Util.size.width/20,
        flexDirection: 'row',
        justifyContent: 'center',
        height: Util.size.height/14,
    },
    img: {
        height: Util.size.height/14,
        width: Util.size.width/2.4,
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
    hotTitle: {
        marginLeft: Util.size.width/20,
        marginTop:Util.size.height/45,
    }
})


export default child;