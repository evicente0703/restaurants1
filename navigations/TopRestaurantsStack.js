import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopRestaurants from '../SCREENS/TopRestaurants'

const   Stack = createStackNavigator()

export default function TopRestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="top-restaurants"
                component={TopRestaurants}
                options ={{ title: "Los Majores Restaurantes" }}
            />
        </Stack.Navigator>
    )
}
