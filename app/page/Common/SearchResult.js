import React, { Component } from 'react';
import Util from '../../util/Utils';
import {
	Platform,
	Animated,
	Easing,
	View,
	Image,
	TouchableHighlight,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	TextInput,
	PanResponder,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const itemDate = [{key:0, img:require("../../images/pg.jpg"), name:"\u82f9\u679c\uff08\u0041\u0070\u0070\u006c\u0065\uff09\u0069\u0050\u0061\u0064\u0020\u0031\u0032\u0038\u0047\u0020\u0057\u004c\u0041\u004e\u7248\u0020\u0039\u002e\u0037\u82f1\u5bf8\u0020\u5e73\u677f\u7535\u8111"
,shops:[{key:101, shop:"\u5929\u732b\u65d7\u8230\u5e97", price: "\uffe5" + 2498}
       ,{key:102, shop:"\u56fd\u7f8e", price: "\uffe5" + 3088}
       ,{key:103, shop:"\u82cf\u5b81\u6613\u8d2d", price: "\uffe5" + 3088}]
}
 ,{key:1, img:require("../../images/hw.jpg"), name:"\u534e\u4e3a\u0020\u63fd\u9605\u004d\u0033\u0020\u0042\u0054\u0056\u002d\u0057\u0030\u0039\u0020\u0057\u0069\u0046\u0069\u7248\u0020\u0034\u0047\u002b\u0036\u0034\u0047\u5b58\u50a8\u0020\u0038\u002e\u0034\u82f1\u5bf8\u0020\u5e73\u677f\u7535\u8111"
,shops:[{key:104, shop:"\u5929\u732b\u65d7\u8230\u5e97", price: "\uffe5" + 1888}
       ,{key:105, shop:"\u4e2d\u56fd\u4e9a\u9a6c\u900a", price: "\uffe5" + 3088}
       ,{key:106, shop:"\u82cf\u5b81\u6613\u8d2d", price: "\uffe5" + 2288}]}];

export default class SearchResult extends Component<{}> {
  constructor(props) {
    super(props);
    this.state={
      list : false
    }
  }

  static navigationOptions = {
    tabBarLabel: '收藏',
  }
  render() {

    const itemsList = itemDate.map((elem, index) => {
        const shopsPrice = elem.shops.map((shopElem, shopIndex) => {
          return (
            <View style={styles.shopAndPrice} key={elem.key}>
              <Text style={styles.shop}>{shopElem.shop}</Text>
              <Text style={styles.price}>{shopElem.price}</Text>
            </View>
          );
        });
  
        return (      
          <TouchableOpacity style={styles.listSection} key={elem.key}>
            <View style={styles.left}>
              <Image source={elem.img} style={styles.img} resizeMode="contain"/>
            </View>
            <View style={styles.right}>
              <Text style={styles.name}>{elem.name}</Text>
              {shopsPrice}
            </View>
          </TouchableOpacity>
        );
      });

    return (
      <View style={styles.container} >
      <View style={styles.nav}>
        <View style={styles.topBox}>
          <TouchableOpacity style={styles.topBack} >
              <Image style={styles.backImg} source={require('../../images/back.png')} />
          </TouchableOpacity>
          <View style={styles.topSearch}>
            <View style={styles.searchSection}>
              <View style={styles.searchImgBox}>
                <Image source={require('../../images/search_1.png')} style={styles.searchImg} />
              </View>
              <TextInput style={styles.searchInput} placeholder="请输入商品关键字" underlineColorAndroid= 'transparent'/>
            </View>
          </View>
        </View>
      </View>

      <View style={{height: 10, marginTop: 4, flexDirection: 'row', backgroundColor: '#FFFFFF', flex:0.05}}>
      <TouchableOpacity style={styles.sort} >
        <Text style={{marginLeft:45, fontSize: 13, color: '#EE7000'}}>综合</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sort} >
        <Text style={{marginLeft:100, fontSize: 13}}>价格</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sort} >
        <Text style={{marginLeft:115, fontSize: 13}}>销量</Text>
      </TouchableOpacity>
    </View>

      <View style={styles.content}>
        <ScrollView keyboardShouldPersistTaps='always' style={{flex: 1}}>
        {itemsList}
        </ScrollView>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flex: 0.1,
    backgroundColor: '#ea5252'
  },
  topBox: {
    height: 40,
    marginTop: 10,
    flexDirection: 'row',
  },
  topBack: {
    flex: 0.1,
  },
  backImg: {
    marginLeft: 5,
    marginTop: 3,
  },
  topSearch: {
    flex: 0.9
  },
  searchSection: {
    flex: 1,
    marginRight: 20,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  searchImgBox: {
    flex: 0.15,
  },
  searchImg: {
    marginTop: 10,
    marginLeft: 20,
  },
  searchInput: {
    flex: 0.85,
  },
  content: {
    flex: 0.85,
  },
  listSection: {
    height: Util.size.width/3,
    marginTop: Util.size.width/50,
    marginLeft: Util.size.width/45,
    marginRight: Util.size.width/45,
    borderRadius: 2,
    borderBottomWidth: Util.pixel,
    borderColor: '#999999',
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor: '#FFFFFF',
  },
  left: {
    flex: 0.34,
  },
  right: {
    flex: 0.66,
  },
  img: {
    width: Util.size.width/4,
    height: Util.size.width/3,
    marginLeft: Util.size.width/50,
  },
  name: {
    marginTop: Util.size.width/50,
    marginRight: Util.size.width/30,
  },
  shopAndPrice: {
    marginTop: Util.size.width/60,
    flexDirection: 'row'
  },
  shop: {
    flex: 0.65,
    fontSize: 10
  },
  price: {
    flex: 0.35,
    marginLeft:Util.size.width/10, 
    fontSize: 10,
    color: '#e21414'
  },
});


