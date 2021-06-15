import React from 'react';
import Container from '../../components/Basics/Container';
import ResponsiveText from '../../components/Basics/RText';
import {View, Image} from 'react-native';
import {wp} from '../../helpers/Responsiveness';
import Fonts from '../../config/Fonts';
import Button from '../../components/Button';
import Colors from '../../config/Colors';
import {routeName} from '../../config/RouteName';

const Permissions = [
  {
    icon: null,
    title: 'Microphone',
    description: 'Better Sleep tracker and sleep disorder detection.',
  },
  {
    icon: null,
    title: 'Notifications',
    description: 'Receive notifications to help you sleep on time.',
  },
  {
    icon: null,
    title: 'Location',
    description:
      'Get full details of your bed room so that you can sleep comfortably.',
  },
];

const Welcome = props => {
  const onNextPress = () => props.navigation.navigate(routeName.REMINDER);

  return (
    <Container style={styles.container}>
      <View style={styles.top}>
        <ResponsiveText style={styles.welcome}>
          Welcome to Inventory Mangement System
        </ResponsiveText>
        <ResponsiveText style={styles.description}>
          Below permission required for better experience.
        </ResponsiveText>
        <View style={styles.permissions}>
          {Permissions.map((item, index) => {
            return (
              <View style={styles.permissionContainer}>
                <View style={styles.iconContainer}>
                  <Image source={item.icon} style={styles.icon} />
                </View>
                <View style={styles.infoBox}>
                  <ResponsiveText style={styles.prmsnTitle}>{item.title}</ResponsiveText>
                  <ResponsiveText style={styles.description}>
                    {item.description}
                  </ResponsiveText>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.bottom}>
        <Button onPress={onNextPress}>Next</Button>
      </View>
    </Container>
  );
};

export default Welcome;

const styles = {
  container: {
    paddingHorizontal: wp(5),
  },
  top: {
    alignItems: 'center',
    marginBottom: wp(5),
    flex: 1,
  },
  icon: {
    height: wp(10),
    width: wp(10),
  },
  iconContainer: {
    padding: wp(5),
    backgroundColor: Colors.darkGrey,
    marginRight: wp(5),
    borderRadius: wp(3),
  },
  bottom: {
    paddingHorizontal: wp(2),
  },
  welcome: {
    textAlign: 'center',
    marginTop: wp(2),
    marginBottom: wp(7),
    fontSize: 6,
    fontFamily: Fonts.Bold,
  },
  infoBox: {
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    fontSize: 3.5,
  },
  prmsnTitle:{
    fontFamily: Fonts.SemiBold,
    fontSize: 4.25,
    marginBottom: wp(1.5),
  },
  permissions: {
    marginTop: wp(15),
  },
  permissionContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: wp(2),
    marginVertical: wp(4),
    backgroundColor: Colors.lightGrey,
    borderRadius: wp(3),
  },
};
