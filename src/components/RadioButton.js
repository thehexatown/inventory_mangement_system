import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {wp} from '../helpers/Responsiveness';
import Colors from '../config/Colors';
import ResponsiveText from './Basics/RText';

export default class RadioButton extends React.Component {
  render() {
    const {active, setActive, text} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={()=>setActive(!active)}>
        <View
          style={[styles.circle, active ? styles.active : styles.inactive]}
        />
        {text && <ResponsiveText style={styles.title}>{text}</ResponsiveText>}
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: wp(2),
  },
  circle: {
    width: wp(5),
    height: wp(5),
    borderRadius: wp(10),
    borderColor: Colors.white,
    borderWidth: 1,
    marginRight: wp(2),
  },
  active:{
    backgroundColor: Colors.white,
  },
  inactive:{
    backgroundColor: Colors.primary,
  },
  title: {
    color: Colors.dull,
  },
};
