import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Bookmark, BookmarkFilled, Location, Star } from '../../assets/icons'
import { IMAGES } from '../../assets/images'
import { FONTS, FONT_SIZE, hp } from '../../assets/stylesGuide'
import { AppHeader, BodyText, ChipButton, GalleryView, Layout, ReviewItem } from '../../components'
import useApi from '../../hooks/useApi'
import { IServiceDetail, IServiceItem } from '../../models/appModels'
import { appStateSelectors, useApp } from '../../states/app'
import { styles } from './styles'
import { REVIEW_FILTER } from '../../data'

const ServiceDetailScreen = () => {
  const navigation = useNavigation()
  const selectedService = useApp(appStateSelectors.selectedService) as IServiceItem
  const { getData, handleFavorite, isFavorite } = useApi()
  const [details, setdetails] = useState<IServiceDetail | null>(null)
  const [selectedFilter, setselectedFilter] = useState('All')

  useEffect(() => {
    const data = getData(selectedService.about, selectedService?.reviewsCount) as IServiceDetail
    setdetails(data)
  }, [selectedService?.id])

  const filterReviews = () => {
    return selectedFilter == "All" ?
      details?.reviews
      :
      details?.reviews?.filter((x: any) => x.rating == selectedFilter)
  }


  return (
    <Layout fixed={true} >
      <AppHeader
        title='Details'
      />
      
      <Layout fixed={true} containerStyle={styles.main}>

        <FlatList
          ListHeaderComponent={() => (
            <>
              <GalleryView
                images={details?.images || []}
              />

              {/* USER DETAILS */}
              <View style={styles.row}>
                <BodyText style={styles.title}>{selectedService.serviceName}</BodyText>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => handleFavorite(selectedService.id)}
                >
                  {
                    isFavorite(selectedService.id) ?
                      <BookmarkFilled width={hp(2.8)} height={hp(2.8)} />
                      :
                      <Bookmark width={hp(2.8)} height={hp(2.8)} />
                  }
                </TouchableOpacity>
              </View>


              <View style={styles.userContainer}>
                <Image source={IMAGES.DUMMY_WORKER} style={styles.avatar} />
                <BodyText style={styles.name}>{selectedService.name}</BodyText>
                <View style={styles.line}></View>

                <Star width={hp(1.4)} height={hp(1.4)} />
                <BodyText style={styles.reviewTxt}>{`  ${selectedService.rating}  (${selectedService.reviewsCount} reviews)`}</BodyText>
              </View>

              {/* ADDRESS */}
              <View style={styles.userContainer}>
                <Location width={hp(2.4)} height={hp(2.4)} />
                <BodyText style={styles.address}>255 Grand Park Avenue, Indore </BodyText>
              </View>


              {/* PRICE */}
              <View style={styles.userContainer}>
                <BodyText style={styles.price}>₦ {selectedService.price}</BodyText>
                <BodyText style={{ ...styles.address, marginVertical: 0, }}>(Floor price)</BodyText>
              </View>

              <View style={styles.separator}></View>

              {/* ABOUT ME */}
              <BodyText style={styles.subHeading}>About me</BodyText>
              <BodyText style={styles.desc}>{details?.description}</BodyText>

              <View style={styles.separator}></View>

              {/* REVIEWS */}
              <View style={styles.row1}>

                <View style={styles.rowContainer}>
                  <Star width={hp(1.6)} height={hp(1.6)} />
                  <BodyText style={styles.ratingTxt}>{`  ${selectedService.rating}  (${selectedService.reviewsCount} reviews)`}</BodyText>
                </View>

                <BodyText style={{ ...styles.ratingTxt, fontFamily: FONTS.MEDIUM }}>See All</BodyText>
              </View>

              {/* REVIEW FILTER */}

              <View style={styles.filterContainer}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={REVIEW_FILTER}
                  renderItem={({ item }) => (
                    <ChipButton
                      title={item?.title}
                      isSelected={selectedFilter == item.title}
                      onPress={() => setselectedFilter(item.title)}
                    />
                  )}
                  ItemSeparatorComponent={() => (<View style={{ width: hp(1.2) }}></View>)}
                />
              </View>
            </>
          )}
          showsVerticalScrollIndicator={false}
          data={filterReviews()}
          renderItem={({ item }) => (
            <ReviewItem
              review={item}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />

      </Layout>

    </Layout>
  )
}

export default ServiceDetailScreen
