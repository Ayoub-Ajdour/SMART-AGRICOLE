import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet,Image,Button,TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Picker} from '@react-native-picker/picker';

export default class prapartionCont extends Component{
    constructor(){
        super();
        this.state={selecdValueSol:'',Surface:'',Addresse:'',NomFerme:'',CIN:''};
    }
    InserRecord=()=>{
        this.state.CIN=this.props.navigation.state.params.p;
        var CIN=this.state.CIN;
        var selecdValueSol=this.state.selecdValueSol;
        var Surface=this.state.Surface;
        var Addresse=this.state.Addresse;
        var NomFerme=this.state.NomFerme;
       // alert("cc "+CIN);


        if(selecdValueSol.length==0||Surface.length==0||Addresse.length==0||NomFerme.length==0){
            alert("svp complte remplisage des champs ");
    }
    else{


        var insertAPIURL="http://10.0.2.2:80/api/insertFerme.php";
        var headers={
            'Accept':'application/json',
            'Content-type':'application.json'
        };
        var Data={
            NomFerme:NomFerme,
            CIN:CIN,
            Addresse:Addresse,
            selecdValueSol:selecdValueSol,
            Surface:Surface

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
           if(Response[0].Message=='V'){
         //  alert("good");
            this.props.navigation.navigate('pp');
        }
        else{
            alert("no");
        }
            
        }
        )
        .catch((error)=>{
            alert("error"+error);
        }
        )
    }



    


       
    }
    show=(value)=>{
    
          this.setState({selecdValueSol:value});
         }
     render(){
         return(
            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles2.FlexGrowOne}
            >
             <ScrollView bounces={false}
                  style= {syles2.FlexOne}
                    >
                        
                        <View  >   
                        <Text style={syles2.biigBlue}>Koutti Agricole</Text> 
               <Image source={require('./1.webp')} style={syles2.sizeImg} />
               </View >
           <View >
               <Text style={{fontWeight:'700',fontSize:20,top:18,color:'black'}}>  Nom de ferme</Text>
                <TextInput  style={syles2.TextInputWrapper} placeholder="Ferme1"   onChangeText={NomFerme=>this.setState({NomFerme})}
                />
                </View >

                <View >
               <Text style={{fontWeight:'700',fontSize:20,top:18,color:'black'}}>  Addresse</Text>
                <TextInput  style={syles2.TextInputWrapper} placeholder="Example"   onChangeText={Addresse=>this.setState({Addresse})}
                />
                </View >
           <View  > 
               <Text  style={{fontWeight:'700',fontSize:20,top:18,color:'black'}}>  Surface De ferme</Text>
               <TextInput  style={syles2.TextInputWrapper} placeholder="0000 Ha" keyboardType='numeric' onChangeText={Surface=>this.setState({Surface})}
               />
               </View >
               <Text style={{fontWeight:'700',fontSize:20,top:18,color:'black'}}>   Type de sol</Text>

               <View 
             style={syles2.TextInputWrapper}
             >

               <Picker
             
               onValueChange={this.show.bind()}
               selectedValue={this.state.selecdValueSol}
               >
                    
                    <Picker.Item   label="Select type de sol" value="0"></Picker.Item>
                   
                    <Picker.Item   label="En sol lourd" value="2"></Picker.Item>
                    <Picker.Item   label="En sol léger" value="3"></Picker.Item>
                    </Picker>

            </View >
           
                </ScrollView>
            <View>
            <TouchableOpacity style={syles2.bt}  onPress={this.InserRecord}
            >
            
        <Text  style={syles2.next} >Suivant</Text>
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
                    margin:20,
                    borderRadius:20,
                    borderWidth:2,
                    textAlign:'center',
                },
              
                
                                        bt:{
                                            flex : 1,
                                            backgroundColor:'#C1B613',
                                           // position:'absolute',
                                            width:200,
                                            marginTop:30,
                                            height:188,
                                            borderRadius:20,
                                            padding:25,
                                            marginBottom:20,
                                            marginLeft:90,
                                            
                                        
                                            
                                        },
                                        next:{
                                            fontWeight:'bold',
                                            width:130,
                                            height:28,
                                            fontSize:25,
                                            top:-20,
                                            left:31,
                                            color:'#503835'
                                        },
                                      
                                
                            }
)
