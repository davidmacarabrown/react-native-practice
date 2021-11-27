import React, { useContext, useEffect } from 'react';
import {
    ActivityIndicator,
    Button,
    ScrollView,
    StyleSheet,
    View,
  } from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import Profile from './Profile';
import StyledButton from '../components/StyledButton';
import TaskList from '../components/TaskList';
import colors from '../assets/colors/colors';

import { Context } from './Store';

const Home = ({ navigation }) => {

    const isFocused = useIsFocused();

    const {user, tasks} = useContext(Context);
    const [userData, setUserData] = user
    const [taskData, setTaskData] = tasks

    const loadTaskData = (userId) => {
        fetch('http://10.0.2.2:8080/users/' + userId.toString() + '/tasks')
        .then((response) => response.json())
        .then((json) => setTaskData(json))
        .catch((error) => console.error(error))
    }

    const markComplete = (taskId) => {
        const filter = (data) => {
            setUserData(data.user)
            setTaskData(data.tasks)
        }
        fetch('http://10.0.2.2:8080/users/'+ userData.id.toString() +'/tasks/' + taskId.toString() + '/markcomplete', {
            method: 'PATCH'
        }).then((response) => response.json())
        .then((json) => filter(json))
        .catch((error) => console.error(error))
    };

    const deleteTask = (taskId) => {
        fetch('http://10.0.2.2:8080/users/'+ userData.id.toString() +'/tasks/' + taskId.toString()+ '/', {
            method: 'DELETE'})
        .then((response) => response.json())
        .then((json) => setTaskData(json))
        .catch((error) => console.error(error))
    }

    useEffect(() => {
        loadTaskData(userData.id)
    }, [isFocused])

    const taskFormLoad = () => {
        navigation.navigate('TaskForm', {id: userData.id})
    }

    return(
        <View style={{backgroundColor: colors.background}}>
            {userData === {} ? 
            <View style={styles.loadingIndicator}>
                <ActivityIndicator size="large" />
                <Button title="Retry" onPress={refresh}/>
            </View>
            :
            <ScrollView>
                <Profile props={userData} />
                <StyledButton 
                    text="+"
                    callBack={taskFormLoad}
                    color={colors.auxiliary}
                />
                <View>
                    <TaskList tasks={taskData} onPressFunction={markComplete} onPressFunctionTwo={deleteTask}/>
                </View>
            </ScrollView>
            }
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    loadingIndicator: {
        alignContent: 'center',
        paddingTop: '50%'
    }
})