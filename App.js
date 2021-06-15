import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, useColorScheme, View} from 'react-native';

import Router from './src/navigation/Router';
import Colors from './src/config/Colors';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{...backgroundStyle, flex: 1}}>
      <Router />
    </View>
  );
};

export default App;
