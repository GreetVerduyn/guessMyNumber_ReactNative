import {useState} from "react";
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {useFonts} from "expo-font";

import StartGameScreen from "./screens/startGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import Colors from "./constants/colors";

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfrounds){
        setGameIsOver(true);
        setGuessRounds(numberOfrounds);
    }

    function startNewGameHandler(){
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) {
        screen = (<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>);
    }
    if (gameIsOver && userNumber) {
        screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
    }



    return (
        <LinearGradient
            colors={[Colors.gradient_blue, Colors.button_yellow]}
            style={styles.screen}
        >
            <ImageBackground
                source={require('./assets/images/background_dices.jpg')}
                resizeMode={"cover"}
                style={styles.screen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.screen}>
                    {screen}
                </SafeAreaView>

            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.35
    }
});
