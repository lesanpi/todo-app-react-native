import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { saveTask, updateTask } from '../api';
import Layout from '../components/Layout';

export default function TaskFormScreen({ navigation, route }) {

    const [task, setTask] = useState({
        title: '',
        description: ''
    })
    const [editing, setEditing] = useState(false)

    const handleChange = (name, value) => setTask({ ...task, [name]: value })

    const handleSubmit = async () => {
        if (editing) {
            await updateTask(task.id, task)
        } else {
            await saveTask(task)
        }
        navigation.navigate('Home')
    }

    useEffect(() => {
        if (route.params && route.params.title && route.params.description && route.params.id) {
            navigation.setOptions({ headerTitle: 'Update a Task' })
            setTask({
                title: route.params.title,
                description: route.params.description
            })
            setEditing(true)
        }
    }, [])

    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholder="Write a Title"
                placeholderTextColor="#546574"
                onChangeText={(text) => handleChange('title', text)}
                value={task.title}
            />
            <TextInput
                style={styles.input}
                placeholder="Write a Description"
                placeholderTextColor="#546574"
                onChangeText={(text) => handleChange('description', text)}
                value={task.description}
            />
            <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
                {
                    !editing ? <Text style={styles.buttonText}>Save Task</Text>
                        : <Text style={styles.buttonText}>Update Task</Text>
                }
            </TouchableOpacity>
        </Layout>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        marginBottom: 8,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#10ac84',
        height: 55,
        color: '#fff',
        padding: 15,
        borderRadius: 15
    },
    buttonSave: {
        width: '90%',
        paddingVertical: 20,
        backgroundColor: '#10ac84',
        borderRadius: 15,
        marginBottom: 10,
        color: '#fff'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    }
})