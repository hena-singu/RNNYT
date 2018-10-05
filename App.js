/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  View,
} from 'react-native';

import NewsFeedContainer from './src/containers/NewsFeedContainer';
import SearchContainer from './src/containers/SearchContainer';
import createStore from './src/createStore';

const store = createStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NewsFeedContainer style={{flex: 1}}/>
          <SearchContainer style={{flex: 1}}/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  }
});
