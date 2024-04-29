import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { SCREENS } from '../../assets/constants'
import { ActionButton, AppHeader, Layout } from '../../components'
import { SERVICES_LIST } from '../../data'
import { IMenuItem } from '../../models/appModels'
import { appStateSelectors, useApp } from '../../states/app'
import { styles } from './styles'

const HomeScreen = () => {
  const navigation = useNavigation()
  const setSelectedCategory = useApp(appStateSelectors.setSelectedCategory)

  const handleSelect = (service: IMenuItem) => {
    setSelectedCategory(service)
    navigation.navigate(SCREENS.SERVICES)
  }

  return (
    <Layout fixed={true} >
      <AppHeader
        title='All Services'
      />

      <Layout fixed={true} containerStyle={styles.main}>
        {
          SERVICES_LIST.map((item: IMenuItem, index: number) => (
            <View
              key={index}
              style={styles.actionContainer}
            >
              <ActionButton
                title={item.title}
                icon={item.icon}
                onPress={() => handleSelect(item)}
              />
            </View>
          ))
        }

      </Layout>
    </Layout>
  )
}

export default HomeScreen
