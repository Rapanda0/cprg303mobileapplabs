/**
 * My To Do List App
 *
 * @format
 */
import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoList from './ToDoList';

const defaultTasks = [
  'Do laundry',
  'Go to gym',
  'Walk dog'
]
function App() {
  
const [tasks, setTasks] = useState(defaultTasks);

//useless for now 
const addTask = (task) => {
  setTasks([...tasks, task]);
}

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>  
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
        />
        <Button title="Add" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default App;
