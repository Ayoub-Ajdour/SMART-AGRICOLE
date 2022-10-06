import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet,Image,Button,TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default class singIN1 extends Component{
    render(){
        return(
            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles2.FlexGrowOne}
            >
             <ScrollView bounces={false}
                  style= {syles2.FlexOne}
                    >
                       
                     <View>
                     <Text style={syles2.biigBlue}>Koutti Agricole</Text> 
                     <Image source={require('./1.webp')} style={syles2.sizeImg} />
                     </View>
            <View >
            <TextInput  style={syles2.TextInputWrapper} placeholder="email" />
            </View >
       <View  > 
           <TextInput  style={syles2.TextInputWrapper} placeholder="Mot de passe" />
           </View >
           </ScrollView>
            <View>
            <TouchableOpacity style={syles2.bt}  >
            
        <Text  style={syles2.next} >Se Connecter</Text>
             </TouchableOpacity>
        </View>
            </KeyboardAvoidingView>
        );
    }
}
const syles2=StyleSheet.create(
    
    {
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
        
                TextInputWrapper: {
                    backgroundColor:'#ECECEC',
                    borderColor:'#6A2929',
                    flex: 1,
                    height: 58,
                    
                    margin:35,
                    borderRadius:20,
                    borderWidth:2,
                    textAlign:'center',
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
                                        next:{
                                            fontWeight:'bold',
                                            width:300,
                                            height:28,
                                            fontSize:25,
                                            top:-20,
                                            left:3,
                                            color:'#503835'
                                        },
                                      
                                
                            }
)
