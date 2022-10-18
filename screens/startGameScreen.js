import {useState} from "react";
import {StyleSheet, TextInput, View, Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";


function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }

    function resetInputHandler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
const chosenNumber = parseInt(enteredNumber);  // convert input to number
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber>99){
            Alert.alert
            ('Invalid number',
             'The number needs to be between 1 and 99.'
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        console.log('Valid number')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                maxLength={2}
                keyboardType={'number-pad'}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <PrimaryButton onPress ={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton buttonPressed={confirmInputHandler}>Confirm</PrimaryButton>
                </View>

            </View>
        </View>
    );
}

export default StartGameScreen;
const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        height: 200,
        marginTop: 50,
        marginHorizontal: 30,
        padding: 14,
        borderRadius: 15,
        backgroundColor: '#4189d0',
        elevation: 10,
        shadowColor: '#101e2c',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.30,
        shadowRadius: 8,
    },
    input: {
        height: 55,
        width: 55,
        fontSize: 30,
        borderBottomColor: '#eeb807',
        borderBottomWidth: 2,
        color: '#eeb807',
        marginVertical: 20,
        fontWeight: 'bold',
        textAlign:'center',
flex: 3,
    },
    buttons: {
        flexDirection: 'row',
        flex: 2,
    },
    button:{
        width: 100,
    }
})