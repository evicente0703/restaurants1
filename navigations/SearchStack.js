import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../SCREENS/Search'

const   Stack = createStackNavigator()

export default function SerchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="search"
                component={Search}
                options ={{ title: "Buscar" }}
            />
        </Stack.Navigator>
    )
}