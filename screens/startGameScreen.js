import {useState} from "react";
import {StyleSheet, TextInput, View, Alert, Text} from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/UI/Title";
import Card from "../components/UI/card";
import Instructions from "../components/UI/Instructions";


function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);  // convert input to number

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'The number needs to be between 1 and 99.',
                [{text: 'Okay', onPress: resetInputHandler, style: 'destructive'}]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Raad mijn nummer</Title>
            <Card>
                <View>
                    <Instructions>Geef een nummer in</Instructions>
                    <TextInput
                        style={styles.input}
                        maxLength={2}
                        keyboardType={'number-pad'}
                        onChangeText={numberInputHandler}
                        value={enteredNumber}
                    />
                    <View style={styles.buttons}>
                        <View style={styles.button}>
                            <PrimaryButton buttonPressed={resetInputHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={styles.button}>
                            <PrimaryButton buttonPressed={confirmInputHandler}>Start</PrimaryButton>
                        </View>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    input: {
        alignSelf:'center',
        height: 30,
        width: 55,
        fontSize: 30,
        borderBottomColor: Colors.primary_yellow,
        borderBottomWidth: 2,
        color: Colors.primary_yellow,
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 2,
        marginBottom: 30,
    },
    buttons: {
        flexDirection: 'row',
        flex: 2,
    },
    button: {
        width: 100,
    }
})