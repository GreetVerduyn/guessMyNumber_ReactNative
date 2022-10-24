import {Text, View, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles= StyleSheet.create({
    container:{
        borderWidth: 3,
        borderColor: Colors.border_yellow,
        paddingHorizontal: 25,
        paddingVertical:5,
        marginTop: 30,
        borderRadius: 15,
        alignItems:'center',
        justifyContent: 'center',
           },
    numberText:{
        color: Colors.primary_yellow,
        fontSize: deviceWidth <380 ? 28 : 36,
        fontWeight: 'bold',
        padding: 10,
    },
})