import {StyleSheet, Text} from "react-native";
import Colors from "../constants/colors";

function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
)
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.primary_yellow,
        textAlign: 'center',
        padding: 15,
        borderWidth: 2,
        borderColor: Colors.primary_yellow,
    }
})