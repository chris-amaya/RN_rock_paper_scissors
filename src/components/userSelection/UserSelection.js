import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';

const UserSelection = ({gameType = 'default', setUserSelection}) => {
  const Container = styled.View`
    background-color: #fff;
  `;

  const RockPaperScissors = () => {
    return (
      <View style={styles.defaultContainer}>
        <View>
          <View style={styles.bgTrianguleContainer}>
            <Image
              style={styles.bgTriangule}
              source={require('../../assets/img/bg-triangle.png')}
              resizeMode={'contain'}
            />
          </View>

          <TouchableOpacity
            style={styles.paper}
            onPress={() => setUserSelection('paper')}>
            <View style={styles.option}>
              <Image source={require('../../assets/img/icon-paper.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rock}
            onPress={() => setUserSelection('rock')}>
            <View style={styles.option}>
              <Image source={require('../../assets/img/icon-rock.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.scissors}
            onPress={() => setUserSelection('scissors')}>
            <View style={styles.option}>
              <Image source={require('../../assets/img/icon-scissors.png')} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const Bonus = () => {
    return (
      <View style={styles.defaultContainer}>
        <View>
          <View style={{...styles.bgTrianguleContainer, top: -30}}>
            <Image source={require('../../assets/img/bg-pentagon.png')} />
          </View>

          <TouchableOpacity
            style={{...styles.paper, left: undefined, right: -15, top: 30}}
            onPress={() => setUserSelection('paper')}>
            <View style={styles.option}>
              <Image source={require('../../assets/img/icon-paper.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{...styles.rock, left: undefined, top: undefined, right: 40, bottom: -10}}
            onPress={() => setUserSelection('rock')}>
            <View style={styles.option}>
              <Image source={require('../../assets/img/icon-rock.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{...styles.lizard, left: undefined, top: undefined, left: 40, bottom: -10}}
            onPress={() => setUserSelection('lizard')}>
            <View style={styles.option}>
              <Image source={require('../../assets/img/icon-lizard.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{...styles.spock, left: undefined, top: undefined, left: -15, top: 30}}
            onPress={() => setUserSelection('spock')}>
            <View style={styles.option}>
              <Image source={require('../../assets/img/icon-spock.png')} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{...styles.scissors, left: undefined, top: undefined, left: 130, top: -50}}
            onPress={() => setUserSelection('scissors')}>
            <View style={styles.option}>
              <Image source={require('../../assets/img/icon-scissors.png')} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return gameType === 'default' ? <RockPaperScissors /> : <Bonus />;
};

const styles = StyleSheet.create({
  defaultContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 80,
  },
  bgTrianguleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgTriangule: {
    width: 200,
  },
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
    position: 'absolute',
    left: 30,
    top: -10,
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
    position: 'absolute',
    bottom: 10,
    left: 130,
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
    position: 'absolute',
    right: 30,
    top: -10,
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
    position: 'absolute',
    right: 30,
    top: -10,
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
    position: 'absolute',
    right: 30,
    top: -10,
  },
});

export default UserSelection;
