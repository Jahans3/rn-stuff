import React from 'react';
import { View } from 'react-native';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppHeader/>
        <AppBody/>
        <AppFooter/>
      </View>
    );
  }
}
