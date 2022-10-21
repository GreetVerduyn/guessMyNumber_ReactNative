import {Text, View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({roundNumber, guess}){
    return(
        <View style={styles.listItem}>
            <Text>poging {roundNumber}:   {guess}</Text>
        </View>
    );
}

export default GuessLogItem

const styles= StyleSheet.create({
    listItem:{
        borderColor:Colors.border_yellow,
        backgroundColor: Colors.primary_blue,
        borderWidth:1,
        borderRadius: 25,
        padding: 8,
        marginVertical:8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: Colors.border_yellow,
        elevation: 4,
        width:'100%',
    }
})