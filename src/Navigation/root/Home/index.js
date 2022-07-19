import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import DetailScreen from '../../../Screens/Detail';
import Payment from '../../../Screens/Payment';
import TabNav from '../BottomTab/index';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const Cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const onClick = item => {
    if (Cart.filter(val => val.id === item.id).length === 0) {
      dispatch({type: 'ON_ADD', payload: item});
    } else {
      let remove = Cart.filter(val => val.id != item.id);
      dispatch({type: 'ON_REMOVE', payload: remove});
    }
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={TabNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({route}) => ({
          headerTitle: route.params.item.title,
          headerRight: () => (
            <TouchableOpacity onPress={() => onClick(route.params.item)}>
              <Ionicons
                name={
                  Cart.filter(val => val.id === route.params.item.id).length ===
                  0
                    ? 'cart-outline'
                    : 'cart'
                }
                size={28}
                color={
                  Cart.filter(val => val.id === route.params.item.id).length ===
                  0
                    ? 'black'
                    : 'green'
                }
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
};

export default HomeStack;
