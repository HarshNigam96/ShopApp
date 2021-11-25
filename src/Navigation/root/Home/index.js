import React, {useEffect} from 'react';
import TabNav from '../BottomTab/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../../../Screens/Detail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import OrderList from '../../../Components/OrderList';
import Payment from '../../../Screens/Payment';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();
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
            <TouchableOpacity
              onPress={() =>
                route.params.item.inCart
                  ? dispatch({type: 'ON_REMOVE', payload: route.params.item.id})
                  : dispatch({type: 'ON_ADD', payload: route.params.item.id})
              }>
              <Ionicons
                name={route.params.item.inCart ? 'cart' : 'cart-outline'}
                size={28}
                color={route.params.item.inCart ? 'green' : 'black'}
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
