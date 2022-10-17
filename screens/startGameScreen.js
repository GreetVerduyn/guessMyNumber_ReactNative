import {TextInput,View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
    return (<View>
        <TextInput/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        BUTTONS
    </View>
    );
}

export default StartGameScreen;