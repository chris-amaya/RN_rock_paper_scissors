import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ScoreBoard = ({score, gameType}) => {
  return (
    <View style={styles.scoreBoard}>
      <View>
        {gameType === 'default' ? <Image style={styles.scoreImg} source={require('../../assets/img/logo.png')} /> : <Image source={require('../../assets/img/logo-bonus.png')} />}
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreTitle}>SCORE</Text>
        <Text style={styles.scoreText}>{score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreBoard: {
    marginTop: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  scoreContainer: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
  },
  scoreTitle: {
    color: '#2a46c0',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scoreText: {
    color: '#141539',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default ScoreBoard;
