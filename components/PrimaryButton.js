import {Text, View, Pressable, StyleSheet} from "react-native";

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
                android_ripple={{color: '#77a3ce'}}
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
        backgroundColor: '#5ba4ee',
        paddingVertical: 10,
        paddingHorizontal: 15,
        elevation: 3,
    },
    buttonText: {
        color: '#e3c66a',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75
    }
})