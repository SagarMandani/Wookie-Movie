import { Alert } from 'react-native';

export const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const alertDialog = (message, onPress) => {
    Alert.alert('', message, [{ text: 'ok', style: 'cancel', onPress: () => onPress() }]);
}

export const handleErrMsg = (res) => {
    let errMsg = 'Something went Wrong!';
    if (Array.isArray(res?.message)) {
        errMsg = res?.message[0];
    } else if (typeof res?.message == 'string') {
        errMsg = res?.message;
    } else if ([Object.keys(res?.message)[0]]) {
        errMsg = res?.message?.[Object.keys(res?.message)[0]][0];
    }
    return errMsg;
};