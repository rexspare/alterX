import { StyleSheet, Image, View } from 'react-native'
import React, { FC } from 'react'
import { IReview } from '../../models/appModels'
import { hp, COMMON_STYLES, COLORS, FONTS, FONT_SIZE } from '../../assets/stylesGuide'
import BodyText from '../bodyText'
import ChipButton from '../chipButton'
import { Clock } from '../../assets/icons'
import { unixTimeAgo } from '../../utils/myUtils'

interface reviewItemProps {
    review: IReview
}

const ReviewItem: FC<reviewItemProps> = ({ review }) => {
    return (
        <View style={styles.main}>

            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={{ uri: review.image }} style={styles.avatar} />
                    <BodyText style={styles.name}>{review.name}</BodyText>
                </View>

                <ChipButton
                    title={review.rating.toString()}
                    isSelected={false}
                    onPress={() => { }}
                    style={styles.chip}
                    textStyle={styles.chipTxt}
                    size={1}
                />
            </View>

            <BodyText style={styles.review}>{review.review}</BodyText>

            <View style={styles.rowContainer}>
                <Clock width={hp(2.1)} height={hp(2.1)} />
                <BodyText style={styles.time}>{unixTimeAgo(review.date)}</BodyText>
            </View>
        </View>
    )
}

export default ReviewItem

const styles = StyleSheet.create({
    main: {

    },
    container: {
        width: '100%',
        ...COMMON_STYLES.flexRowSpaceBetween
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    avatar: {
        width: hp(5.26),
        height: hp(5.26),
        borderRadius: hp(5.26),
        backgroundColor: COLORS.DISABLED
    },
    name: {
        fontFamily: FONTS.MEDIUM,
        fontSize: FONT_SIZE._16,
        marginVertical: 0,
        marginLeft: 10
    },
    chip: {
        width: hp(6.3),
        height: hp(3.1)
    },
    chipTxt: {
        fontSize: FONT_SIZE._10,
        marginLeft: 3
    },
    review: {
        fontSize: FONT_SIZE._14,
        color: COLORS.SECONDARY,
        textAlign: 'left'
    },
    time: {
        fontSize: FONT_SIZE._12,
        color: COLORS.SECONDARY,
        marginLeft: 4
    }

})