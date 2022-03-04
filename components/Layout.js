import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

export default function Layout({ children }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#222f3e' />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222f3e',
        padding: 20,
        flex: 1,
        alignItems: 'center'
    }
})