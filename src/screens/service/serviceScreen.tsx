import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { SearchIcon } from '../../assets/icons'
import { COLORS, hp } from '../../assets/stylesGuide'
import { AppHeader, If, Layout, PrimaryInput, ServiceItem } from '../../components'
import servicesData from '../../data/services.json'
import { IMenuItem, IServiceItem } from '../../models/appModels'
import { appStateSelectors, useApp } from '../../states/app'
import { styles } from './styles'

const ServiceScreen = () => {
  const navigation = useNavigation()
  const selectedCategory = useApp(appStateSelectors.selectedCategory) as IMenuItem
  const [dataSource, setdataSource] = useState<IServiceItem[]>([])
  const [isSearching, setisSearching] = useState(false)
  const [searchValue, setsearchValue] = useState('')

  useEffect(() => {
    const filtered = servicesData?.filter((x) => x.serviceId == selectedCategory?.id)
    setdataSource(filtered)
  }, [selectedCategory?.id])

  const filteredServices = () => {
    if (searchValue == '') {
      return dataSource
    } else {
      const val = searchValue.toUpperCase()
      return dataSource?.filter((x) => x.serviceName?.toUpperCase()?.includes(val) || x.name?.toUpperCase()?.includes(val))
    }
  }

  const handleSearchPress = () => {
    setisSearching(!isSearching)
    setsearchValue('')
  }

  return (
    <Layout fixed={true} >
      <AppHeader
        title={selectedCategory?.title}
        leftIcon={isSearching ? <AntDesign name='close' size={hp(2.8)} color={COLORS.SECONDARY} /> : <SearchIcon width={hp(2.8)} height={hp(2.8)} />}
        onRightIconPress={() => handleSearchPress()}
      />

      <If condition={isSearching == true}>
        <PrimaryInput
          placeholder='Search'
          value={searchValue}
          onChange={(txt) => setsearchValue(txt)}
        />
      </If>

      <Layout fixed={true} containerStyle={styles.main}>
        <FlatList
          data={filteredServices()}
          renderItem={({ item }) => <ServiceItem service={item} />}
        />


      </Layout>
    </Layout>
  )
}

export default ServiceScreen
