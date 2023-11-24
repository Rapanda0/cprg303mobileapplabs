import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';
import { Button } from 'react-native';

function HomeScreen({ navigation }) {
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
    <MainLayout>
      <SafeAreaView>
          <ToDoList tasks={tasks} />
          <ToDoForm addTask={addTask}/>
          <Button 
          title="Go to About"
          onPress={() => navigation.navigate('About')}
          />
      </SafeAreaView>
    </MainLayout>
   
    
  );
}

export default HomeScreen;
