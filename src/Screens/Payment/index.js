import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import OrderList from '../../Components/OrderList'
import { useSelector, useDispatch } from 'react-redux'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Payment = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => {
        return {
            total: state.paymentArr.reduce((sum, item) => sum + item.price * item.qty, 0),
            orderList: state.paymentArr
        }
    })
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1, }}>
                <View style={styles.title}>
                    <Text style={styles.titleTxt}>ORDER NOW</Text>
                </View>
                <View style={styles.tableHeading}>
                    <Text style={styles.tableHeadingTxt}>Product Name</Text>
                    <Text style={styles.tableHeadingTxt}>Quantity</Text>
                    <Text style={styles.tableHeadingTxt}>Price</Text>
                    <Text style={styles.tableHeadingTxt}>Remove</Text>
                </View>
                <FlatList
                    data={data.orderList}
                    renderItem={({ item, index }) =>
                        <OrderList
                            onDelete={() => dispatch({ type: "DELETE", payload: item.id })}
                            increase={() => dispatch({ type: "INCREASE", payload: item.id })}
                            decrease={() => dispatch({ type: "DECREASE", payload: item.id })}
                            name={item.title}
                            qty={item.qty}
                            price={item.price} />}
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>Total : {data.total} $</Text>
                <TouchableOpacity style={styles.touchable} onPress={() => { }}>
                    <Text style={styles.btnTxt}>Proceed To Pay</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    title: { alignItems: "center" },
    titleTxt: {
        fontSize: 28,
        color: "black",
        fontWeight: "bold"
    },
    tableHeading: {
        borderBottomWidth: 2,
        marginHorizontal: wp(1),
        padding: wp(3),
        flexDirection: "row",
        justifyContent: "space-between"
    },
    tableHeadingTxt: { color: "black", fontSize: 16 },
    touchable: {
        padding: hp(2),
        backgroundColor: "tomato",
        alignItems: "center",
        marginTop: hp(1)
    },
    btnTxt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
})

export default Payment