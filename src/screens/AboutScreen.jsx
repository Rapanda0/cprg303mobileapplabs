import React, { useState } from 'react';
import { 
    ScrollView, 
    StyleSheet, 
    Pressable, 
    View, 
    Text 
} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {  
  
  return (
    <MainLayout>
        <Text>Name of App: IncredibleToDoListApp</Text>
        <Text>My name: Ryel Rapada</Text>
        <Text>Current Date: Nov 23 2023</Text>
        <Text/>
        <Text>sorry i am too lazy to style any of this or put these in a component</Text>
    </MainLayout>
   
    
  );
}

export default AboutScreen;
