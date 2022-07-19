import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartItems = props => {
  const [toggle, setToggle] = useState(false);
  const {description, img, price, title} = props.props;
  const {onPress, onRemove} = props;
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.basicDetails}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.img} source={{uri: img}} />
            <Text numberOfLines={1} style={styles.nameTxt}>
              {title}
            </Text>
          </View>
          <Text style={styles.price}>{price} $</Text>
          <TouchableOpacity onPress={onRemove}>
            <Ionicons name="trash-bin-outline" size={22} color="red" />
          </TouchableOpacity>
        </View>
        {toggle ? (
          <View>
            <Text style={styles.descrip}>{description}</Text>
            <View
              style={{
                paddingVertical: hp(1),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: 'black'}}>Quantity : {props.qty}</Text>
              <TouchableOpacity onPress={onPress} style={styles.touchable}>
                <Text style={{color: 'white'}}>order now</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
      <TouchableOpacity
        onPress={() => setToggle(!toggle)}
        style={{
          padding: 5,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          alignItems: 'center',
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderBottomWidth: 1,
        }}>
        <Text>{toggle ? 'Hide Detail' : 'Show Detail'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(10),
  },
  detailContainer: {
    backgroundColor: '#ccc',
    paddingHorizontal: wp(5),
    borderTopRightRadius: wp(5),
    borderTopLeftRadius: wp(5),
  },
  basicDetails: {
    padding: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    height: wp(10),
    width: wp(10),
    borderRadius: 100,
  },
  nameTxt: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: wp(3),
    width: wp(20),
  },
  price: {
    marginRight: wp(10),
    color: 'green',
    fontWeight: '700',
  },
  descrip: {
    lineHeight: hp(3),
    fontSize: 16,
  },
  touchable: {
    backgroundColor: 'tomato',
    padding: hp(0.5),
    borderRadius: 12,
  },
});
export default CartItems;
