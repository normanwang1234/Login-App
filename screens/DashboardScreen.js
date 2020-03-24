import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DashboardScreen({navigation}) {
    
        return (
            <View style={styles.container}>
                <View style={styles.dashboardWrapper}>
                    <Text style={styles.userText}>Hey User</Text>
                    <TouchableOpacity 
                        style={styles.logoutButton}
                        onPress={() => navigation.navigate('Before')}
                    >
                        <Text style={styles.logoutButtonText}>Log Out</Text>
                    </TouchableOpacity>
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
    userText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dashboardWrapper: {
        textAlign: 'center'
    },
    logoutButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        width: 100,
        alignSelf: 'center',
        borderRadius: 8
    },
    logoutButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'

    }
})
