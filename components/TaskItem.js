import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function TaskItem({ task, handleDelete }) {

    const navigation = useNavigation()

    return (
        <View style={styles.itemContainer}>
            <View>
                <Text style={styles.itemTitle}>{task.title}</Text>
                <Text style={styles.itemDescription}>{task.description}</Text>
            </View>
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('TaskForm', { ...task })}>
                    <Text style={styles.iconItem}>✏️</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(task.id)}>
                    <Text style={styles.iconItem}>❌</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#333333",
        padding: 20,
        marginVertical: 8,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    itemTitle: {
        color: "#fff"
    },
    itemDescription: {
        color: "#999"
    },
    iconsContainer: {
        flexDirection: "row",
    },
    iconItem: {
        fontSize: 20,
        marginHorizontal: 5
    }
});
