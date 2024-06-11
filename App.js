import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer }  from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Details  from './src/pages/Details';
import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';


/*  importa as telas */

export default function Stack(){
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Detail'} component={Details}/>
                <Stack.Screen name={'Task'} component={Task}/>
                <Stack.Screen name={'NewTask'} component={NewTask}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

