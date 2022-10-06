import React,{Component, version} from 'react';
import {ImageBackground,View,Text,Alert,StyleSheet,Image,Button,TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Picker} from  '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'
import { color } from 'react-native-elements/dist/helpers';
export default class infoProductioon extends Component{

    constructor(props){
        super(props);
        //this.state = { date: new Date() }
       // state = { datee: new Date() }
        this.state={date1: new Date(),date2: new Date(),date3:new Date(),nomSP:'',nbrOuv:'',produit:'0',variete:'',surface:'',dest:'',SrsEnerg:'',typeSource1:'',eau:'',typeSource:'',day1:'',year1:'',month1:'',day2:'',year2:'',month2:'',cin:'',id_ferme:'',listData1:[],listData2:[],listData2:[],listData3:[],listData4:[],listData5:[],listData6:[],listData7:[]
        ,prix_eau:'',prix_energie:'',prix_pesticide:'',prix_par_pers_jr:'',prix_engrais:'',prix_plants:''
        ,tprix_eau:'',tprix_energie:'',tprix_pesticide:'',tprix_par_pers_jr:'',tprix_engrais:'',tprix_plants:'',totale:'',datte1:'',datte2:'',secondv:''
    };
    
    
    }
    Insert(){
        var fe;
        this.state.cin=this.props.navigation.state.params.P1;
        var cin=this.state.cin ; 
        this.state.id_ferme=this.props.navigation.state.params.P2;
        var id_ferme=this.state.id_ferme;
        this.state.date1=this.props.navigation.state.params.P3;
        var date1=this.state.date1 ; 
        this.state.date2=this.props.navigation.state.params.P4;
        var date2=this.state.date2;
        this.state.produit=this.props.navigation.state.params.P5;
        var produit=this.state.produit ; 
        this.state.variete=this.props.navigation.state.params.P6;
        var variete=this.state.variete;
        this.state.surface=this.props.navigation.state.params.P7;
        var surface=this.state.surface ; 
        this.state.dest=this.props.navigation.state.params.P8;
        var dest=this.state.dest;
        this.state.SrsEnerg=this.props.navigation.state.params.P9;
        var SrsEnerg=this.state.SrsEnerg; 
        this.state.eau=this.props.navigation.state.params.P10;
        var eau=this.state.eau;
        this.state.surface=this.props.navigation.state.params.P9;
        var surface=this.state.surface; 
        this.state.nbrOuv=this.props.navigation.state.params.P10;
        var nbrOuv=this.state.nbrOuv;

        this.state.typeSource=this.props.navigation.state.params.P11;
        var typeSource=this.state.typeSource; 
        this.state.typeSource1=this.props.navigation.state.params.P12;
        var typeSource1=this.state.typeSource1;
        
        //this.state.date1<this.state.date2 ||this.state.date1==this.state.date2||
        //this.state.produit.length==0 ||
        
          // alert("good");
          

          var date1=this.state.date1; //
          var date2=this.state.date2; //
          var produit=this.state.produit; // 
          var variete=this.state.variete; 
          var surface=this.state.surface; // 
          var dest=this.state.dest; //
          var SrsEnerg=this.state.SrsEnerg; //
          var eau=this.state.eau; //
          var typeSource=this.state.typeSource; //
          var typeSource1=this.state.typeSource1;
          var surface=this.state.surface;
          var nbrOuv=this.state.nbrOuv;
          //alert(' cin '+cin+' id_ferme '+id_ferme+' nbrOuv '+nbrOuv+' date1 '+date1+' date2 '+date2+' produit '+produit+' variete '+variete+' dest '+ dest);
          var InsertAPIURL="http:/10.0.2.2:80/api/insertProduction.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };
          // alert("cin "+cin +"d&"+id_ferme+"+d1 "+date1+" d1 "+date2+" d1 "+produit+" d1 "+variete+" d1 "+surface+" d1 "+dest+" d1 "+SrsEnerg+" d1 "+eau+" d1 "+typeSource+" d1 "+typeSource1);
            var Data={
          cin:cin,////
          id_ferme:id_ferme,///
          nbrOuv:nbrOuv,///
          date1:date1,///
          date2:date2,///
          produit:produit,///
          variete:variete, ///        
          surface:surface,////
          dest:dest,///
          SrsEnerg:SrsEnerg,//
          eau:eau,///
          typeSource:typeSource,///
          typeSource1:typeSource1,//
            };
            fetch(
                InsertAPIURL,
                {
                    method:'POST',
                    headers:headers,
                    body:JSON.stringify(Data)
                    
                }
            )
            .then((Response)=>Response.json())
            .then((Response)=>
            {
               // alert(Response[0].Message);
                //alert("hhhhhhhhhh");
                this.FirstAnl();
                this.props.navigation.navigate('menu1');
                
            }
            )
            .catch((error)=>{}
           // this.props.navigation.navigate('menu1')
            )
            this.props.navigation.navigate('menu1');
            this.FirstAnl();

           // this.props.navigation.navigate('opop')
           
        }
        FirstAnl(){
            this.state.cin=this.props.navigation.state.params.P1;
            var cin=this.state.cin ; 
            this.state.id_ferme=this.props.navigation.state.params.P2;
            var id_ferme=this.state.id_ferme;
            var id_ferme=this.state.id_ferme;
            var temperature=0;
            var ph=0;
            var cycle_plante="Semis";
            var date_suivi=this.state.date1;
            var InsertAPIURL1="http:/10.0.2.2:80/api/insertAn.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };
            
            var Data1={
                cin:cin,
                id_ferme:id_ferme,
                temperature:temperature,
                ph:ph,
                cycle_plante:cycle_plante,
                date_suivi:date_suivi,
            };
            //alert("good");
            fetch(
                InsertAPIURL1,
                {
                    method:'POST',
                    headers:headers,
                    body:JSON.stringify(Data1)
                    
                }
            )
            .then((Response)=>Response.json())
            .then((Response)=>
            {
                //this.props.navigation.navigate('Analyse');
                //alert("hey");
              //  alert(Response[0].Message);
                
            }
            )
            .catch((error)=>
            alert("Error"+error)
            )
            
        }


    render(){
        return(
            <ImageBackground style={{flex:3}} source={require('./tract.png')}>  
           <View>
                <View style={{height:80}}>
                    <Text style={{top:1,color:'black',fontSize:26,fontWeight:'900',textAlign:'center'}}>Information de votre production</Text>
                    </View>
                    
                   <View>
                       <Text  style={{fontSize:26,left:10,fontWeight:'900',color:'black',top:120}}>Les gains de votre production :</Text>
                       <Text style={{fontSize:20,left:10,color:'white',top:120,fontWeight:'bold'}}>
                       {this.props.navigation.state.params.P16}
                       </Text>
                       </View>
                       <View style={{height:50}}></View>
                       <View>
                        <Text style={{fontSize:25,left:10,fontWeight:'900',color:'black',top:130}} >Observation sur date que vous avez choisie :</Text>
                   <Text style={{fontSize:19,left:10,color:'white',top:130,fontWeight:'bold'}}>{this.props.navigation.state.params.P15}</Text>

                       </View>
                       <View style={{height:50}}></View>
                       <View>
                           
                        <Text style={{fontSize:25,left:10,fontWeight:'bold',color:'red',top:70}}>Est-ce-que vous voulez continuer votre opération ?</Text>   
                        </View> 
                                               
                   <View style={{height:60}}>
            
                   <TouchableOpacity
     style={syles2.bt1}
        onPress={() => this.props.navigation.navigate('Production')}
        >
        <Text 
        style={syles2.tx1} 
        
        >Annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={syles2.bt2}
        onPress={() => this.Insert()}
        >
        <Text
         style={syles2.tx2} 
        
        >continue</Text>
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
                top:97,
                left:100,
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
                width:160,
                top:100,
                left:225,
                height:50,
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
                top:6,
                fontWeight:'bold',
                fontSize:25,
                height:54,
                left:32,
                
                fontStyle:'normal',
                fontFamily:'Reem Kufi',
            },
                                        
                                
                            })