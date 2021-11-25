import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity, Text } from 'react-native'
import HomeScreen from '../../../Screens/Home'
import CartScreen from '../../../Screens/Cart'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux';

const Tab = createBottomTabNavigator()

const TabNav = (props) => {
    const count = useSelector(state => state.cart.length)
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: "#ccc"
            }
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerRight: () =>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Payment")}>
                        <Ionicons name="md-reorder-two-outline" size={35} />
                    </TouchableOpacity>,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, focused }) =>
                    <Ionicons color="black" name={focused ? "md-home-sharp" : "md-home-outline"} size={25} />
            }} />
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarShowLabel: false,
                tabBarBadge: count === 0 ? null : count,
                tabBarIcon: ({ color, focused }) => <Ionicons color="black" name={focused ? "cart" : "cart-outline"} size={30} />
            }} />
        </Tab.Navigator>
    )
}

export default TabNav