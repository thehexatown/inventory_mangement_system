import React, {useEffect} from 'react';
import Container from '../components/Basics/Container';
import ResponsiveText from '../components/Basics/RText';
import {routeName} from '../config/RouteName';

const Splash = props => {
  useEffect(() => {
    props.navigation.navigate(routeName.LOGIN);
  }, []);
  return (
    <Container>
      <ResponsiveText>Splash</ResponsiveText>
    </Container>
  );
};

export default Splash;
