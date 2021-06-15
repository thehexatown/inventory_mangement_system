import React from 'react';
import Container from '../../components/Basics/Container';
import ResponsiveText from '../../components/Basics/RText';
import {View, Image} from 'react-native';
import {wp} from '../../helpers/Responsiveness';
import Logo from '../../assets/images/logo.png';
import Input from '../../components/Input';
import Fonts from '../../config/Fonts';
import Button from '../../components/Button';
import Colors from '../../config/Colors';
import {ScrollView, TouchableOpacity} from 'react-native';
import {routeName} from '../../config/RouteName';

const SignUp = props => {
  const onLoginPress = () => props.navigation.navigate(routeName.LOGIN);
  const onSignUpPress = () => props.navigation.navigate(routeName.REMINDER);

  return (
    <Container style={styles.container}>
      <ScrollView>
        <View style={styles.top}>
          <Image source={Logo} style={styles.logo} />
          <ResponsiveText style={styles.started}>
            Let's Get Started
          </ResponsiveText>
        </View>
        <Input title={'Email'} placeholder={'email'} />
        <Input title={'UserName'} placeholder={'username'} />
        <Input title={'Password'} placeholder={'password'} />
        <Input title={'Confirm Password'} placeholder={'confirm password'} />
        <Input title={'Phone Number'} placeholder={'confirm password'} />
        <View style={styles.bottom}>
          <Button inverted onPress={onSignUpPress}>
            Signup
          </Button>
          <View style={styles.row}>
            <ResponsiveText style={styles.already}>
              ALREADY HAVE AN ACCOUNT?
            </ResponsiveText>
            <TouchableOpacity onPress={onLoginPress}>
              <ResponsiveText style={styles.login}> LOGIN</ResponsiveText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default SignUp;

const styles = {
  container: {
    paddingHorizontal: wp(5),
  },
  top: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: wp(5),
  },
  bottom: {
    paddingHorizontal: wp(2),
  },
  logo: {
    width: wp(52),
    height: wp(52),
  },
  started: {
    marginTop: wp(2),
    fontSize: 5,
    fontFamily: Fonts.Bold,
  },
  already: {
    color: Colors.dull,
    fontFamily: Fonts.Bold,
    fontSize: 3.25,
    textAlign: 'right',
    marginBottom: wp(10),
  },
  login: {
    fontFamily: Fonts.Bold,
    fontSize: 3.25,
    textAlign: 'right',
    marginBottom: wp(10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: wp(2),
  },
};
