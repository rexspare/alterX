import { FC } from 'react';
import { StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { BodyText } from '.';
import { COLORS, FONTS, FONT_SIZE, hp } from '../assets/stylesGuide';
import { Star, StarWhite } from '../assets/icons';

interface chipButtonProps {
    title: string;
    isSelected: boolean;
    onPress: Function;
    style?: ViewStyle;
    textStyle?: TextStyle;
    size?: number;
}

const ChipButton: FC<chipButtonProps> = (props) => {
    const {
        title,
        isSelected,
        onPress = () => { },
        style,
        textStyle,
        size = 1.4
    } = props

    const styles = styles_(isSelected)

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPress()}
            style={[styles.main, style]}>
            {
                isSelected ?
                    <StarWhite width={hp(size)} height={hp(size)} />
                    :
                    <Star width={hp(size)} height={hp(size)} />
            }
            <BodyText style={{ ...styles.title, ...textStyle }}>{title}</BodyText>
        </TouchableOpacity>
    )
}

export default ChipButton

const styles_ = (isSelected: boolean) => StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: hp(8.25),
        height: hp(4),
        borderRadius: hp(5),
        backgroundColor: isSelected ? COLORS.BLACK : COLORS.BACKGROUND,
        borderColor: COLORS.BLACK,
        borderWidth: 1,
       
    },
    title: {
        marginVertical: 0,
        color: isSelected ? COLORS.WHITE : COLORS.BLACK,
        fontSize: FONT_SIZE._14,
        marginLeft: 5
    }
})