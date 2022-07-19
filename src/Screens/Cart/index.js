import React from 'react';
import {FlatList, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import CartItems from '../../Components/CartItems';

const CartScreen = () => {
  const Cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const DeleteItem = item => {
    let removeItem = Cart.filter(val => val.id !== item.id);
    dispatch({type: 'ON_REMOVE', payload: removeItem});
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Cart}
        renderItem={({item, index}) => (
          <View style={{marginTop: index === 0 ? 0 : hp(3)}}>
            <CartItems
              props={item}
              onRemove={() => DeleteItem(item)}
              onPress={() => dispatch({type: 'ORDER_NOW', payload: item.id})}
            />
          </View>
        )}
      />
    </View>
  );
};

export default CartScreen;
