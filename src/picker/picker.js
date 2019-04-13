
import React, {Component} from 'react';
import { StyleSheet, Picker,View,ProgressBarAndroid} from 'react-native';

class PickerItems extends Component {

    state = {
        language: ''
    }

    render(){
        return (
            <View style={{width: '100%'}}>
                <Picker
                    selectedValue={this.state.language}
                    style={{width: '100%'}}
                    onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})}
                >
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="Ukraine" value="ukraine" />

                </Picker>
                
            </View>
            
        )
    }
}

export default PickerItems