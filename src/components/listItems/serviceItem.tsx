import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import { IServiceItem } from '../../models/appModels'
import { COLORS, hp, COMMON_STYLES, FONT_SIZE, FONTS } from '../../assets/stylesGuide';
import { IMAGES } from '../../assets/images';
import { BodyText } from '..';
import { Bookmark, BookmarkFilled, Star } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { appStateSelectors, useApp } from '../../states/app';
import { SCREENS } from '../../assets/constants';
import useApi from '../../hooks/useApi';

interface serviceItemProps {
    service: IServiceItem;
}

const ServiceItem: FC<serviceItemProps> = ({
    service
}) => {
    const navigation = useNavigation()
    const setSelectedService = useApp(appStateSelectors.setSelectedService)
    const { handleFavorite, isFavorite } = useApi()

    const handleSelect = () => {
        setSelectedService(service)
        navigation.navigate(SCREENS.SERVICE_DETAILS)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleSelect()}
            style={styles.main}>
            <>
                <Image
                    source={IMAGES.DUMMY_WORKER}
                    style={styles.avatar}
                />

                <View style={styles.context}>

                    <View style={styles.row}>
                        <BodyText style={styles.name}>{service.name}</BodyText>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleFavorite(service.id)}
                        >
                            {
                                isFavorite(service.id) ?
                                    <BookmarkFilled width={hp(2.8)} height={hp(2.8)} />
                                    :
                                    <Bookmark width={hp(2.8)} height={hp(2.8)} />
                            }
                        </TouchableOpacity>
                    </View>

                    <BodyText style={styles.title} numberOfLines={1}>{service.serviceName}</BodyText>
                    <BodyText style={styles.title}>₦ {service.price}</BodyText>

                    <View style={styles.rating}>
                        <Star width={hp(1.4)} height={hp(1.4)} />
                        <BodyText style={styles.ratingTxt}> {service.rating} | {service.reviewsCount} reviews</BodyText>

                    </View>

                </View>
            </>
        </TouchableOpacity>
    )
}

export default ServiceItem

const styles = StyleSheet.create({
    main: {
        width: '98%',
        alignSelf: 'center',
        borderRadius: hp(1.5),
        marginBottom: hp(2),
        marginTop: 2,
        flexDirection: 'row',
        padding: hp(1.2),
        backgroundColor: COLORS.BACKGROUND,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    avatar: {
        width: hp(11.8),
        height: hp(11.8),
        borderRadius: hp(1),
    },
    context: {
        flex: 1,
        marginLeft: hp(1.2),
        justifyContent: 'space-around'
    },
    row: {
        ...COMMON_STYLES.flexRowSpaceBetween,
    },
    name: {
        marginVertical: 0,
        fontSize: FONT_SIZE._12
    },
    title: {
        marginVertical: 0,
        fontSize: FONT_SIZE._16,
        textAlign: 'left',
        fontFamily: FONTS.MEDIUM
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    ratingTxt: {
        marginVertical: 0,
        fontSize: FONT_SIZE._10,

    }
})