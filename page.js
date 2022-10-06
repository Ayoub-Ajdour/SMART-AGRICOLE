import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet,Image,Button,TouchableOpacity,TextInput} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import login  from './login';
export default class page extends Component{
    render()
    {
        return(
            <View>
                <TouchableOpacity >
                    <Text style={{fontSize:40}}>page</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
