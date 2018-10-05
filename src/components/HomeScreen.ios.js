import React, { Component } from 'react';
import {
    TabBarIOS,
    Text,
    Alert,
    Vibration,
    StatusBar
} from 'react-native';

import * as globalStyles from '../styles/global';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import SearchContainer from '../containers/SearchContainer';

StatusBar.setBarStyle('light-content');

export default class HomeScree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'newsFeed'
        };
    }

    showBookmarksAlert =() => {
        Vibration.vibrate();

        Alert.alert(
            'Comming Soon!',
            "We're hard at work on this feather, check back in the near future.",
            [
                {
                    text: 'OK',
                    onPress: () => console.log('User press OK')
                }
            ]
        );
    };

    render() {
        return (
            <TabBarIOS
                barTintColor={globalStyles.BAR_COLOR}
                tintColor={globalStyles.LINK_COLOR}
                translucent={false}
            >
                <TabBarIOS.Item
                    badge={4}
                    systemIcon={'featured'}
                    selected={this.state.tab == 'newsFeed'}
                    onPress={() => this.setState({ tab: 'newsFeed' })}
                >
                    <NewsFeedContainer />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon={'search'}
                    selected={this.state.tab === 'search'}
                    onPress={() => this.setState({ tab: 'search' })}
                >
                    <SearchContainer />
                </TabBarIOS.Item>
                <TabBarIOS
                    systemIcon={'bookmarks'}
                    selected={this.state.tab == 'bookmarks'}
                    onPress={() => this.setState({ tab: 'search' })}
                >
                    <Text>Bookmarks</Text>
                </TabBarIOS>
            </TabBarIOS>
        );
    }
}