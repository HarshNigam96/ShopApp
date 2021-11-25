import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './root/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()


const AuthNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Auth" component={HomeStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNav