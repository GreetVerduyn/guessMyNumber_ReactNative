import {Image, StyleSheet, Text, View} from "react-native";
import Card from "../components/UI/card";
import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumberContainer";
import Colors from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";


function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Title style={styles.title}>Game Over</Title>
                <View>
                    <Text style={styles.text}>Nummer gevonden na {roundsNumber} keer raden</Text>
                </View>
                <View>
                    <NumberContainer>{userNumber}</NumberContainer>
                </View>
            </Card>
            <PrimaryButton buttonPressed={onStartNewGame} style={styles.button}>Nieuw spel</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        height: 350,
    },
    title: {
        margin: 30,
    },
    text: {
        textAlign: 'center',
        color: Colors.shadow_blue,
        fontSize: 20,
    },
    button: {
        borderColor: Colors.primary_yellow,
        borderWidth: 2,
        marginTop: 50,
    }
})