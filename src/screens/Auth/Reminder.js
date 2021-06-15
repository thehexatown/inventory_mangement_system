import React, {useState} from 'react';
import Container from '../../components/Basics/Container';
import ResponsiveText from '../../components/Basics/RText';
import {View, Image} from 'react-native';
import {wp} from '../../helpers/Responsiveness';
import Fonts from '../../config/Fonts';
import Button from '../../components/Button';
import Colors from '../../config/Colors';
import Onboarding1 from '../../assets/images/onboarding1.png';
import Onboarding2 from '../../assets/images/onboarding2.png';
import Onboarding3 from '../../assets/images/onboarding3.png';
import {routeName} from '../../config/RouteName';

const Features = [
  {
    image: Onboarding1,
    title: 'Product Mangement',
    description:
      'Manage your products by keeping record of sold and remaining items in the inventory.',
  },
  {
    image: Onboarding2,
    title: 'Order Tracking',
    description:
      'Keep track of your orders, shipment and returns from start to end',
  },
  {
    image: Onboarding3,
    title: 'Notifications',
    description: 'Get notified of everything such as orders, low quantity etc.',
  },
];

const Reminder = props => {
  const [screen, setScreen] = useState(0);
  const onNextPress = () => setScreen(screen + 1);
  const onStartPress = () => props.navigation.navigate(routeName.HOME);

  return (
    <Container style={styles.container}>
      <View style={styles.top}>
        <View style={styles.imageContainer}>
          <Image source={Features[screen].image} style={styles.image} />
        </View>
      </View>
      <View style={styles.bottom}>
        <ResponsiveText style={styles.charger}>
          {Features[screen].title}
        </ResponsiveText>
        <ResponsiveText style={styles.description}>
          {Features[screen].description}
        </ResponsiveText>
        <Button onPress={screen !== 2 ? onNextPress : onStartPress}>
          {screen === 2 ? 'Start' : 'Next'}
        </Button>
      </View>
    </Container>
  );
};

export default Reminder;

const styles = {
  container: {
    padding: wp(5),
    justifyContent: 'center',
  },
  top: {
    alignItems: 'center',
    marginBottom: wp(5),
  },
  imageContainer: {
    justifyContent: 'center',
  },
  image: {
    height: wp(90),
    width: wp(90),
    resizeMode: 'contain',
  },
  bottom: {
    paddingHorizontal: wp(2),
  },
  charger: {
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
    color: Colors.dull,
    textAlign: 'center',
    marginBottom: wp(5),
  },
  prmsnTitle: {
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
