import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { hp, COMMON_STYLES, COLORS, FONT_SIZE } from '../assets/stylesGuide'
import If from './if'
import BodyText from './bodyText'

interface galleryViewProps {
    images: string[]
}

const GalleryView: FC<galleryViewProps> = ({ images = [] }) => {

    const firtsImage = images?.length > 0 ? images[0] : null

    return (
        images?.length > 0 ?
            <View style={styles.main}>
                <Image
                    source={{ uri: firtsImage }}
                    style={styles.mainImg}
                />

                <View style={styles.imgLine}>
                    {
                        images.slice(1, 4)?.map((img: string, index: number) => (
                            <ImageBackground
                                source={{ uri: img }}
                                style={styles.smallImg}
                                imageStyle={styles.smallImg}
                            >
                                <If condition={index == 2 && images?.length > 4}>
                                    <View style={styles.overlay}>
                                        <BodyText style={styles.imgCount}>+{images.length - 4}</BodyText>
                                    </View>
                                </If>

                            </ImageBackground>
                        ))
                    }

                </View>
            </View >
            :
            null

    )
}

export default GalleryView

const styles = StyleSheet.create({
    main: {
        width: '100%',
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    mainImg: {
        height: hp(23),
        flex: 1,
        marginRight: hp(1.5),
        resizeMode: 'cover',
        borderRadius: hp(1.9),
        backgroundColor: COLORS.DISABLED
    },
    imgLine: {
        height: hp(23),
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    smallImg: {
        width: hp(7.6),
        height: hp(6.7),
        borderRadius: hp(1.9),
        resizeMode: 'cover',
        overflow: 'hidden',
        backgroundColor: COLORS.DISABLED
    },
    overlay: {
        backgroundColor: COLORS.BLACK_OPACITY,
        flex: 1,
        borderRadius: hp(1.9),
        ...COMMON_STYLES.center_
    },
    imgCount: {
        fontSize: FONT_SIZE._18,
        color: COLORS.WHITE
    }
})