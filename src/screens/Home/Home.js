import React from 'react';
import Container from '../../components/Basics/Container';
import ResponsiveText from '../../components/Basics/RText';
import {View, Image} from 'react-native';
import {wp} from '../../helpers/Responsiveness';
import Fonts from '../../config/Fonts';
import Button from '../../components/Button';
import Colors from '../../config/Colors';
import HeartBeat from '../../assets/images/HeartBeat.png';
import {routeName} from '../../config/RouteName';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = props => {
  const onStartPres = () => props.navigation.navigate(routeName.SLEEP);

  return (
    <Container style={styles.container}>
      <ResponsiveText style={styles.title}>
        Inventory Management System
      </ResponsiveText>
      <View/>
    </Container>
  );
};

export default Home;

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  heartBeat: {
    width: wp(100),
    resizeMode: 'contain',
  },
  bottom: {
    paddingHorizontal: wp(10),
  },
  title: {
    marginTop: wp(2),
    fontSize: 6,
    fontFamily: Fonts.Bold,
    paddingHorizontal: wp(5),
  },
  alarmBox: {
    alignItems: 'center',
    padding: wp(5),
    marginBottom: wp(5),
    backgroundColor: Colors.darkGrey,
    borderRadius: wp(4),
    marginHorizontal: wp(10),
  },
  time: {
    fontSize: 10,
    lineHeight: wp(11),
    marginRight: wp(2),
    fontFamily: Fonts.Bold,
  },
  timePeriod: {
    fontFamily: Fonts.Bold,
  },
  clock: {
    width: wp(5),
    height: wp(5),
  },
  settingBox: {
    backgroundColor: Colors.secondary,
    borderRadius: wp(2),
    padding: wp(3),
    width: wp(37),
  },
  row: {
    flexDirection: 'row',
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
