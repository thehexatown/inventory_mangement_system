import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, TextInput, View} from 'react-native';
import Colors from '../../config/Colors';
import Fonts from '../../config/Fonts';
import {wp} from '../../helpers/Responsiveness';

const InputField = props => {
  const [active, setActive] = useState(false);

  function onFocus() {
    setActive(true);
    if (props.onFocus) {
      props.onFocus();
    }
  }

  function onBlur() {
    setActive(false);

    if (props.onBlur) {
      props.onBlur();
    }
  }

  const backgroundColor = active ? Colors.white : Colors.input;

  const {rightPress} = props;
  const Right = rightPress ? TouchableOpacity : View;
  return (
    <View style={[styles.container, props.containerStyle, {backgroundColor}]}>
      {props.leftIcon && (
        <View style={[styles.leftStyle, props.leftStyle]}>
          {props.leftIcon}
        </View>
      )}
      <TextInput
        maxLength={props.maxLength ? props.maxLength : null}
        autoCapitalize={props.autoCapitalize}
        onChangeText={props.onChangeText}
        style={[styles.inputField, props.inputField]}
        placeholder={props.placeholder}
        underlineColorAndroid={'transparent'}
        placeholderTextColor={props.placeholderTextColor || Colors.Placeholder}
        value={props.value}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines ? 5 : 1}
        onBlur={onBlur.bind(this)}
        onFocus={onFocus.bind(this)}
        editable={props.editable}
        returnKeyType={props.search}
        onSubmitEditing={props.onSubmit}
      />
      {props.rightIcon && (
        <Right
          style={[styles.rightStyle, props.rightStyle]}
          onPress={rightPress}>
          {props.rightIcon}
        </Right>
      )}
    </View>
  );
};
export default InputField;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: wp(15),
    borderRadius: 5,
    marginVertical: wp(4),
    marginTop: 0,
  },
  leftStyle: {
    paddingLeft: 10,
  },
  inputField: {
    flex: 1,
    width: '100%',
    fontSize: wp(4),
    color: Colors.white,
    padding: 0,
    paddingHorizontal: 10,
  },
  inputLabel: {
    color: '#969696',
    fontSize: wp(20),
  },
  rightStyle: {
    paddingRight: 10,
  },
});
