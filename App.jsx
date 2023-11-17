import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const defaultTasks = [
    'Do laundry', 
    'Go to gym', 
    'Walk dog'
];

  const [tasks, setTasks] = useState(defaultTasks);

  const addTask = (task) => {
      setTasks([...tasks, task]);
  };

  return (
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask}/>
      </SafeAreaView>
  );
}

export default App;
