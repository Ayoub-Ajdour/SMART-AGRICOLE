import React,{Component,useState} from 'react';
import {ImageBackground,View,Text,StyleSheet,Image,Button,TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons'; 
import {ImCalendar} from "react-icons/im"; 
import SelectDropdown from 'react-native-select-dropdown'
import {Picker} from '@react-native-picker/picker';
import { color } from 'react-native-elements/dist/helpers';
const countries = ["Egypt", "Canada", "Australia", "Ireland"]
export default class Ravageur extends Component{
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
          cin:'',
          id_ferme:'',
         list:[],
         listData1:[],
         listData2:[],
     
        };
     
      this.ambiListData();
      }

      async ambiListData(){
           
     
    var Data={
        
    };
    var headers={
        'Accept':'application/json',
        'Content-Type':'application.json'
    };
    var i="http://10.0.2.2:80/api/mravageur.php";
    fetch(i,
        {
            method:'POST',
            headers:headers,
            body:JSON.stringify(Data)
            
        })
        .then((Datta)=>Datta.json())
        .then((Datta)=>
        {
            
          
            this.setState({listData1:Datta.data.result});
          
        
        }
        )
        .catch((error)=>
        {}
        )

        var Data={
        
        };
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };
        var i="http://10.0.2.2:80/api/mpesticide.php";
        fetch(i,
            {
                method:'POST',
                headers:headers,
                body:JSON.stringify(Data)
                
            })
            .then((Datta)=>Datta.json())
            .then((Datta)=>
            {
                
                //alert("heyyy1")
                this.setState({listData2:Datta.data.result});
               // alert(val.Name);
            
            }
            )
            .catch((error)=>
            {}
            )

    }

      /////////////////////////////////////////////////////////////////////////////////
    send=()=>{
        var selecdValueb=this.state.selecdValueb;
        var selecdValueb1=this.state.selecdValueb1;
        var date=this.state.date;
     this.state.cin=this.props.navigation.state.params.p1;
      var cin=this.state.cin ; 
      this.state.id_ferme=this.props.navigation.state.params.p2;
      var id_ferme=this.state.id_ferme;
      var i=2;
     
      var insertAPIURL="http://10.0.2.2:80/api/affiche.php";
      var headers={
        'Accept':'application/json',
        'Content-type':'application.json'
    };
    var Data={
        i:i,
        id_ferme:id_ferme,
        selecdValueb:selecdValueb,
         cin:cin,
          selecdValueb1:selecdValueb1,
          date:date,
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
        //  alert("hhhhh");
          //  this.affiche();
           //alert(Response[0].Message);
          // alert(this.affiche());
           // this.setState({list:Response.data.result});
          // this.props.navigation.navigate('menu1');
          Alert.alert(
            "Ravageur",
            "Opération terminée avec succès",
            [
              
              { text: "Ok" }
            ]
          );
            
        }
        )
        .catch((error)=>{
            
        }
        )
    

    }
    
    Annuler=()=>{
        this.props.navigation.navigate('menu1');
    }
      //////////////////////////////////////////////////////////////////////////////
      InserRecord(){
        if(this.state.selecdValueb.length==0 || this.state.selecdValueb1==0){
            Alert.alert(
                "Ravageur",
                "Remplire les champs pour valider votre operation",
                [
                  
                  { text: "Ok" }
                ]
              );
          }
          else{
        var selecdValueb=this.state.selecdValueb;
        var selecdValueb1=this.state.selecdValueb1;
        var date=this.state.date;
     this.state.cin=this.props.navigation.state.params.p1;
    
      var cin=this.state.cin ;   
      this.state.id_ferme=this.props.navigation.state.params.p2;
      var id_ferme=this.state.id_ferme;
  //  this.setState(this.send());  
        // alert(this.state.id_user);
       // alert(cin+id_ferme);
           var insertAPIURL="http://10.0.2.2:80/api/InsertRav.php";
            var headers={
                'Accept':'application/json',
                'Content-type':'application.json'
            };
            var Data={
                id_ferme:id_ferme,
             selecdValueb:selecdValueb,
              cin:cin,
               selecdValueb1:selecdValueb1,
               date:date,
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
               // alert("dffffffffffffffffffffffffffffffffffffffffffffffffff");
              this.send();
              //  this.affiche();
               //alert(Response[0].Message);
              // alert(this.affiche());
               // this.setState({list:Response.data.result});
                
            }
            )
            .catch((error)=>{
                alert("error"+error);
            }
            )
        }}
    
    //////////////////////////////////////////////////////////////////////////////////
     show=(value)=>{
    //  alert(this.setState({selecdValueb:value}));

      this.setState({selecdValueb:value});
     }
     show1=(value1)=>{
        // alert(value);
         this.setState({selecdValueb1:value1});
        }
    // var {date} = this.state;
    render(){
        var {date} = this.state;
         
        return(

            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles2.FlexGrowOne}
            >
             <ScrollView bounces={false}
                  style= {syles2.FlexOne}
                    >
                    
      
    
                     <View>
                    
                     <Image source={require('./1.webp')} style={syles2.sizeImg} />
                     <Text style={syles2.biigBlue}>Smart Agricole</Text>
                     </View>
                     <View >
                         <Text style={syles2.R}>Ravageur</Text>
                         </View>
             <View 
             style={syles2.TextInputWrapper}
             >
               <Picker
             
               onValueChange={this.show.bind()}
               selectedValue={this.state.selecdValueb}
               >
                    
                    <Picker.Item   label="Select Un Ravageur" value="0"></Picker.Item>
                    
                    {
                    this.state.listData1.map((val,index)=>
                    (

                    
                    
                    <Picker.Item   label={val.nom_ravageur} value={val.id_ravageur}  key={index}></Picker.Item>
                    ))
                }

                    </Picker>

            </View >
            <View>

      <DateTimePickerModal
          isVisible={this.state.isShowDatePicker}
          mode="date"
          date={this.state.date}
          onConfirm={
            date=>{this.setState({date})}
          }
          onCancel={() => this.setState({ isShowDatePicker: !this.state.isShowDatePicker })}
          //headerTextIOS='Please Select Date'
          confirmTextIOS='OK' />
          <TouchableOpacity  style={syles2.TextInputWrapper}  >
     
     <Text style={syles2.next} >{date.getFullYear()}/{date.getMonth() + 1}/{date.getDate()}</Text>
     <Icon name="calendar"  size={25} style={{top:-45,left:280}} onPress={() => this.setState({ isShowDatePicker: !this.state.isShowDatePicker })}/>  
</TouchableOpacity>
            </View >
       
       <View 
             style={syles2.TextInputWrapper}
             >
               <Picker
             
               onValueChange={this.show1.bind()}
               selectedValue={this.state.selecdValueb1}
               >
                    
                    <Picker.Item   label="select un pesticide" value="0"></Picker.Item>
                    {
                    this.state.listData2.map((val,index)=>
                    (

                    
                    
                    <Picker.Item   label={val.type} value={val.id_pesticide}  key={index}></Picker.Item>
                    ))
                }
                    </Picker>

            </View >
           
           </ScrollView>
            <View>
            <TouchableOpacity style={syles2.bt}  onPress={()=>this.InserRecord()}>
            
        <Text  style={syles2.next1} >Enregistrer</Text>
             </TouchableOpacity>
             <Text style={{top:-60,left:210,fontSize:20,fontWeight:'500',color:'black'}} onPress={()=>this.Annuler()}>Annuler</Text>
        </View>
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
