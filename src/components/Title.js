import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text } from 'react-native';

import AppText from './AppText';
import * as globalStyles from '../styles/global';

const Title = ({ children, style }) => (
    <AppText style={[styles.title, style]}>
        {children}
    </AppText>   
);

Title.propTypes = {
    children: PropTypes.node,
    style: Text.propTypes.style
};

const styles = StyleSheet.create({
    title: {
        fontFamily: Platform === 'ios' ? 'HelveticaNene-CondensedBold' : 'sans seif',
        fontWeight: Platform === 'ios' ? 'normal' : 'bold',
        fontSize: 18,
        color: globalStyles.HEADER_TEXT_COLOR,
        backgroundColor: `${globalStyles.BG_COLOR}99`
    }
});

export default Title;