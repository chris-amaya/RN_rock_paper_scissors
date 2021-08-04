import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Menu = ({setGameType}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Select Which Version You Wanna Play</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setGameType('default')}>
          <Text style={styles.buttonText}>Rock, Paper, Scissors</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => setGameType('bonus')}>
            Rock, Paper, Scissors, Lizard, Spock
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#141539',
    elevation: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    // display: 'flex',
  },
  button: {
    borderColor: '#dadd27',
    borderWidth: 2,
    marginTop: 10,
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default Menu;
