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
  import IconFA from 'react-native-vector-icons/FontAwesome';

  export default class Login extends Component<{}> {
    static navigationOptions = {
    }
    render() {
      return (
        <ScrollView>
            <View style={styles.imgview}>
                <Image style={styles.img} source={require('../../images/title1.png')}/>
            </View>
            <View style={{marginTop: Util.size.width/20,}}>
                <TouchableHighlight>
                    <View style={styles.touch}>
                        <View style={styles.loglink}>
                            <View style={styles.icon}>
                                <IconFA size={20} name="user" />
                            </View>
                            <View style={styles.text}>
                                <Text>淘宝帐号登录</Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style={styles.touch}>
                        <View style={styles.loglink}>
                            <View style={styles.icon}>
                                <IconFA size={20} name="user" />
                            </View>
                            <View style={styles.text}>
                                <Text>微信账号登录</Text>
                            </View>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
            <View style={{marginTop: Util.size.width/20,}}>
                <View style={styles.touch}>
                    <TextInput style={styles.input} underlineColorAndroid= 'transparent' placeholder="邮箱"/>
                </View>
                <View>
                    <View style={[styles.touch,{marginTop: Util.size.width/20,}]}>
                        <View style={styles.password}>
                            <TextInput style={{width: Util.size.width/2,}} underlineColorAndroid= 'transparent' placeholder="密码"/>
                            <TouchableHighlight style={{justifyContent: 'center',paddingRight: Util.size.width/50,}}>
                                <Text>忘记密码</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.touch}>
                <View style={styles.longin}>
                    <Text>登录</Text>
                </View>
            </View>
            <View style={[styles.touch,{marginTop: Util.size.width/40,}]}>
                <TouchableHighlight>
                    <Text>没有账户，注册可比价账户</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
      imgview: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: Util.size.width/1,
        height: Util.size.height/8,
      },
      touch: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      img: {
        marginTop: Util.size.width/20,
        width: Util.size.width/1.8,
        height: Util.size.height/10,
      },
      loglink: {
        flexDirection: 'row',
        marginTop: Util.size.width/20,
        width:Util.size.width/1.4,
        height:Util.size.height/15,
        backgroundColor: 'white',
        borderColor: '#ea5252',
        borderWidth: 1,
        borderRadius: 10,
      },
      icon: {
        paddingLeft: Util.size.width/40,
        flexDirection: 'column',
        justifyContent: 'center',
      },
      text: {
        width: Util.size.width/2,
        height: Util.size.height/15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        width: Util.size.width/1.4,
        height: Util.size.height/15,
        borderRadius: 10,
        backgroundColor: 'white',
      },
      longin: {
        marginTop: Util.size.width/20,
        width: Util.size.width/1.4,
        height: Util.size.height/15,
        backgroundColor: '#B8B8B8',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      password: {
        width: Util.size.width/1.4,
        height: Util.size.height/15,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }
  })