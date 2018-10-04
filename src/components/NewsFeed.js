import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    ListView,
    Modal,
    WebView,
    TouchableOpacity
} from 'react-native';

import * as globalStyles from '../styles/global';
import NewsItem from './NewsItem';
import SmallText from './SmallText';

export default class NewsFeed extends Component {
    static propTypes = {
        news: PropTypes.arrayOf(PropTypes.object),
        listStyles: View.propTypes.style,
        loadNews: PropTypes.func
    };

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.title !== row2.title
        });

        this.state = {
            dataSource: ds.cloneWithRows(props.news),
            modalVisible: false
        };
    }

    componentWillMount() {
        this.refresh();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource)
        });
    }

    refresh = () => {
        if (this.props.loadNews) {
            this.props.loadNews();
        }
    };

    onModalOpen = (url) => {
        this.setState({
            modalVisible: true,
            modalUrl: url
        });
    };

    onModalClose = () => {
        this.setState({
            modalVisible: false
        });
    };

    renderRow = (rowData, ...rest) => {
        const index = parseInt(rest[1], 10);
        return (
            <NewsItem
                onPress={() => this.onModalOpen(rowData.url)}
                style={styles.newsItem}
                index={index}
                {...rowData}
            />
        );
    };

    renderModal() {
        return (
            <Modal
                animationType="slide"
                visible={this.state.modalVisible}
                onRequestClose={this.onModalClose}
            >
                <View style={styles.modalContent}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={this.onModalClose}
                    >
                        <SmallText>Close</SmallText>
                    </TouchableOpacity>
                    <WebView
                        scalesPageToFit
                        source={{ uri: this.state.modalUrl }}
                    />
                </View>
            </Modal>
        );
    }

    render() {
        return (
            <View style={globalStyles.COMMON_STYLES.pageContainer}>
                <ListView
                    enableEmptySections
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    style={this.props.listStyles}
                />
                {this.renderModal()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    newsItem: {
        marginBottom: 20
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: globalStyles.BG_COLOR
    },
    closeButton: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10
    }
});