import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Manga() {
  return (
    <View>
      <Text>Manga!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});