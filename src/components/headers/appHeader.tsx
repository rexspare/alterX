import { useNavigation } from '@react-navigation/native';
import React, { FC, ReactNode, useState } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { BodyText } from '..';
import { EllipsisRound, LeftArrow } from '../../assets/icons';
import { COLORS, COMMON_STYLES, FONT_SIZE, hp, wp } from '../../assets/stylesGuide';
import { hasNotch, isIOS } from '../../utils/myUtils';

interface appHeaderProps {
    title: string;
    leftIcon?: ReactNode;
    onRightIconPress?: Function;
}

const AppHeader: FC<appHeaderProps> = ({
    title = 'Title',
    leftIcon = <EllipsisRound width={hp(2.8)} height={hp(2.8)} />,
    onRightIconPress = () => { }
}) => {
    const navigation = useNavigation()


    const onGoBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack()
        }

        return;
    }

    return (
        <View style={styles.main}>
            <TouchableHighlight
                style={styles.lftBtn}
                onPress={onGoBack}
            >
                <LeftArrow width={hp(2.8)} height={hp(2.8)} />
            </TouchableHighlight>


            <BodyText style={styles.title}>{title}</BodyText>

            <TouchableHighlight
                style={styles.rgtBtn}
                onPress={() => onRightIconPress()}
            >
                {leftIcon}
            </TouchableHighlight>


        </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    main: {
        width: wp(100),
        minHeight: (isIOS() && hasNotch()) ? 50 : 55,
        marginTop: (isIOS() && hasNotch()) ? 70 : 10,
        ...COMMON_STYLES.flexRowSpaceBetween,
        paddingHorizontal: '4%',
        paddingVertical: hp(1),
        backgroundColor: COLORS.BACKGROUND,
    },
    container: {
        ...COMMON_STYLES.flexRowSpaceBetween,
    },
    lftBtn: {
        width: hp(5.5),
        height: hp(5.5),
        backgroundColor: COLORS.PRIMARY,
        ...COMMON_STYLES.center_,
        borderRadius: hp(1)
    },
    rgtBtn: {
        width: hp(5.5),
        height: hp(5.5),
        backgroundColor: COLORS.BACKGROUND,
        borderWidth: 1,
        borderColor: COLORS.PRIMARY,
        ...COMMON_STYLES.center_,
        borderRadius: hp(1)
    },
    title: {
        fontSize: FONT_SIZE._18
    }
})