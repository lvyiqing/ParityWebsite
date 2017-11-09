import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableHighlight,
  ListView
} from 'react-native';
import Util from '../../util/Utils';
import Swiper from 'react-native-swiper';

export default class Recommend extends Component<{}> {
    _data = [
        {title: '1',
        name:'双11预告： Yeezy 10000元包邮 心动不如行动 抓紧抢购吧 现在予定即可领200元优惠券',
        value: require('../../images/yezi.jpg'),
        },
        {title: '2',
        name:'双11预告： Yeezy 10000元包邮 心动不如行动 抓紧抢购吧 现在予定即可领200元优惠券',
        value: require('../../images/yezi.jpg'),
        },
        {title: '3',
        name:'双11预告： Yeezy 10000元包邮 心动不如行动 抓紧抢购吧 现在予定即可领200元优惠券',
        value: require('../../images/yezi.jpg'),
        },
    ]

    constructor() {
        super();
        var ds =new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._data),
        }
      }

      renderRow (item){
        return(
        <TouchableHighlight >
            <View style={styles.hot}>
                <View style={styles.hotleft}>
                    <Text style={{color: 'black',}}>{item.name}</Text>
                </View>
                <View style={styles.hotright}>
                    <Image source={item.value} style={styles.hotimage}/>
                </View>
            </View>
        </TouchableHighlight>
        )}

    render() {
        return(
            <View>
                <TouchableHighlight >
                    <View style={styles.hot}>
                        <View style={styles.hotleft}>
                            <Text style={{color: 'black',}}>双11预告： Yeezy 10000元包邮 心动不如行动 抓紧抢购吧 现在予定即可领200元优惠券</Text>
                        </View>
                        <View style={styles.hotright}>
                            <Image source={require('../../images/yezi.jpg')} style={styles.hotimage}/>
                        </View>
                    </View>
                </TouchableHighlight>
                <ListView
                dataSource = {this.state.dataSource}
                renderRow = {this.renderRow.bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hot: {
        marginTop: Util.size.height/30,
        flexDirection: 'row',
        height: Util.size.height/5,
        justifyContent: 'space-between',
    },
    hotleft: {
        width:Util.size.width/2,
        marginLeft: Util.size.width/50,
    },
    hotright: {
        width:Util.size.width/2,
    },
    hotimage: {
        height: Util.size.height/5,
        width: Util.size.width/2 - Util.size.width/20,
    }
})