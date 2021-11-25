import React from 'react';
import {View, FlatList} from 'react-native';
import Card from '../../Components/Card';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = props => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();


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
              name={item.title}
              price={item.price}
              img={item.img}
              iconName={item.inCart ? 'cart' : 'cart-outline'}
              iconColor={item.inCart ? 'green' : 'black'}
              onClick={() => props.navigation.navigate('Detail', {item})}
              onPress={() =>
                item.inCart
                  ?  dispatch({type: 'ON_REMOVE', payload: item.id})
                  : dispatch({type: 'ON_ADD', payload: item.id})
              }
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
