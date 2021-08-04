import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Selection = ({selected}) => {
  const Waiting = () => {
    return <View style={styles.waiting} />;
  };

  const Option = ({option}) => {
    return (
      <View>
        <View style={styles[option]}>
          <View style={styles.option}>
            {option === 'rock' && <Image source={require('../assets/img/icon-rock.png')} />}
            {option === 'paper' && <Image source={require('../assets/img/icon-paper.png')} />}
            {option === 'scissors' && <Image source={require('../assets/img/icon-scissors.png')} />}
            {option === 'spock' && <Image source={require('../assets/img/icon-spock.png')} />}
            {option === 'lizard' && <Image source={require('../assets/img/icon-lizard.png')} />}
          </View>
        </View>
      </View>
    );
  };

  return selected === 'waiting' ? <Waiting /> : <Option option={selected} />;
};

const styles = StyleSheet.create({
  option: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  paper: {
    backgroundColor: '#4865f4',
    width: 110,
    height: 110,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    zIndex: 10,
    elevation: 10,
  },
  rock: {
    backgroundColor: '#dc2e4e',
    width: 110,
    height: 110,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    zIndex: 10,
    elevation: 10,
  },
  scissors: {
    backgroundColor: '#ec9e0e',
    width: 110,
    height: 110,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    zIndex: 10,
    elevation: 10,
  },
  lizard: {
    backgroundColor: '#834fe3',
    width: 110,
    height: 110,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    zIndex: 10,
    elevation: 10,
  },
  spock: {
    backgroundColor: '#40b9ce',
    width: 110,
    height: 110,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    zIndex: 10,
    elevation: 10,
  },
  waiting: {
    backgroundColor: '#000026',
    width: 110,
    height: 110,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    zIndex: 10,
    elevation: 10,
  },
});

export default Selection;
