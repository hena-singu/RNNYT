import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';

import Title from './Title';

const Thumbnail = ({ url, title, accentColor, style }) => {
    const imageStyle = {
        borderColor: `${accentColor}77`
    };

    const titleComponent = <Title style={styles.title}>{title}</Title>;

    return (
        <View style={[styles.container, imageStyle, style]}>
            {
                url.length > 0 ? (
                    <ImageBackground
                        style={styles.image}
                        source={{uri: url}}
                    >
                        {titleComponent}
                    </ImageBackground>
                ) : (
                    <View style={styles.image}>
                        {titleComponent}
                    </View>
                )
            }
        </View>
    )
};

Thumbnail.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    accentColor: PropTypes.string.isRequired,
    style: Image.propTypes.style
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 3,
        borderStyle: 'solid'
    },
    image: {
        width: '100%',
        height: 100,
        justifyContent: 'flex-end',
    },
    title: {
        padding: 5
    }
});

export default Thumbnail;
