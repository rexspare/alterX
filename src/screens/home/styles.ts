import { StyleSheet } from "react-native";
import { COLORS, COMMON_STYLES, FONTS, FONT_SIZE, hp } from "../../assets/stylesGuide";

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: '4%',
        minHeight: hp(65),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: hp(2)
    },
    actionContainer: {
        width: '25%',
        marginTop: hp(1.5)
    },
})

export {
    styles
};
