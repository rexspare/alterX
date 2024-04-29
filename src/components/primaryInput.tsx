import React from 'react';
import { StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import { SearchIcon } from '../assets/icons';
import { COLORS, FONTS, FONT_SIZE, hp } from '../assets/stylesGuide';

interface primaryInputPros {
    onChange?: (txt: any) => any;
    containerStyles?: ViewStyle;
    inputStyles?: any;
    inputContainer?: ViewStyle;
    value?: any;
    placeholder?: string;
}

const PrimaryInput: React.FC<primaryInputPros> = (props) => {

    return (
        <View style={[styles.main, props.containerStyles]}>

            <View style={[
                styles.container,
                props.inputContainer
            ]}>

                <SearchIcon />

                <TextInput
                    style={[
                        styles.input,
                        props.inputStyles,
                    ]}
                    value={props.value || ""}
                    onChangeText={(txt) => props.onChange(txt)}
                    placeholder={props?.placeholder || ""}
                    placeholderTextColor={COLORS.DISABLED}
                />
            </View>
        </View>
    )
}

PrimaryInput.defaultProps = {
    onChange: () => { },
    value: 'value',
}

export default React.memo(PrimaryInput)

const styles = StyleSheet.create({
    main: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: hp(1),
        backgroundColor: COLORS.BACKGROUND,
    },

    container: {
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: hp(0.6),
        borderColor: COLORS.DISABLED,
        alignItems: 'center',
        paddingHorizontal:'3%'

    },
    input: {
        flex: 1,
        height: hp(6),
        paddingHorizontal: 10,
        fontSize: FONT_SIZE._14,
        fontFamily: FONTS.REGULAR,
        color: COLORS.TEXT
    },
   
})