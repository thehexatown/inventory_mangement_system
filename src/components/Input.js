import React from 'react';
import {View} from 'react-native';
import {wp} from '../helpers/Responsiveness';
import Colors from '../config/Colors';
import InputField from './Basics/InputField';
import ResponsiveText from './Basics/RText';
import Fonts from '../config/Fonts';

export default class Input extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ResponsiveText style={styles.title}>{this.props.title}</ResponsiveText>
        <InputField {...this.props} style={styles.text} />
      </View>
    );
  }
}

const styles = {
  container: {
    marginVertical: wp(1.5),
  },
  title: {
    fontSize: 5,
    fontFamily: Fonts.SemiBold,
    marginVertical: wp(1),
    marginBottom: wp(3)
  },
};
