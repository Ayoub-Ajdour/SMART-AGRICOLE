import React,{Component} from 'react';  
import { View, Text, Button,Image,StyleSheet,TouchableOpacity,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'; 
export default class profile extends Component{
     constructor(){
        super();
        this.state={
            cin:'',
            id_ferme:''
          }
          
      //   this.state.id_user=this.props.navigation.state.params.p;
          
     }
     log=()=>{
        this.props.navigation.navigate('opop');
     }
     sendgestion=()=>{
        this.state.cin=this.props.navigation.state.params.p1;
        this.state.id_ferme=this.props.navigation.state.params.p2;
        
        this.props.navigation.navigate('moncompt',{p1:this.state.cin
            ,p2:this.state.id_ferme});
     }
    render(){
        return(
            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles.FlexGrowOne}
            >
             
                <ScrollView bounces={false}
                  style= {syles.FlexOne}
                    >
                
                <View style={{width:600,height:80,backgroundColor:'#ECECEC'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('menu1')}>
                <Image source={require('./home1.png')} style={{height:70,width:80,left:155,top:8,borderBottomWidth:3,borderColor:'red'}} />
                </TouchableOpacity>
            
                <Image source={require('./prof1.png')} style={{height:78,width:80,left:305,top:-74,borderBottomWidth:3,borderColor:'red'}} />                 
                <Text style={{left:316,top:-108,color:'red',fontWeight:'900',fontSize:33}}>_____</Text>
                
                <TouchableOpacity >
                <Image source={require('./pub1.png')} style={{height:70,width:70,left:10,top:-180,borderBottomWidth:3,borderColor:'red'}} />                 
               
                </TouchableOpacity>
                
                </View>
                <View style={{height:210}}>
                <Image source={require('./R.png')} style={{height:140,width:140,top:70,alignSelf:'center'}}/>
                </View>
                <View>
                <TouchableOpacity style={syles.TextInputWrapper}  onPress={()=>this.sendgestion()}
                >
            
           <Text  style={{textAlign:'center',fontSize:30,top:7,fontWeight:'600',fontStyle:'italic'}} >Gestion de compte</Text>
                 </TouchableOpacity>
                </View>
               
                <View>
                <TouchableOpacity style={syles.TextInputWrapper}  //onPress={this.InserRecord}
                >
            
           <Text  style={{textAlign:'center',fontSize:30,top:7,fontWeight:'600',fontStyle:'italic'}} onPress={()=>this.log()}> Se Deconnecter</Text>
                 </TouchableOpacity>
                </View>
                
                
       </ScrollView>
      
      
       
       </KeyboardAvoidingView>
        );
    }}
    const syles=StyleSheet.create(
        {
            sizeImg3:{
                //    position:'absolute',
                width:50,
               // top:580,
                left:10,
               height:50,
               top:10,
               
               
                //fontSize:30
                
            
                },
            TextInputWrapper: {
                backgroundColor:'#ECECEC',
                borderColor:'#6A2929',
                flex: 1,
                height: 60,
                width:320,
                margin:25,
                left:15,
            borderRadius:60,
               // borderWidth:2,
                textAlign:'center',
            },
            sizeImg:{
            position:'absolute',
            width:91,
            top:630,
            left:40,
            height:98,

            },
            biigBlue:{
                color:'#0B6CFF',
              //  position:'absolute',
                textAlign:'center',
                width:250,
               // top:670,
                //left:100,
                fontSize:30,
                height:54,
                fontWeight:'bold',
                fontStyle:'normal',
                fontFamily:'Reem Kufi',
                
            },
            FlexGrowOne: {
                flexGrow : 1
            },
            FlexOne: {
                flex : 1
            },
            bt1:{
                backgroundColor:'#ECECEC',
                position:'absolute',
                width:260,
                top:170,
                left:50,
                height:58,
                borderRadius:20,
                //padding:20,
                borderColor:"#6A2929",
                borderWidth:3,
                borderRadius:15,
                
                
            },
            tx1:{
                color:'#000000',
                position:'absolute',
                textAlign:'center',
                width:200,
                top:10,
                fontWeight:'bold',
                fontSize:25,
                height:60,
                left:55,
                
                fontStyle:'normal',
                fontFamily:'Reem Kufi',
            },
            bt2:{
                backgroundColor:'#ECECEC',
                position:'absolute',
                width:260,
                top:250,
                left:50,
                height:58,
                borderRadius:20,
                //padding:20,
                borderColor:"#6A2929",
                borderWidth:3,
                borderRadius:15,
                
                
            },
            tx2:{
                color:'#000000',
                position:'absolute',
                textAlign:'center',
                width:200,
                top:10,
                fontWeight:'bold',
                fontSize:25,
                height:60,
                left:55,
                
                fontStyle:'normal',
                fontFamily:'Reem Kufi',
            },
            bt3:{
                backgroundColor:'#ECECEC',
                position:'absolute',
                width:260,
                top:330,
                left:50,
                height:58,
                borderRadius:20,
                //padding:20,
                borderColor:"#6A2929",
                borderWidth:3,
                borderRadius:15,
                
                
            },
            tx3:{
                color:'#000000',
                position:'absolute',
                textAlign:'center',
                width:200,
                top:10,
                fontWeight:'bold',
                fontSize:25,
                height:60,
                left:55,
                
                fontStyle:'normal',
                fontFamily:'Reem Kufi',
            },
            bt4:{
                backgroundColor:'#ECECEC',
                position:'absolute',
                width:260,
                top:410,
                left:50,
                height:58,
                borderRadius:20,
                //padding:20,
                borderColor:"#6A2929",
                borderWidth:3,
                borderRadius:15,
                
                
            },
            tx4:{
                color:'#000000',
                position:'absolute',
                textAlign:'center',
                width:200,
                top:10,
                fontWeight:'bold',
                fontSize:25,
                height:60,
                left:55,
                
                fontStyle:'normal',
                fontFamily:'Reem Kufi',
            },
            bt5:{
                backgroundColor:'#ECECEC',
                position:'absolute',
                width:260,
                top:490,
                left:50,
                height:58,
                borderRadius:20,
                //padding:20,
                borderColor:"#6A2929",
                borderWidth:3,
                borderRadius:15,
                
                
            },
            tx5:{
                color:'#000000',
                position:'absolute',
                textAlign:'center',
                width:200,
                top:10,
                fontWeight:'bold',
                fontSize:25,
                height:60,
                left:55,
                
                fontStyle:'normal',
                fontFamily:'Reem Kufi',
            },
            
        }
        )