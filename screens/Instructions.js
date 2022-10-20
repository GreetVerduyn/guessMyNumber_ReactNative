import {Text} from "react-native";
import {StyleSheet} from "react-native";
import Colors from "../constants/colors";

function Instructions({children}){
    return(
        <Text style={styles.instructions}>{children}</Text>
    )
}

export default Instructions;

const styles= StyleSheet.create({
    instructions :{
        fontSize: 22,
        color: Colors.primary_yellow,
    },
})