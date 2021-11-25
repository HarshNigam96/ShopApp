import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
const DetailScreen = props => {
  const {name, img, price, description} = props.route.params.item;
  const dispatch = useDispatch();
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flex: 1}}>
        <View>
          <Image source={{uri: img}} style={styles.img} />
        </View>
        <View style={styles.titleContainer}>
          <View style={{marginTop: hp(3)}}>
            <Text style={{fontSize: 16}}>{price} $</Text>
          </View>
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.productDescription}>Product Description</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={{lineHeight: hp(4)}}>{description}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() =>
          dispatch({type: 'ORDER_NOW', payload: props.route.params.item.id})
        }>
        <Text style={styles.btnTxt}>Order Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  img: {
    height: hp(50),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  headerTitle: {marginTop: hp(1)},
  descriptionContainer: {
    backgroundColor: '#ccc',
    padding: hp(3),
    marginTop: hp(2),
  },
  productDescription: {
    alignSelf: 'center',
    fontSize: 20,
    textAlign: 'justify',
  },
  touchable: {
    padding: hp(2),
    backgroundColor: 'tomato',
    alignItems: 'center',
    marginTop: hp(1),
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default DetailScreen;
