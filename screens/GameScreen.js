import {View, StyleSheet, Alert} from "react-native";
import {useState, useEffect} from "react";
import {Ionicons} from '@expo/vector-icons';


import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/card";
import Instructions from "./Instructions";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) { // direction => 'lower', 'greater'
        if (
            (direction === 'lower' && currentGuess < userNumber)
            ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert(
                "Are you not mistaken?",
                'I think you used the wrong button',
                [{text: 'Oops', style: 'cancel'}])
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary)
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.card}>
                <Instructions>hoger of lager? </Instructions>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <PrimaryButton buttonPressed={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove-circle-outline" size={24} color= '#e3c66a' />
                        </PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton buttonPressed={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add-circle-outline" size={24} color='#e3c66a' />
                        </PrimaryButton>
                    </View>

                </View>

            </Card>
            {/*<View>LOG ROUNDS</View>*/}
        </View>

    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 35,
        alignItems: 'center',
        marginTop: 50,
    },
    card:{
        height: 150,
    },
    buttons: {
        flexDirection: 'row',
        flex: 2,
    },
    button: {
        width: 100,
    },
})

