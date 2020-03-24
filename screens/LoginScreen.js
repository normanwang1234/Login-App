import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
//import {GoogleSignin, GoogleSigninButton, statusCodes} from '@react-native-community/google-signin';
//import {firebase} from '@react-native-firebase/auth'

// GoogleSignin.configure({
//     scopes: ['https://www.googleapis.com/auth/drive.readonly'],
//     webClientId: 'com.googleusercontent.apps.869323164723-up9s4g00d1clc92i7757r0l0kpkfs4jc'
// });

// signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       this.setState({ userInfo });
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // user cancelled the login flow
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // operation (e.g. sign in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // play services not available or outdated
//       } else {
//         // some other error happened
//       }
//     }
//   };

export default function LoginScreen ({navigation}) {

        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")

        const usernameHandler = (value) => {
            this.setUsername(value)
        }

        const passwordHandler = (value) => {
            this.setPassword(value)
        }


        return (
            <View style={styles.container}>
                <View style={styles.formWrapper}>
                    <Text style={styles.welcomeText}>Welcome Back!</Text>

                    <View style={styles.formRow}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Enter Username" 
                            placeholderTextColor="#333" 
                            onChangeText={(value) => usernameHandler(value)}
                        />
                    </View>

                    <View style={styles.formRow}>
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Enter Password" 
                            placeholderTextColor="#333" 
                            secureTextEntry={true} 
                            onChangeText={(value) => passwordHandler(value)}
                        />
                    </View>

                    <View style={styles.buttonView}>
                        <TouchableOpacity 
                            style={styles.signInButton}
                            onPress={() => navigation.navigate('After')}
                        >
                            <Text style={styles.signInText}>Sign In</Text>
                        </TouchableOpacity>
                        {/* <GoogleSigninButton
                            style={{ width: 192, height: 48 }}
                            size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={this.signIn}
                            //disabled={this.state.isSigninInProgress} 
                        /> */}
                    </View>

                </View>
            </View>

        )
    
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formWrapper: {
        width: '80%',
    },
    formRow: {
        marginBottom: 10
    },
    textInput: {
        backgroundColor: '#ddd',
        height: 40,
        paddingHorizontal: 10,
        color: '#333',
    },
    welcomeText: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold'
    },
    signInButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingTop: 10
    },
    signInText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonView: {
        paddingTop: 10
    }
})
