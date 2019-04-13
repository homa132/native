import React from 'react';
import {View, Text,StyleSheet, TouchableWithoutFeedback} from 'react-native'


const generate = (props) => (
    <View style={{width:'100%'}}>
        <TouchableWithoutFeedback
            onPress={() => props.addRandomNumber()}>
            <View style={styles.generate}>
                <Text style={{color:'white'}}>generate number</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
    
    
)

const styles = StyleSheet.create({
    generate: {
        alignItems:'center',
        padding: 10,
        backgroundColor: 'blue',
        width: '100%',
        borderBottomColor: 'yellow',
        borderBottomWidth: 5,
        marginTop: 10,
    }
})

export default generate;