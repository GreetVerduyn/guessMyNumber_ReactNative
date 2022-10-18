import {StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from "./screens/startGameScreen";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
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
                <StartGameScreen/>
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
