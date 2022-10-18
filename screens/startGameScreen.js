import {StyleSheet, TextInput, View} from "react-native";
import PrimaryButton from "../components/PrimaryButton";


function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                maxLength={2}
                keyboardType={'number-pad'}
                />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;
const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 50,
        marginHorizontal: 30,
        padding: 14,
        borderRadius: 15,
        backgroundColor: '#14579a',
        elevation: 10,
        shadowColor: '#101e2c',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.30,
        shadowRadius: 8,

    },
    input: {
        height: 45,
        width: 55,
        fontSize: 30,
        borderBottomColor: '#eeb807',
        borderBottomWidth: 2,
        color: '#eeb807',
        marginVertical: 10,
        fontWeight: "bold",
        textAlign: 'center',
    },
    button: {},
})