import React, { ReactNode } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle, } from 'react-native';
import { If } from '.';
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp } from '../assets/stylesGuide';


interface primaryButtonProps {
    title: string;
    onPress: () => any;
    style?: ViewStyle | [ViewStyle] | any;
    textStyle?: TextStyle | [TextStyle] | any;
    isLoading?: boolean;
    filled?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
}

const PrimaryButton: React.FC<primaryButtonProps> = (props) => {
    const { filled = false, disabled = false, } = props
    const styles = styles_(filled, disabled)

    return (
        <TouchableOpacity
            style={[
                styles.main,
                props?.icon == undefined ? { width: '100%', } : { paddingHorizontal: '5%', height: hp(6.4) },
                props.style,
            ]}
            activeOpacity={0.8}
            onPress={() => props.onPress()}
            disabled={disabled || props.isLoading}
        >
            {
                props.isLoading ?
                    <ActivityIndicator color={COLORS.WHITE} />
                    :
                    <Text style={[styles.title, props.textStyle]}>{props.title}</Text>
            }
            <If condition={props.icon != undefined && props.icon != true}>
                <View style={{ marginLeft: 5 }}>
                    {props.icon}
                </View>
            </If>
        </TouchableOpacity>
    )
}

PrimaryButton.defaultProps = {
    title: 'title',
    onPress: () => { },
    isLoading: false
}

export default React.memo(PrimaryButton)

const styles_ = (filled: any, disabled: any) => StyleSheet.create({
    main: {

        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: hp(1),
        backgroundColor: filled ? disabled ? COLORS.DISABLED : COLORS.PRIMARY
            : COLORS.BACKGROUND,
        ...COMMON_STYLES.center_,
        height: hp(6),
        borderRadius: hp(0.6),
        borderWidth: 1.5,
        borderColor: disabled ? COLORS.DISABLED : COLORS.PRIMARY
    },
    title: {
        color: filled ? COLORS.WHITE
            : disabled ? COLORS.DISABLED : COLORS.PRIMARY,
        fontSize: FONT_SIZE._14,
        fontFamily: FONTS.SEMI_BOLD
    }
})