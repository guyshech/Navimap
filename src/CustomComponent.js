import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a custom component!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 20,
  },
});

export default CustomComponent;
