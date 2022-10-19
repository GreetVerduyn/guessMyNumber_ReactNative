import {Text, View, StyleSheet} from "react-native";
import Colors from "../constants/colors";

function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const styles= StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: Colors.button_yellow,
        padding: 5,
        margin: 10,
        borderRadius: 15,
        alignItems:'center',
        justifyContent: 'center',
    },
    numberText:{
        color: Colors.primary_yellow,
        fontSize: 30,
        fontWeight: 'bold',
    },
})