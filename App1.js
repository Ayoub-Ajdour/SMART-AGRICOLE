import React,{Component} from 'react';  
import {createStackNavigator} from 'react-navigation-stack'; 
import {createAppContainer} from 'react-navigation';  
import  autifcation from './autifcation';
import  inscrp from './inscrp';
import  singIN1 from './SingIN1';


   
const AppNavigator = createStackNavigator(  
    {  
    
        inerface:autifcation,  
        nouveoUser:inscrp,
        pp:singIN1,

    },{
      headerMode:'none',
    }
    
     
  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App1 extends Component {  
    render() {  
        return <AppContainer />;  
    }  
}  