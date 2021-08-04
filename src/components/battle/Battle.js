import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {compare, getRandomInt} from '../../common/functions';
import Selection from '../../common/selection';

const Battle = ({userSelection, gameType, setScore, score, resetGame}) => {
  const getComputedSelection = () => {
    const options = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
    return options[getRandomInt(0, gameType === 'default' ? 3 : 5)];
  };

  const [computerSelection, setComputerSelection] = useState();
  const [winner, setWinner] = useState();
  const [winnerText, setWinnerText] = useState();

  useEffect(() => {
    setTimeout(() => {
      setComputerSelection(getComputedSelection());
    }, 3000);
  }, [userSelection]);

  useEffect(() => {
    if (userSelection && computerSelection) {
      setWinner(compare(userSelection, computerSelection, gameType));
    }
  }, [userSelection, computerSelection]);

  useEffect(() => {
    if (winner === 'USER_WINS') {
      setScore(score + 1);
      setWinnerText('YOU WIN');
    }

    if (winner === 'COMPUTER_WINS') {
      setScore(score - 1);
      setWinnerText('YOU LOSE');
    }

    if (winner === 'TIE') {
      setWinnerText('TIE');
    }
  }, [winner]);

  const WinnerSection = ({winnerText, resetGame}) => {
    return (
      <View style={styles.winnerSection}>
        <Text style={styles.winnerSectionText}>{winnerText}</Text>
        <TouchableOpacity
          style={styles.winnerSectionButton}
          onPress={() => {
            setComputerSelection(false);
            resetGame();
          }}>
          <Text style={styles.winnerSectionButtonText}>PLAY AGAIN</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.userPicked}>
        <View>
          <Selection selected={userSelection} />
          <Text style={styles.selectionText}>You Picked</Text>
        </View>
      </View>

      <View style={styles.adversaryPicked}>
        <View>
          <Selection
            selected={computerSelection ? computerSelection : 'waiting'}
          />
          <Text
            style={{
              ...styles.selectionText,
              position: 'relative',
              right: 10,
            }}>
            The House Picked
          </Text>
        </View>
      </View>

      { winner && <WinnerSection winnerText={winnerText} resetGame={resetGame} />}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
    marginBottom: 30,
    width: '100%',
  },
  userPicked: {
    display: 'flex',
    width: '40%',
    alignItems: 'center',
  },
  adversaryPicked: {
    display: 'flex',
    width: '40%',
    alignItems: 'center',
  },
  selectionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  winnerSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  winnerSectionButton: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  winnerSectionButtonText: {
    color: '#141539',
  },
  winnerSectionText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Battle;
