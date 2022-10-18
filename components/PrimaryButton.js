import {Text, View, Pressable, StyleSheet} from "react-native";

function PrimaryButton(props) {

    function pressHandler(){
        console.log('Pressed');
    }
    return (
        <Pressable onPress={pressHandler}>
            <View style={styles.buttonContainer}>
                <Text style={ styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </Pressable>
    )
}

export default PrimaryButton;

const styles= StyleSheet.create({
    buttonContainer:{
        backgroundColor: '#1c73cb',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
        elevation: 3,
        margin: 4,
    },
    buttonText:{
        color: '#e3c66a',
        textAlign:'center',
    },
})