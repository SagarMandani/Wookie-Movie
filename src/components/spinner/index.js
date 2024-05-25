import React from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
import styles from './style';
import { Colors, Icons } from '../../common';

/**
 * Spinner component
 */

export const Spinner = () => {
    return (
        <Modal transparent visible={true}>
            <View style={styles.container}>
                <View style={styles.spinnerBox}>
                    <ActivityIndicator color={Colors.Primary} size='large' />
                </View>
            </View>
        </Modal>
    )
}

export const SpinnerMoreLoading = () => {
    return (
        <View style={styles.moreLoading}>
            <ActivityIndicator color={Colors.Primary} size='large' />
        </View>
    )
}