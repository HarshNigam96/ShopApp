import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'

const CartItems = (props) => {
    const [toggle, setToggle] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.detailContainer}>
                <View style={styles.basicDetails}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={styles.img} source={{ uri: props.img }} />
                        <Text numberOfLines={1} style={styles.nameTxt}>{props.name}</Text>
                    </View>
                    <Text style={styles.price}>{props.price} $</Text>
                    <TouchableOpacity onPress={props.onRemove}>
                        <Ionicons name="trash-bin-outline" size={22} color="red" />
                    </TouchableOpacity>
                </View>
                {toggle ? <View>
                    <Text style={styles.descrip}>{props.description}</Text>
                    <View style={{ paddingVertical: hp(1), flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: 'black' }}>Quantity : {props.qty}</Text>
                        <TouchableOpacity onPress={props.onPress} style={styles.touchable}>
                            <Text style={{ color: "white" }}>order now</Text>
                        </TouchableOpacity>
                    </View>
                </View> : null}
            </View>
            <TouchableOpacity onPress={() => setToggle(!toggle)} style={{ padding: 5, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, alignItems: "center", borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1 }}>
                <Text>{toggle ? "Hide Detail" : "Show Detail"}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: wp(10),
    },
    detailContainer: {
        backgroundColor: "#ccc",
        paddingHorizontal: wp(5),
        borderTopRightRadius: wp(5),
        borderTopLeftRadius: wp(5)
    },
    basicDetails: {
        padding: hp(1),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    img: {
        height: wp(10),
        width: wp(10),
        borderRadius: 100
    },
    nameTxt: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: wp(3),
        width: wp(20)
    },
    price: {
        marginRight: wp(10),
        color: "green",
        fontWeight: "700"
    },
    descrip: {
        lineHeight: hp(3),
        fontSize: 16
    },
    touchable: {
        backgroundColor: "tomato",
        padding: hp(0.5),
        borderRadius: 12
    }
})
export default CartItems