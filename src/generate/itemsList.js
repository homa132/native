import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ItemList = (props) => {


    return props.randomNumber.map((item, i) => (
                    <View key={i} style={{width:'100%'}}>
                        <TouchableOpacity 
                            style={styles.itemlist}  
                            
                            onPress={() => props.removeNumber(i)}>
                            <View >
                                <Text >{item}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                ))
            
    
}

const styles = StyleSheet.create({
    itemlist: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'yellow',
        padding: 10,
        marginTop: 10,
    }
})

export default ItemList;