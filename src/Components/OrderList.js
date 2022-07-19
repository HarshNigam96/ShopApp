import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
const OrderList = props => {
  return (
    <View style={styles.container}>
      <Text style={{width: wp(15)}}>{props.name}</Text>
      <View style={styles.qtyContainer}>
        <TouchableOpacity style={styles.qtyBtn} onPress={props.increase}>
          <Text style={{fontSize: 20}}>+</Text>
        </TouchableOpacity>
        <Text style={{color: 'red', fontWeight: 'bold', padding: wp(1)}}>
          {' '}
          {props.qty}{' '}
        </Text>
        <TouchableOpacity style={styles.qtyBtn} onPress={props.decrease}>
          <Text style={{fontSize: 20}}>-</Text>
        </TouchableOpacity>
      </View>
      <Text>{props.price} $</Text>
      <TouchableOpacity onPress={props.onDelete}>
        <Entypo name="cross" size={40} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(2),
    padding: hp(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qtyContainer: {
    flexDirection: 'row',
    width: wp(12),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qtyBtn: {
    borderWidth: 1,
    width: wp(7),
    alignItems: 'center',
  },
});
export default OrderList;
