import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../assets/constants';
import { HomeScreen, ServiceDetailScreen, ServiceScreen } from '../screens';


export type InitialNavigationStackParamList = {
    [SCREENS.HOME]: undefined;
    [SCREENS.SERVICES]: undefined;
    [SCREENS.SERVICE_DETAILS]: undefined;
};

const Stack = createNativeStackNavigator<InitialNavigationStackParamList>();


const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                animation: 'slide_from_right'
            }}>
                <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
                <Stack.Screen name={SCREENS.SERVICES} component={ServiceScreen} />
                <Stack.Screen name={SCREENS.SERVICE_DETAILS} component={ServiceDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Root


