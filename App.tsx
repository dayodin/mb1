import React from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';

// import firestore from '@react-native-firebase/firestore'; 
import { db } from './src/firebaseConfig';

import Manga from './components/manga';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Hello: React.FC<Props> = ({
  name = "K Money",
  baseEnthusiasmLevel = 0,
}) => {
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
    baseEnthusiasmLevel,
  );

  // const testDocument = db;
  // // .collection('test').doc('test1').get();
  // console.log(testDocument);

  const onIncrement = () =>
    setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = () =>
    setEnthusiasmLevel(
      enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0,
    );

  const getExclamationMarks = (numChars: number) =>
    numChars > 0 ? Array(numChars + 1).join('!') : '';


  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello {name}
        {/* {getExclamationMarks(enthusiasmLevel)} */}
      </Text>
      <Manga />
      <View>
        <Button
          title="Increase enthusiasm"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="Decrease enthusiasm"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default Hello;