import React, {useState} from 'react';
import type {Node} from 'react';
import {StyleSheet, View} from 'react-native';

import ScoreBoard from './src/components/scoreBoard/ScoreBoard';
import UserSelection from './src/components/userSelection/UserSelection';
import RulesButton from './src/components/rulesButton/RulesButton';
import RulesModal from './src/components/rulesModal/rulesModal';
import Battle from './src/components/battle/Battle';
import Menu from './src/components/menu/Menu';

const App: () => Node = () => {
  const [rulesModal, setRulesModal] = useState(false);
  const [userSelection, setUserSelection] = useState();
  const [score, setScore] = useState(0);
  const [gameType, setGameType] = useState();

  const toggleRulesDialog = () => setRulesModal(!rulesModal);
  const resetGame = () => {
    setUserSelection();
  };

  return (
    <View style={styles.App} width={'100%'} height={'100%'}>
      <View style={styles.appContainer}>
        <ScoreBoard score={score} gameType={gameType} />
        {userSelection && (
          <Battle
            userSelection={userSelection}
            score={score}
            setScore={setScore}
            resetGame={resetGame}
            gameType={gameType}
          />
        )}
        {!userSelection && (
          <UserSelection
            setUserSelection={setUserSelection}
            gameType={gameType}
          />
        )}
      </View>
      {rulesModal && <RulesModal setRulesModal={setRulesModal} />}
      <RulesButton toggleRulesDialog={toggleRulesDialog} />
      {!gameType && <Menu setGameType={setGameType} />}
    </View>
  );
};

const styles = StyleSheet.create({
  App: {
    backgroundColor: '#141539',
  },
  appContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
  },
});

export default App;
