import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const thongbao = () => {
        Alert.alert('Thông tin đăng nhập', `Username: ${username}\nPassword: ${password}`);

    }
    return (
        <View style={myStyles.container}>
            <Image
                source={{ uri: 'https://th.bing.com/th/id/OIP.by_Cknq28f1Fe4jHGMQ5JgHaEP?rs=1&pid=ImgDetMain' }}
                style={myStyles.logo}
            />
            <TextInput
                placeholder="USERNAME"
                value={username}
                onChangeText={setUsername}
                style={myStyles.input}
                placeholderTextColor="#555"
            />

            <TextInput
                placeholder="PASSWORD"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={myStyles.input}
                placeholderTextColor="#555"
            />

            <TouchableOpacity style={myStyles.button} onPress={thongbao}>
                <Text style={myStyles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

        </View>
    )
}
export default Login;
const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7b733',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: 250,
        height: 120,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#c94e4e',
        paddingVertical: 14,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }

})