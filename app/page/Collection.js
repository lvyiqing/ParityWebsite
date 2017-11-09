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

export default class Collection extends Component<{}> {
    static navigationOptions = {
      tabBarLabel: '收藏',
    }
    render() {
      return (
        <ScrollView>
          <Text>!!!收藏</Text>
        </ScrollView>
      );
    }
  }
