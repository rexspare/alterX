import { StyleSheet } from "react-native";
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp } from "../../assets/stylesGuide";

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: '4%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: hp(2),
    },
    row: {
        width: '100%',
        ...COMMON_STYLES.flexRowSpaceBetween,
        paddingTop: hp(1),
    },
    title: {
        fontSize: FONT_SIZE._22,
        fontFamily: FONTS.MEDIUM
    },
    userContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: hp(0.5)
    },
    avatar: {
        width: hp(4),
        height: hp(4),
        borderRadius: hp(4)
    },
    name: {
        marginVertical: 0,
        fontSize: FONT_SIZE._15,
        fontFamily: FONTS.MEDIUM,
        marginHorizontal: 7
    },
    reviewTxt: {
        marginVertical: 0,
        fontSize: FONT_SIZE._12,
        color: COLORS.SECONDARY,
    },
    line: {
        height: 8,
        width: 1,
        backgroundColor: COLORS.SECONDARY,
        marginRight: 7
    },
    address: {
        fontSize: FONT_SIZE._12,
        color: COLORS.SECONDARY,
        marginLeft: 7,
        flexShrink: 1,
    },
    price: {
        fontSize: FONT_SIZE._22,
        fontFamily: FONTS.MEDIUM,
        marginVertical: 0,
        lineHeight: FONT_SIZE._22,
    },
    separator: {
        width: '100%',
        height: 1.5,
        borderRadius: 10,
        backgroundColor: COLORS.SEPARATOR,
        marginVertical: hp(2)
    },
    subHeading: {
        fontSize: FONT_SIZE._18,
        marginVertical: 0,
        fontFamily: FONTS.MEDIUM,
        textAlign: 'left'
    },
    desc: {
        fontSize: FONT_SIZE._14,
        textAlign: 'left'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    ratingTxt: {
        marginVertical: 0,
        fontSize: FONT_SIZE._14,
        color: COLORS.SECONDARY,
    },
    row1: {
        width: '100%',
        ...COMMON_STYLES.flexRowSpaceBetween,
    },
    filterContainer: {
        height: hp(5),
        marginTop: hp(2.5),
        marginBottom: hp(2)
    }
})

export {
    styles
};
