import React, {Component} from 'react';
import {TextInput,View, Button, StyleSheet,Text,ScrollView} from 'react-native';



class Input extends Component {

    state = {
        inputValue: '',
        name:['Andrey', 'Vita', 'Kate', 'Mark']
    }

    newValue = (text) => {
        this.setState({
            inputValue: text
        })
    }
    addNewName = () => {
        this.setState(prevState => {
            return {
                inputValue: '',
                name: [...prevState.name, prevState.inputValue]
            }
        })
    }

    render() {
        return (
                <View style={styles.conteiner}>
                    <TextInput
                        value={this.state.inputValue}
                        style={styles.input}
                        maxLength={50}
                        multiline={true}
                        onChangeText={this.newValue}
                        />
                    <Button
                        title='Add new users'
                        onPress={this.addNewName}/>


                        {this.state.name.map((item, i) =>(
                            <Text key={i} style={styles.user}>{item}</Text>
                        ))}
                </View>
            
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: 'grey',
        borderBottomColor: 'black',
        borderBottomWidth: 3,
    },
    conteiner: {
        width: '95%',
    },
    user : {
        padding: 10,
        width: '100%',
        backgroundColor:'green',
        borderColor: 'grey',
        borderWidth: 1,
        marginTop: 10,
    }
})

export default Input;