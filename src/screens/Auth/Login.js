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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {routeName} from '../../config/RouteName';

const Login = props => {
  const onSignUpPress = () => props.navigation.navigate(routeName.SIGN_UP);

  return (
    <Container style={styles.container}>
      <View style={styles.top}>
        <Image source={Logo} style={styles.logo} />
        <ResponsiveText style={styles.welcome}>
          Welcome, Let's Join
        </ResponsiveText>
      </View>
      <View>
        <Input title={'User Name'} placeholder={'username'} />
        <Input title={'Password'} placeholder={'password'} />
        <TouchableOpacity>
          <ResponsiveText style={styles.forgot}>
            Forgot Password?
          </ResponsiveText>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Button>Login</Button>
        <Button inverted onPress={onSignUpPress}>
          Signup
        </Button>
      </View>
    </Container>
  );
};

export default Login;

const styles = {
  container: {
    paddingHorizontal: wp(5),
  },
  top: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: wp(7),
  },
  bottom: {
    paddingHorizontal: wp(2),
  },
  logo: {
    width: wp(52),
    height: wp(52),
  },
  welcome: {
    marginTop: wp(2),
    fontSize: 5,
    fontFamily: Fonts.Bold,
  },
  forgot: {
    fontFamily: Fonts.Bold,
    fontSize: 3.25,
    textDecorationLine: 'underline',
    textAlign: 'right',
    marginBottom: wp(10),
  },
  or: {
    color: Colors.grey,
    fontFamily: Fonts.Bold,
  },
  orContainer: {
    height: wp(8),
    width: wp(8),
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: wp(2),
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'white',
    flex: 1,
  },
};
