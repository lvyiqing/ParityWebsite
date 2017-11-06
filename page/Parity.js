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

export default class Parity extends Component<{}> {
    static navigationOptions = {
      tabBarLabel: '比价',
    }
    render() {
      return (
        <ScrollView>
          <Text>!!!比价</Text>
        </ScrollView>
      );
    }
  }
