
import React, {Component} from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';

import Nav from './src/nav/nav';
import Generate from './src/generate/generate'
import ItemList from './src/generate/itemsList';
import Input from './src/input/input'
import PickerItem from './src/picker/picker'


export default class App extends Component {

  state ={
    nameOfNav: 'first app',
    randomNumber: [1,2, 3 ]
  }

  addRandomNumber = () => {
    const number = Math.floor(Math.random() * 101);

    this.setState((prevState) => {
      return {
        randomNumber: [...prevState.randomNumber, number]
      }
    })
  }

  removeNumber = (i) => {
    const newRandomNumber = this.state.randomNumber.filter((item, index) => {
      return i !== index
    })
    this.setState({
      randomNumber: newRandomNumber
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <Nav nameOfNav={this.state.nameOfNav}/>
          <ScrollView style={{width: '100%'}}>
            <View style={styles.wrapper}>
                <Generate addRandomNumber={this.addRandomNumber} />
                <ItemList randomNumber={this.state.randomNumber}
                          removeNumber={this.removeNumber}/>
                <PickerItem/>
                {/* <Input/> */}
            </View>
              
          </ScrollView>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 10,
  }
});
