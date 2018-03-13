import React from 'react';
import { ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';

export default class AppBody extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.text}>BodyStart</Text>
        <Text style={{ height: 50, width: 50 }}>Test</Text>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1, width: '100%' }}>
          <Text style={styles.scrollViewText}>Hello</Text>
          <Text style={styles.scrollViewText}>Hello</Text>
          <Text style={styles.scrollViewText}>Hello</Text>
          <Text style={styles.scrollViewText}>Hello</Text>
          <Text style={styles.scrollViewText}>Hello</Text>
        </ScrollView>
        <Text style={styles.text}>BodyEnd</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewText: {
    width: '100%',
    height: 50,
    color: 'black',
    backgroundColor: 'green'
  },
  text: {
    width: '100%',
    height: 50,
    color: 'black',
    backgroundColor: 'green'
  },
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
