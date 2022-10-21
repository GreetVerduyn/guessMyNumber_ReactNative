import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/colors";

function Title({children, style}) {
    return (
        <Text style={[styles.title, style]}>{children}</Text>
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
        borderWidth: 3,
        borderColor: Colors.primary_yellow,
        borderRadius: 15,
    }
})
