//import libraries
import React from 'react';
import { Text, View } from 'react-native';

//make Component
const Header = ({ headerText }) => {
  const { textStyles, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyles}>{headerText}</Text>
    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyles: {
    fontSize: 20
  }
};
//make component to other part of the project
export { Header };
