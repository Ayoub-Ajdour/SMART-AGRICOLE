import React,{Component} from 'react';  
import { View, Text, Button, ImageComponent} from 'react-native';  
import {createStackNavigator} from 'react-navigation-stack'; 
import {createAppContainer} from 'react-navigation';  
import  img from './img';
import  insc from './insc';
import  verfice from './verfictionEmail';
import   count from  './precont';
import   singIn from './singIn';
import  malade from './malade'
import prapartionCont  from './prapartionCont';
import menu1 from './menu1';
import Ravageur from './Ravageur';
import forgetpaasword from './forgetpaasword';
import modifpassword from './modifpassword';
import pinPourMdifpass from './pinPourMdifpass';
import adM from './addMaterials';
import materal from './Materiel';
import up  from './updater';
import profile from './profile';
import moncompt from './moncompt';
import pageAdmin from './pageAdmin';
import Mpesticide from './Mpesticide';
import Mmalade from './Mmalade';
import Mravageur from './Mravageur';
import Msol from './Msol';
import Mengrais from './Mengrais';
import Mdest from './Mdest';
import MSom from './MSom';
import Mproduit from './Mproduit';
import uEco from './uEco';
import Production from './Production';
import Analyse from './Analyse';
import addAnal from './addAnl';
import infoProductioon from './infoProductioon';
import infoAnalyse from './infoAnalyse';







   
const AppNavigator = createStackNavigator(  
    {  
    
        inerface:img,  
        nouveoUser:insc,
        opop:img,
        ver:verfice,
        cont:count,
        pp:singIn,
        malade:malade,
        prapartionCont:prapartionCont,
        menu1:menu1,
        Ravageur:Ravageur,
        forgetpaasword:forgetpaasword,
        modifpassword:modifpassword,
        pinPourMdifpass:pinPourMdifpass,
        newMaterials:adM, //
        nextMaterials:materal,///
        upd:up,
        profile:profile,
        moncompt:moncompt,
        pageAdmin:pageAdmin,
        Mpesticide:Mpesticide,
        Mmalade:Mmalade,
        Mravageur:Mravageur,
        Msol:Msol,
        Mengrais:Mengrais,
        Mdest:Mdest,
        MSom:MSom,
        Mproduit:Mproduit,
        uEco:uEco,
        Production:Production,
        Analyse:Analyse,
        addAnal:addAnal,
        infoProductioon:infoProductioon,
        infoAnalyse:infoAnalyse,
    },{
      headerMode:'none',
    }
    
     
  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends Component {  
    render() {  
        return <AppContainer />;  
    }  
}  