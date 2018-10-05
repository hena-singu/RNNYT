import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput } from 'react-native';

import * as globalStyles from '../styles/global';
import NewsFeed from './NewsFeed';

export default class Search extends Component {
    static propTypes = {
        filteredNews: PropTypes.arrayOf(PropTypes.object),
        searchNews: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }

    searchNews = text => {
        this.setState({ searchText: text });
        this.props.searchNews(text);
    };

    render() {
        return (
            <View style={globalStyles.COMMON_STYLES.pageContainer}>
                <View style={styles.search}>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.searchNews}
                        value={this.state.searchText}
                        placeholder={'Search'}
                        placeholderTextColor={globalStyles.MUTED_COLOR}
                    />
                </View>
                <NewsFeed news={this.props.filteredNews} listStyle={{}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 35,
        color: globalStyles.TEXT_COLOR,
        paddingHorizontal: 5
    },
    search: {
        flexDirection: 'row',
        borderColor: globalStyles.MUTED_COLOR,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 5
    }
});