import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RulesButton = ({toggleRulesDialog}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleRulesDialog} style={styles.button}>
        <Text style={styles.buttonText}>RULES</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 5,
    width: 100,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default RulesButton;
