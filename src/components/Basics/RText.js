import React from 'react';
import {Text} from 'react-native';
import {wp} from '../../helpers/Responsiveness';
import Colors from '../../config/Colors';
import Fonts from '../../config/Fonts';

export default class ResponsiveText extends React.Component {
  render() {
    let fontSize = wp(4);
    const {style, children} = this.props;
    if (style && style.fontSize) {
      fontSize = wp(style.fontSize);
    }

    return (
      <Text {...this.props} style={[styles.text, style, {fontSize}]}>
        {children}
      </Text>
    );
  }
}

const styles = {
  text: {
    color: Colors.primaryText,
    fontSize: 15,
    fontFamily: Fonts.Medium,
  },
};
