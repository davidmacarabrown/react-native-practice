import React, {useState} from 'react';
import {ActivityIndicator, Button, Text, TextInput, View} from 'react-native';

const TaskForm = ({navigation, route}) => {

    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [loadingState, setLoadingState] = useState(false);

    const id = route.params.id;

    const resetFields = () => {
        setDescription("");
        setTaskName("");
    }

    const saveTask = () => {
       
        const payload = {
            name: taskName,
             description
        }

        if (taskName && description){
            
            setLoadingState(true);

            fetch('http://10.0.2.2:8080/users/' + id.toString() + '/tasks', {

                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            })
            .then((response) => {
                console.log(response.status)
                if (response.status === 201){
                    alert("Task Saved!");
                    resetFields();
                }
            })
            .catch(error => alert("Failed To Save"))
            .finally(setLoadingState(false));

            } else {
                alert("Please complete all fields.")
            }
    }

    const goHome = () => {
        navigation.navigate('Home')
    }

    return(
        <View>
            { loadingState ? 
            <View>
                <ActivityIndicator size="large"/>
            </View>
            : null }
            <View>
                <TextInput placeholder={"Task Name"} onChangeText={setTaskName} value={taskName}/>
                <TextInput placeholder={"Description"} onChangeText={setDescription} value={description}/>
            </View>
            
            <Button title={"Save Task"} onPress={saveTask} disabled={loadingState}/>
            <Button title={"Back"} onPress={goHome}/>
        </View>
    )
}

export default TaskForm;