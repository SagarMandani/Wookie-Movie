import React, { Fragment } from 'react';
import { TextInput, Image, View, Platform, TouchableOpacity, Text } from 'react-native';
import styles from './style';
import { Colors } from '../../common';

/**
 * Common InputWithIcon Component
 */

const InputWithIcon = (props) => {

    const { refField, iconUrl, autoCapitalize, autoFocus, keyboardType, multiline, placeholder, returnKeyType, onSubmitEditing, blurOnSubmit, placeholderTextColor,
        secureTextEntry, value, onChange, children, containerStyle, iconStyle, inputTextStyle, selectionColor, editable, numberOfLines, pointerEvents, onIconClick,
        leftIconUrl, leftIconStyle, rightIconUrl, rightIconStyle, rightIconContainer, rightIconText, rightIconTextStyle, onPressMainContainer } = props;
    const { container, container2, iconView, icon, textInput } = styles;

    return (
        <Fragment>
            <TouchableOpacity activeOpacity={1} onPress={onPressMainContainer}
                style={[Platform.OS == 'ios' ? container : container2, containerStyle]}
                pointerEvents={pointerEvents ? pointerEvents : 'auto'}>
                {leftIconUrl &&
                    <View style={iconView}>
                        <Image resizeMode="contain" source={leftIconUrl} style={[icon, leftIconStyle]} />
                    </View>
                }
                <TextInput
                    ref={refField}
                    editable={editable}
                    autoCapitalize={autoCapitalize}
                    autoFocus={autoFocus}
                    keyboardType={keyboardType}
                    multiline={multiline || false}
                    placeholder={placeholder}
                    returnKeyType={returnKeyType}
                    onSubmitEditing={onSubmitEditing}
                    blurOnSubmit={blurOnSubmit}
                    secureTextEntry={secureTextEntry}
                    value={value}
                    numberOfLines={numberOfLines}
                    underlineColorAndroid='transparent'
                    pointerEvents={pointerEvents ? pointerEvents : 'auto'}
                    placeholderTextColor={placeholderTextColor ? placeholderTextColor : Colors.BlackRGB(0.5)}
                    selectionColor={selectionColor ? selectionColor : Colors.BlackRGB(0.5)}
                    onChangeText={value => onChange(value)}
                    style={[textInput, inputTextStyle]} />
                {iconUrl &&
                    <TouchableOpacity style={iconView} onPress={() => onIconClick ? onIconClick() : {}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {rightIconUrl &&
                                <View style={rightIconContainer}>
                                    <Text style={rightIconTextStyle}>{rightIconText}</Text>
                                    <Image resizeMode="contain" source={rightIconUrl} style={[rightIconStyle]} />
                                </View>
                            }
                            <Image resizeMode="contain" source={iconUrl} style={[icon, iconStyle]} />
                        </View>
                    </TouchableOpacity>
                }
                {children}
            </TouchableOpacity>
        </Fragment>
    );
}

export default InputWithIcon;