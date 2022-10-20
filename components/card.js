import {StyleSheet, View} from "react-native";
import Colors from "../constants/colors";


function Card({children}) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        height: 210,
        width: 280,
        marginTop: 35,
        marginHorizontal: 30,
        padding: 14,
        borderRadius: 15,
        backgroundColor: Colors.primary_blue,
        elevation: 10,
        shadowColor: Colors.shadow_blue,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.30,
        shadowRadius: 8,
    },
    instructions: {
        fontSize: 22,
        color: Colors.primary_yellow,
    },
    input: {
        height: 35,
        width: 55,
        fontSize: 30,
        borderBottomColor: Colors.primary_yellow,
        borderBottomWidth: 2,
        color: Colors.primary_yellow,
        marginVertical: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 3,
    },
    buttons: {
        flexDirection: 'row',
        flex: 2,
    },
    button: {
        width: 100,
    },
})