import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RulesModal = ({gameType = 'default', on, setRulesModal}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.rulesText}>RULES</Text>

      <View>
        {gameType === 'default' ? (
          <Image source={require('../../assets/img/image-rules.png')} />
        ) : (
          <Image source={require('../../assets/img/image-rules-bonus.png')} />
        )}
      </View>

      <TouchableOpacity onPress={() => setRulesModal(false)}>
        <Image source={require('../../assets/img/icon-close.png')} />
      </TouchableOpacity>
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
    backgroundColor: '#fff',
    elevation: 100,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rulesText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RulesModal;
