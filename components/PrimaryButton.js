import {Text, View, Pressable, StyleSheet} from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({children, buttonPressed}) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({pressed}) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                onPress={buttonPressed}
                android_ripple={{color: Colors.gradient_blue}}
            >
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 25,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.button_blue,
        paddingVertical: 10,
        paddingHorizontal: 15,
        elevation: 3,
    },
    buttonText: {
        color: Colors.button_yellow,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    }
})