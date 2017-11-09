import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Image
} from 'react-native';
import Util from '../../util/Utils';

const vMargin = (Util.size.width - 145 * 3) / (3 + 1);

/**
 * 商品展示
 */
export default class Content extends Component<{}> {

    _data = [
        {
            icon: require('../../images/phone.jpg'),
            name: '家电'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '电脑'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '手机'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '摄影'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '办公'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '电子'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '厨卫'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '健康'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '影音'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '手表'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '运动'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '母婴'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '食品'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '附件'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '家居'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '个护'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '汽车'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '服饰'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '礼品'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '保健'
        },
        {
            icon: require('../../images/phone.jpg'),
            name: '玩具'
        },
    ]

    constructor(props) {
      super(props)
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        categoryIndex: 0,
        dataSource: ds.cloneWithRows(this._data)
      }
    }

    _renderGoodsList(rowData, sectionID, rowID, highlightRow) {

        return(
            <TouchableOpacity activeOpacity={0.8}>  
                <View style={styles.innerViewStyle}>  
                    <Image source={rowData.icon} style={styles.iconStyle} />
                    <Text>{rowData.name}</Text>  
                </View>  
            </TouchableOpacity>  
        );
    }

    render() {
      return (
        <View style={styles.container}>
            <ListView
                pageSize={3}
                contentContainerStyle={styles.grid}
                dataSource={this.state.dataSource}
                renderRow={this._renderGoodsList.bind(this)}/>
        </View>
      );
    }
  }

  var styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor:'#ffffff',
    },
    grid: {
        // 一行显示不下,换一行   
        flexWrap: 'wrap' ,
        // 侧轴方向
        alignItems:'center',
        // 主轴方向 
        flexDirection: 'row', 
        justifyContent: 'space-around',    
    },
    innerViewStyle:{  
        width: Util.size.width/3.6, 
        height: Util.size.height/5, 
        marginLeft: vMargin,
        marginTop: Util.size.height/30,
        // 文字内容居中对齐
        alignItems: 'center'  
    },
    iconStyle:{  
        width: Util.size.width/4.5,  
        height:Util.size.height/5.92,  
    },
  })
