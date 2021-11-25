import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import CartItems from '../../Components/CartItems'
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CartScreen = () => {
  const Cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const removeCart = (id) => {
    Cart.map((val, i) => {
      if (val.id === id) {
        val.inCart = false
        dispatch({ type: "ON_REMOVE", payload: val })
      } else {
        return val;
      }
    })
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Cart}
        renderItem={({ item, index }) =>
          <View style={{ marginTop: index === 0 ? 0 : hp(3) }}>
            <CartItems
              onPress={() =>  dispatch({ type: "ORDER_NOW", payload: item.id })}
              img={item.img}
              name={item.title}
              price={item.price}
              description={item.description}
              onRemove={() => dispatch({ type: "ON_REMOVE", payload: item.id })}
            />
          </View>
        }
      />
    </View>
  )
}

export default CartScreen