import React from 'react';
import {Image, Dimensions, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../config/Colors';

export default class Container extends React.Component {
  render() {
    const {gradient, backgroundImageStyle} = this.props;
    let barStyle = this.props.barStyle ? this.props.barStyle : 'light-content';
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <StatusBar backgroundColor={Colors.primary} barStyle={barStyle} />
        {this.props.backgroundImage && (
          <Image
            source={this.props.backgroundImage}
            style={[styles.backgroundImage, backgroundImageStyle]}
          />
        )}
        {this.props.overlay && <View style={styles.overlayStyle} />}
        {this.props.children}
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  backgroundImage: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlayStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
};
