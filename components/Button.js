import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Button ({ children, onPress }) {
  return (
    <TouchableOpacity
        style={styles.submitBtn}
        onPress={onPress}>
        <Text style={styles.submitBtnText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    submitBtn: {
        backgroundColor: '#316ac6',
        padding: 10,
        borderRadius: 7,
        height: 40,
        marginLeft: 35,
        marginRight: 35,
    },
    submitBtnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },

});



