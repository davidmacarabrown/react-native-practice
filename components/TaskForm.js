import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const TaskForm = ({navigation, route}) => {

    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);

    const id = route.params.id;

    const saveTask = (name, description) => {

        console.log(name, description);

        const payload = {
            "name": name,
            "description": description
        }

        if (name && description){

            fetch('http://10.0.2.2:8080/users/' + id.toString() + '/tasks', {

                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            })

                setDescription(null);
                setName(null);
                goHome()

            } else {
                alert("Please complete all fields.")
            }
    }

    const goHome = () => {
        navigation.navigate('Home')
    }

    return(
        <View>
            <TextInput placeholder={"Task Name"} onChangeText={(value) => setName(value)}/>
            <TextInput placeholder={"Description"} onChangeText={(value => setDescription(value))} />
            <Button title={"Save Task"} onPress={saveTask}/>
            <Button title={"Back"} onPress={goHome}/>
        </View>
    )
}

export default TaskForm;