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
import Search from './src/components/Search';
import createStore from './src/createStore';
import { reshapeNewsData } from './src/utils/dataTransformations';
import mockData from './src/mockData.json';

const store = createStore();

export default class App extends Component {
  render() {
    console.log(mockData.results[0].title);

    return (
      <Provider store={store}>
        <View style={styles.container}>
          {/*<NewsFeedContainer />*/}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
