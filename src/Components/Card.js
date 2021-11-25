import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Card = (props) => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <ImageBackground
                source={{ uri: props.img }}
                imageStyle={styles.imgStyle}
                style={styles.imgBg}>
            </ImageBackground>
            <View style={styles.infoContainer}>
                <View>
                    <Text numberOfLines={1} style={styles.productNameTxt}>{props.name}</Text>
                    <Text>{props.price} $</Text>
                </View>
                <TouchableOpacity onPress={props.onPress}>
                    <Ionicons style={{ marginTop: hp(0.8) }} size={25} name={props.iconName} color={props.iconColor} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imgStyle: {
        borderTopLeftRadius: wp(5),
        borderTopRightRadius: wp(5),
    },
    imgBg: {
        width: wp(34),
        height: hp(20),
    },
    infoContainer: {
        width: wp(34),
        height: hp(6),
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: "space-between",
        paddingHorizontal: wp(4),
        backgroundColor: "#ccc",
        flexDirection: "row",
    },
    productNameTxt: {
        fontWeight: "bold",
        color: "black",
        width: wp(20)
    }
})
export default Card