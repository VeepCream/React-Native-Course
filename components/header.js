import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
 
// สร้าง Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
 
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
 
Header.PropTypes = {
  headerText: PropTypes.string.isRequired
};
 
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8'
  },
  textStyle: {
    fontSize: 20
  }
};
 
export default Header;