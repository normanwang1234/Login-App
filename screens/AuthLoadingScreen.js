import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';



export default function AuthLoadingScreen({navigation}) {
    // const checkIfLoggedIn = () => {
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if(user){
    //             console.log("Is a User")
    //             // navigation.navigate('After')
    //         } else {
    //             // navigation.navigate('Before')
    //             console.log("Is not a user")
    //         }
    //     })
    // }
    
    return (
        <View style={styles.container}>
            <ActivityIndicator 
                size="large"
                
            />
            {this.checkIfLoggedIn}
        </View>

    )
    
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

