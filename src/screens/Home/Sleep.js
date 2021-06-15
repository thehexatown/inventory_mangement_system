import React from 'react';
import Container from '../../components/Basics/Container';
import ResponsiveText from '../../components/Basics/RText';
import {View, Image} from 'react-native';
import {wp} from '../../helpers/Responsiveness';
import Fonts from '../../config/Fonts';
import Button from '../../components/Button';
import Colors from '../../config/Colors';
import Stars from '../../assets/images/Stars.png';
import {routeName} from '../../config/RouteName';

const Sleep = props => {
  const onNextPress = () => props.navigation.navigate(routeName.REMINDER);

  return (
    <Container style={styles.container}>
      <Image source={Stars} style={styles.heartBeat} />
      <View style={styles.row}>
        <ResponsiveText style={styles.time}>8:12</ResponsiveText>
        <ResponsiveText style={styles.timePeriod}>PM</ResponsiveText>
      </View>
      <View style={styles.alarmBox}>
        <View style={styles.row}>
          <Image source={null} style={styles.clock} />
          <ResponsiveText>9:30-8:00am</ResponsiveText>
        </View>
      </View>
      <View style={styles.alarmBox}>
        <View style={styles.row}>
          <Image source={null} style={styles.clock} />
          <View>
            <ResponsiveText>Relaxing sounds</ResponsiveText>
            <ResponsiveText>Fire place</ResponsiveText>
          </View>
          <Image source={null} style={styles.clock} />
        </View>
      </View>
      <Button inverted style={styles.startBtn} onPress={onNextPress}>
        Hold to Stop
      </Button>
      <View style={styles.row}>
        <Image />
        <ResponsiveText>Left to sleep - 8h 18min</ResponsiveText>
      </View>
    </Container>
  );
};

export default Sleep;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  heartBeat: {
    width: wp(100),
    resizeMode: 'contain',
  },
  bottom: {
    paddingHorizontal: wp(10),
  },
  alarmBox: {
    alignItems: 'center',
    padding: wp(5),
    marginBottom: wp(5),
    backgroundColor: Colors.secondary,
    borderRadius: wp(2),
    marginHorizontal: wp(10),
  },
  time: {
    fontSize: 25,
    marginRight: wp(2),
    fontFamily: Fonts.Light,
  },
  timePeriod: {
    fontFamily: Fonts.Light,
  },
  clock: {
    width: wp(5),
    height: wp(5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowApart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(10),
  },
  startBtn: {
    marginHorizontal: wp(10),
  },
};
