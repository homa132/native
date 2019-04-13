import React from 'react';
import {View, Text,StyleSheet} from 'react-native'


const nav = (props) => (
    <View style={styles.nav}>
        <Text style={{color:'yellow'}}>{props.nameOfNav}</Text>
    </View>
)

const styles = StyleSheet.create({
    nav: {
        alignItems:'center',
        padding: 10,
        backgroundColor: 'grey',
        width: '100%',
        borderBottomColor: 'red',
        borderBottomWidth: 2
    }
})

export default nav;