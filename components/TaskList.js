import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { deleteTask, getTasks } from '../api';
import TaskItem from './TaskItem';
import { useIsFocused } from '@react-navigation/native'


export default function TaskList() {

    const [tasks, setTasks] = useState([]);
    const [refresh, setRefresh] = useState(false)
    const isFocused = useIsFocused()

    useEffect(() => {
        loadTask()
    }, [isFocused])

    const loadTask = async () => {
        const data = await getTasks();
        console.log('loaded')
        setTasks(data);
    }

    const onRefresh = async () => {
        console.log('refreshing')
        setRefresh(true);
        await loadTask()
        setRefresh(false)
    }

    const handleDelete = async (id) => {
        await deleteTask(id)
        await loadTask()
    }

    useEffect(() => {
        loadTask()
    }, [])

    const renderItem = ({ item }) => {
        return <TaskItem task={item} handleDelete={handleDelete} />
    };


    return (
        <FlatList data={tasks}
            keyExtractor={(item) => item.id + ''}
            renderItem={renderItem}
            style={{ width: '100%' }}
            refreshControl={<RefreshControl onRefresh={onRefresh} colors={["#78e08f"]} refreshing={refresh} progressBackgroundColor="#0a3d62" />}
        />
    );
}
