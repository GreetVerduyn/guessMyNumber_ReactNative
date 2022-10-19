import {StyleSheet, ImageBackground} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

import StartGameScreen from "./screens/startGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
    let screen = {StartGameScreen}

    if(pickedNumber){
        screen= {GameScreen}
    }
    return (
        <LinearGradient
            colors={['#3882cc', '#e3c66a']}
            style={styles.screen}
        >
            <ImageBackground
                source={require('./assets/images/background_dices.jpg')}
                resizeMode={"cover"}
                style={styles.screen}
                imageStyle={styles.backgroundImage}
            >
                {screen}
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
