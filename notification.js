import React,{Component,useState} from 'react';
import {ImageBackground,View,Text,StyleSheet,Image,Button,TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons'; 
import {ImCalendar} from "react-icons/im"; 
import SelectDropdown from 'react-native-select-dropdown'
import {Picker} from '@react-native-picker/picker';
import { color } from 'react-native-elements/dist/helpers';
export default class malade extends Component{
    constructor(){
        super()
        this.state={
          vibrate: false,
          date: new Date(),
          isShowDatePicker: false,
          selecdValueb:'',
          selecdValueb1:'',
          /////////////////////:::://///////////////////
        //  nom_malde:'',
          //date_malde:'',
          //pest_mal:'',
          id_user:'',
         list:[],
     
        };
      //  affiche();
      }
      /////////////////////////////////////////////////////////////////////////////////
     affiche=()=>{
       // this.state.id_user=this.props.navigation.state.params.p;
       // var id_user=this.state.id_user ; 
            var insertAPIURL="http://10.0.2.2:80/api/affiche.php";
            var headers={
                'Accept':'application/json',
                'Content-type':'application.json'
            };
            var Data={
                
             //  id_user:id_user,
             };
             fetch(insertAPIURL,{
                method:'POST',
                headers:headers, 
                body:JSON.stringify(Data)
            }
            )
            .then((Response)=>Response.json())
            .then((Response)=>
            {
               // alert(Response[0].Message);
                   
            this.setState({list:Response.data.result});
          //  alert('ddd');

             
            }
            )
            .catch((error)=>{
                alert("error"+error);
            }
            )
        
    }
   
     
    
    render(){
       
         this.affiche();
        return(

            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles2.FlexGrowOne}
            >
                
             <ScrollView bounces={false}
                  style= {syles2.FlexOne}
                    >
                    <View></View>
      
    
                   
                    <View>
             {
                        this.state.list.map((val,index)=>
                       <View key={index} style={syles2.TextInputWrapper}>
                           <Text style={{fontSize:25}}><Icon name='person' style={{fontSize:40}}/>{val.id_user}</Text> 
                           <Text style={{fontSize:30,borderColor:'#6A2929',
           height:35,
        //   top:0,
          // backgroundColor:'#6A2929',
           width:160,           // borderRadius:20,
           // borderWidth:2,
          //  color:'white',
          //  textAlign:'center',
        }}
            >{val.nom_mald}</Text>
            
                           <Text style={{fontSize:25}}><Icon name='calendar' style={{fontSize:25}}/>{val.date_mald}</Text>  
                           <Text>{val.pestcd}</Text> 
                           
                           </View>
                        )
                    }
             </View>

     
     
                    
            
           </ScrollView>
       
   
            </KeyboardAvoidingView>
        );
    }
}
const syles2=StyleSheet.create(
    
    {
        next1:{
            fontWeight:'bold',
            width:130,
            height:35,
            fontSize:25,
            top:-20,
            left:15,
            color:'#503835'
        },
       
        FlexGrowOne: {
            flexGrow : 1
        },
        FlexOne: {
            flex : 1
        },
        biigBlue:{
            flex : 1,
            color:'#0B6CFF',
            position:'absolute',
            textAlign:'center',
            width:350,
        
            left:70,
            fontSize:40,
            top:25,
            height:60,
            fontWeight:'bold',
            fontStyle:'normal',
            fontFamily:'Reem Kufi',
            
        },
        sizeImg:{
            flex : 1,
        
                width:91,
            
                left:28,
                height:98,
        },
        TextInputWrapper1: {
            backgroundColor:'#ECECEC',
            borderColor:'#6A2929',
            flex: 1,
            height: 100,
            
            margin:35,
            borderRadius:20,
            borderWidth:3,
            textAlign:'center',
        },
                TextInputWrapper: {
                    backgroundColor:'#ECECEC',
                    //borderColor:'#6A2929',
                    flex: 1,
                    height: 200,
                    
                    margin:0,
                   // borderRadius:20,
                   // borderWidth:2,
                    textAlign:'center',
                },
                dropdown: {
                    position: 'absolute',
                    backgroundColor: '#fff',
                    top: 50,
                  },
                next:{
                    fontWeight:'bold',
                    width:300,
                    height:58,
                    fontSize:25,
                    top:7,
                    left:13,
                    textAlign:'center',
                    color:'#503835'
                },
                R:{
                    fontWeight:'bold',
                 fontSize:40,
                 left:10,
                 color:'#503835'
            
                },
              
                
                                        bt:{
                                            flex : 1,
                                            backgroundColor:'#C1B613',
                                           // position:'absolute',
                                            width:200,
                                            marginTop:60,
                                            height:188,
                                            borderRadius:20,
                                            padding:25,
                                            top:-40,
                                            marginBottom:20,
                                            marginLeft:90,
                                            
                                        
                                            
                                        },
                                        
                                      
                                
                            }
)
