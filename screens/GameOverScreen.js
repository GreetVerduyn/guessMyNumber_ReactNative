import {Image, StyleSheet, Text, View} from "react-native";
import Card from "../components/card";
import Title from "../components/Title";
import GameScreen from "./GameScreen";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";


function GameOverScreen() {
    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Title style={styles.title}>Game Over</Title>
                <View>
                    <Text style={styles.text}>Nummer gevonden na x keer raden</Text>
                </View>
                <View>
                    <NumberContainer></NumberContainer>
                </View>
            </Card>
            <PrimaryButton style={styles.button}>Nieuw spel</PrimaryButton>
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