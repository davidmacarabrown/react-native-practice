import React, {useContext, useState} from 'react';
import {ActivityIndicator, StyleSheet, TextInput, View} from 'react-native';

import StyledButton from './StyledButton';
import colors from '../assets/colors/colors';

const TaskForm = ({navigation, route}) => {
    
    const [taskName, setTaskName] = useState("");
    const [description, setDescription] = useState("");
    const [loadingState, setLoadingState] = useState(false);

    const id = route.params.id;

    const resetFields = () => {
        setDescription("");
        setTaskName("");
    }

    const goHome = () => {
        navigation.navigate('Home')
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
                if (response.status === 201) {
                    alert("Task Saved!")
                    resetFields()
                }
            })
            .catch(error => alert("Failed To Save"))
            .finally(setLoadingState(false));

            } else {
                alert("Please complete all fields.")
            }
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
            <View style={Styles.buttonWrapper}>
                <StyledButton 
                    text="Save Task"
                    callBack={saveTask}
                    color={colors.auxiliary}
                />
                <StyledButton 
                    text={"Back"}
                    callBack={goHome}
                    color={colors.secondary}
                />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({

    buttonWrapper: {
        display: 'flex',
        flexDirection: 'column',
        
    }
})
export default TaskForm;