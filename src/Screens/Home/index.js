import React from 'react';
import {View, FlatList} from 'react-native';
import Card from '../../Components/Card';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = props => {
  const cartData = useSelector(state => state);
  const data = useSelector(state => state.data);

  const dispatch = useDispatch();
  const onAddFav = item => {
    if (cartData.cart.filter(val => val.id === item.id).length === 0) {
      dispatch({type: 'ON_ADD', payload: item});
    } else {
      let rmv = cartData.cart.filter(val => val.id !== item.id);
      dispatch({type: 'ON_REMOVE', payload: rmv});
    }
  };
  return (
    <View
      style={{flex: 1, backgroundColor: 'white', paddingHorizontal: wp(10)}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={({item, index}) => (
          <View
            style={{
              marginLeft: index % 2 != 0 ? wp(10) : 0,
              marginTop: hp(3),
              marginBottom: hp(1),
            }}>
            <Card
              props={item}
              onClick={() => props.navigation.navigate('Detail', {item})}
              onPress={() => onAddFav(item)}
              add_cart={
                cartData.cart.filter(ele => ele.id == item.id).length === 0
                  ? null
                  : true
              }
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
