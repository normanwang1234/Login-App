import React, {useState} from 'react';
import firebaseAuth from '@react-native-firebase/auth';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';


export default function SignUpScreen ({navigation}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function register() {
        try {
            await firebaseAuth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('Before')
            
        } catch (e) {
            console.error(e.message);
        }
        }
    
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                // value={this.state.name}
                onChangeText={value => setName(value)}
                placeholder='Full Name'
            />
            <TextInput
                style={styles.inputBox}
                // value={this.state.email}
                onChangeText={value => setEmail(value)}
                placeholder='Email'
                autoCapitalize='none'
            />
            <TextInput
                style={styles.inputBox}
                // value={this.state.password}
                onChangeText={value => setPassword(value)}
                placeholder='Password'
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={register}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
},
inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center'
},
button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#FFA611',
    borderColor: '#FFA611',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
},
buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
},
buttonSignup: {
    fontSize: 12
}
})
