import { Dimensions, StyleSheet, Platform, PixelRatio } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

enum FONTS {
    THIN = "Inter-Thin",
    EXTRA_LIGHT = "Inter-ExtraLight",
    LIGHT = "Inter-Light",
    REGULAR = "Inter-Regular",
    MEDIUM = "Inter-Medium",
    SEMI_BOLD = "Inter-SemiBold",
    BOLD = "Inter-Bold",
    EXTRA_BOLD = "Inter-ExtraBold",
    BLACK = "Inter-Black",
}


enum SIZE {
    WIDTH = Dimensions.get('screen').width,
    HEIGHT = Dimensions.get('screen').height,
}

enum COLORS {
    PRIMARY = "#333333",
    SECONDARY = "#545454",
    BACKGROUND = "#FFFFFF",
    WHITE = "#FFFFFF",
    TEXT = "#000000",
    BLACK = "#000000",
    DISABLED = "#999999",
    LINK = "#3348FF",
    BLACK_OPACITY = "rgba(0,0,0,0.5)",
    DANGER = "#AB0000",
    SEPARATOR = "rgba(77,77,77,0.2)"
}


const COMMON_STYLES = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND
    },
    mainPad: {
        flex: 1,
        paddingHorizontal: '3%',
        backgroundColor: COLORS.BACKGROUND,
    },
    center_: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    scrollPad: {
        paddingHorizontal: '5%'
    }
})

enum FONT_SIZE {
    _32 = hp(3.82),
    _24 = hp(2.87),
    _22 = hp(2.63),
    _20 = hp(2.27),
    _18 = hp(2.15),
    _17 = hp(2.0),
    _16 = hp(1.91),
    _15 = hp(1.79),
    _14 = hp(1.67),
    _13 = hp(1.55),
    _12 = hp(1.43),
    _11 = hp(1.31),
    _10 = hp(1.19),
    _8 = hp(0.95),
    _6 = hp(0.71),
}

// based on iphone 5s's scale
const scale = SIZE.WIDTH / 320;



export {
    FONTS,
    SIZE,
    COLORS,
    COMMON_STYLES,
    hp,
    wp,
    FONT_SIZE
}