import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const DemoButton = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={myStyles.container}>
            <Text style={myStyles.text}>Count: {count}</Text>
            <TouchableOpacity
                style={myStyles.button}
                onPress={() => setCount(count + 1)}
            >
                <Text style={myStyles.buttonText}>Tăng</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DemoButton;

const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
    },
});
