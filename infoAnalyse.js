import React,{Component, version} from 'react';
import {ImageBackground,View,Text,Alert,StyleSheet,Image,Button,TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Picker} from  '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'
import { color } from 'react-native-elements/dist/helpers';
export default class infoAnalyse extends Component{

    constructor(props){
        super(props);
        //this.state = { date: new Date() }
       // state = { datee: new Date() }
       this.state={cycle:'',production:'',date1:new Date,dateActuel:new Date,Temp:'',ph:'',listData:[],cin:'',id_ferme:'',dateCulture:'' ,vibrate: false,
      
       isShowDatePicker: false,};
    
    
    }
  


    render(){
        return(
            
            
            <ImageBackground style={{flex:3}} source={require('./ff.png')}>   
                      <View>
                <View style={{height:80}}>
                    <Text style={{top:18,color:'black',fontSize:26,fontWeight:'900',textAlign:'center'}}>Information de votre analyse</Text>
                    </View>
                    
                   <View>
                       <Text  style={{fontSize:26,left:10,fontWeight:'bold',color:'#FF0404',top:70}}>Observations  :</Text>
                       <Text style={{fontSize:20,left:10,color:'#981717',fontWeight:'700',top:70}}>
                       {this.props.navigation.state.params.p}
                       </Text>
                       </View>
                    
                       <View style={{height:100}}>
            
                   
            <TouchableOpacity
            style={syles2.bt2}
            onPress={() => this.props.navigation.navigate('Analyse')}
            >
            <Text
             style={syles2.tx2} 
            
            >Valider</Text>
            </TouchableOpacity>
           
                       </View>
                       </View>
                                                 
                       </ImageBackground>

        );
        }

}
const syles2=StyleSheet.create(
    
    {
            bt1:{
                backgroundColor:'#6A2929',
                position:'absolute',
                width:120,
               // top:300,
                
                height:40,
                borderRadius:20,
                // /padding:20,
    
                
            },
            tx1:{
                color:'#ECECEC',
                position:'absolute',
                //textAlign:'center',
                width:130,
                top:5,
               // fontWeight:'bold',
                fontSize:20,
                height:50,
                left:22,
                
                
                fontStyle:'normal',
                fontFamily:'Reem Kufi',
            },
            bt2:{
                backgroundColor:'#6A2929',
                position:'absolute',
                width:200,
                top:330,
                left:30,
                height:60,
                borderRadius:20,
                // /padding:20,
    
                
            },
            FlexGrowOne: {
                flexGrow : 1
            },
            FlexOne: {
                flex : 1
            },
            tx2:{
                color:'#ECECEC',
                position:'absolute',
                //textAlign:'center',
                width:130,
                top:7,
                fontWeight:'bold',
                fontSize:30,
                height:54,
                left:53,
                
                fontStyle:'normal',
                fontFamily:'Reem Kufi',
            },
                                        
                                
                            })