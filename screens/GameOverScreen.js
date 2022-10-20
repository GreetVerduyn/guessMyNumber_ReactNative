import {StyleSheet, Text, View} from "react-native";
import Card from "../components/card";
import Title from "../components/Title";
import GameScreen from "./GameScreen";

function GameOverScreen() {
    return (
        <View>
            <Card>
            <Title style={styles.title}>Game Over</Title>
            <View>
                <Text>The number you picked is </Text>
            </View>
            </Card>
        </View>
       );
}

export default GameOverScreen;

const styles= StyleSheet.create({
    title:{
        marginBottom: 50,

    }
})