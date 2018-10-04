import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import * as globalStyles from '../styles/global';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }

    render() {
        return (
            <View style={globalStyles.COMMON_STYLES.pageContainer}>
                <View style={styles.search}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => this.setState({ searchText: text })}
                        value={this.state.searchText}
                        placeholder={'Search'}
                        placeholderTextColor={globalStyles.MUTED_COLOR}
                    />
                </View>
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