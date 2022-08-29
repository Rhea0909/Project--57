import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <Text style={{marginTop:50,color: 'white',
	textAlign: 'center', 
	fontWeight: 'bold',
	fontSize: 50,
	backgroundColor: 'pink',width: 300,
  height: 300,
  /*Add the border radius for left right of top and bottom*/
  textShadowRadius: 'left,right, bottom',
 /*Add font as Times New Roman*/ 
 fontStyle: 'Times New Roman',
    /*Add the shadowcolor */
    
  textShadowOffset:{width: 10, height: 10},
    textShadowRadius:10
    ,
    }}>HAPPY BIRTHDAY MY DEAR FRIEND:)</Text>
  
    );
  }
}


