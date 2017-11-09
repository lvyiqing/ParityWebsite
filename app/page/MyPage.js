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

export default class MyPage extends Component<{}> {
    constructor() {
        super();
        this.state = {
            selectedTab: '我的',
        }
      }
    render() {
      return (
        <ScrollView>
          <Text>!!!我的</Text>
        </ScrollView>
      );
    }
  }
