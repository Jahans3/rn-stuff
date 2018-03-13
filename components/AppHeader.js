import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
// import { LinearGradient } from 'expo';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content"/>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>crypto charts</Text>
        </View>
        <View style={styles.headerBorder}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1260
  },
  headerContainer: {
    paddingTop: 30,
    height: 75,
    alignItems: 'center'
  },
  header: {
    fontFamily: 'Futura',
    fontSize: 30,
    color: '#ec7408',
    fontWeight: 'normal'
  },
  headerBorder: {
    borderBottomStartRadius: 1,
    borderBottomEndRadius: 1,
    borderBottomWidth: 2,
    borderColor: '#ec7408',
  }
});
