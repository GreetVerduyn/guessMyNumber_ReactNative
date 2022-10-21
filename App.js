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

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(){
        setGameIsOver(true);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if (userNumber) {
        screen = (<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>);
    }
    if (gameIsOver && userNumber) {
        screen = <GameOverScreen/>
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
