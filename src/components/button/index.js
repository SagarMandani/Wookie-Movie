import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './style';

/**
 * Common Button component
 */

export const Button = props => (
    <Pressable style={[styles.container, props.style]} onPress={props.onPress}>
        <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
    </Pressable>
);

export default Button;