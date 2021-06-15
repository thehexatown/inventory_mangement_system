import React from 'react';
import {TouchableOpacity} from 'react-native';
import {wp} from '../helpers/Responsiveness';
import Colors from '../config/Colors';
import ResponsiveText from './Basics/RText';

export default class Button extends React.Component {
  render() {
    const {inverted, style} = this.props;

    const backgroundColor = inverted ? Colors.primary : Colors.secondary;

    return (
      <TouchableOpacity
        style={[styles.container, {backgroundColor}, style]}
        onPress={this.props.onPress}>
        <ResponsiveText style={styles.title}>
          {this.props.children}
        </ResponsiveText>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    marginVertical: wp(2),
    paddingVertical: wp(1),
    borderRadius: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.dull,
    borderWidth: 2,
  },
  title: {
    fontSize: 5,
    marginVertical: wp(2),
  },
};
