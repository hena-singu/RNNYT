import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import Byline from './Byline';
import AppText from './AppText';
import Thumbnail from './Thumbnail';
import * as globalStyles from '../styles/global';

export default class NewsItem extends Component {
    static propTypes = {
        index: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        title: PropTypes.string,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        location: PropTypes.string,
        description: PropTypes.string,
        onPress: PropTypes.func.isRequired,
        style: View.propTypes.style
    };

    render() {
        const {
            style,
            imageUrl,
            title,
            author,
            date,
            location,
            description,
            onPress
        } = this.props;

        const accentColor = globalStyles.ACCENT_COLORS[
            this.props.index % globalStyles.ACCENT_COLORS.length
        ];

        return (
            <TouchableOpacity style={style} onPress={onPress}>
                <View>
                    <Thumbnail
                        url={imageUrl}
                        title={title}
                        accentColor={accentColor}
                        style={styles.Thumbnail}
                    />
                    <View style={styles.content}>
                        <Byline
                            author={author}
                            date={date}
                            location={location}
                        />
                        <AppText>
                            {description}
                        </AppText>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    thumbnail: {
        marginBottom: 5
    },
    content: {
        paddingHorizontal: 5
    }
})