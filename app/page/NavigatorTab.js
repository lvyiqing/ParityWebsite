import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Home from './Home';
import Category from './Category';
import Collection from './Collection';
import MyPage from './MyPage';
import SearchResult from './Common/SearchResult';

export default class Navigator extends Component<{}> {
constructor() {
    super();
    this.state = {
        selectedTab: '首页',
    }
  }

  render() {
    return (
        <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <IconFA size={25} name="home" />}
                        renderSelectedIcon={() =><IconFA size={25} style={{color: "#ea5252",}} name="home" />}
                        onPress={() => this.setState({ selectedTab: '首页' })}>
                        <Home navigation={this.props.navigation}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '比价'}
                        title="比价"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <IconFA size={25} name="search" />}
                        renderSelectedIcon={() =><IconFA size={25} style={{color: "#ea5252",}} name="search" />}
                        onPress={() => this.setState({ selectedTab: '比价' })}>
                        <Category />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '收藏'}
                        title="收藏"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <IconFA size={25} name="star" />}
                        renderSelectedIcon={() =><IconFA size={25} style={{color: "#ea5252",}} name="star" />}
                        onPress={() => this.setState({ selectedTab: '收藏' })}>
                        {/*<Collection />*/}
                        <SearchResult />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <IconFA size={25} name="user" />}
                        renderSelectedIcon={() =><IconFA size={25} style={{color: "#ea5252",}} name="user" />}
                        onPress={() => this.setState({ selectedTab: '我的' })}>
                        <MyPage />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  tabText: {
      color: "#666666",
      fontSize: 13
  },
  selectedTabText: {
      color: "#ea5252",
      fontSize: 13
  },
});