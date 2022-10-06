import React,{Component} from 'react';  
import { View, Text, Button,Image,StyleSheet,TouchableOpacity,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'; 
export default class menu1 extends Component{
     constructor(){
        super();
        this.state={
            cin:'',
            id_ferme:''
          }
      //   this.state.id_user=this.props.navigation.state.params.p;
          
     }
     sendmald=()=>{
        this.state.cin=this.props.navigation.state.params.p1;
        this.state.id_ferme=this.props.navigation.state.params.p2;
       /// alert(this.state.cin);
       /// alert(this.state.id_ferme);
        this.props.navigation.navigate('malade',
       {p1:this.state.cin
        ,p2:this.state.id_ferme});
        

     }
     sendCompt=()=>{
        this.state.cin=this.props.navigation.state.params.p1;
        this.state.id_ferme=this.props.navigation.state.params.p2;
        this.props.navigation.navigate('profile',
        {p1:this.state.cin
         ,p2:this.state.id_ferme});
     }
     sendravg=()=>{
         
         this.state.cin=this.props.navigation.state.params.p1;
        this.state.id_ferme=this.props.navigation.state.params.p2;
        this.props.navigation.navigate('Ravageur',
        {p1:this.state.cin
         ,p2:this.state.id_ferme});
     }
     sendMAt=()=>{
        this.state.cin=this.props.navigation.state.params.p1;
        this.state.id_ferme=this.props.navigation.state.params.p2;
      //  alert(this.state.id_ferme);
        this.props.navigation.navigate('nextMaterials',
        {p1:this.state.cin
         ,p2:this.state.id_ferme});
     }
     sendPro=()=>{
        this.state.cin=this.props.navigation.state.params.p1;
        this.state.id_ferme=this.props.navigation.state.params.p2;
        this.props.navigation.navigate('Production', {p1:this.state.cin
            ,p2:this.state.id_ferme});
     }
     sendAnl=()=>{
        this.state.cin=this.props.navigation.state.params.p1;
        this.state.id_ferme=this.props.navigation.state.params.p2;
        this.props.navigation.navigate('Analyse',
        {p1:this.state.cin
         ,p2:this.state.id_ferme});
     }
    render(){
        return(
            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles.FlexGrowOne}
            >
              
                
                <View style={{width:600,height:80,backgroundColor:'#ECECEC'}}>
                <Image source={require('./home1.png')} style={{height:70,width:80,left:155,top:8,borderBottomWidth:3,borderColor:'red'}} />
                <Text style={{left:166,top:-7,color:'red',fontWeight:'900'}}>_________</Text>
                <TouchableOpacity onPress={()=>this.sendCompt()}>
                <Image source={require('./prof1.png')} style={{height:78,width:80,left:305,top:-89,borderBottomWidth:3,borderColor:'red'}} />                 
               
                </TouchableOpacity>
                <TouchableOpacity >
                <Image source={require('./pub1.png')} style={{height:70,width:70,left:10,top:-156,borderBottomWidth:3,borderColor:'red'}} />                 
               
                </TouchableOpacity>
                </View>
                <ScrollView bounces={false}
                  style= {syles.FlexOne}
                    >
                
                <View style={syles.TextInputWrapper}>
                <TouchableOpacity
                onPress={() => this.sendAnl()}
                >
       <Text style={syles.tx1}>ANALYSE</Text>
       </TouchableOpacity>
       <Image source={require('./an2.png')} style={{height:45,width:43,left:266,top:6}}/>
       </View >
       <View  style={syles.TextInputWrapper}>
       <TouchableOpacity
        onPress={()=>this.sendMAt()}
     //  onPress={() => this.props.navigation.navigate('nextMaterials')} 
       >
       <Text style={syles.tx2}>MATERIEL</Text>
       </TouchableOpacity>
       <Image source={require('./b1.png')} style={{height:45,width:50,left:260,top:6}}/>
       </View >
       <View  style={syles.TextInputWrapper}>
       <TouchableOpacity
      onPress={() => this.sendPro()} 
       >
       <Text style={syles.tx3}>PRODUCTION</Text>
       </TouchableOpacity>
       <Image source={require('./p2.png')} style={{height:45,width:44,left:264,top:6}}/>
       </View>
       <View  style={syles.TextInputWrapper}>
       <TouchableOpacity
       onPress={()=>this.sendmald()}
       
       >
       <Text style={syles.tx4}>MALADIE</Text>
       </TouchableOpacity>
       <Image source={require('./virus.png')} style={{height:45,width:45,left:263,top:6}}/>
       </View>
       <View  style={syles.TextInputWrapper}>
       <TouchableOpacity
            onPress={()=>this.sendravg()}
      >
       <Text style={syles.tx5}>RAVAGEUR</Text>
       </TouchableOpacity>
       <Image source={require('./R1.png')} style={{height:43,width:43,left:261,top:6}}/>
       </View>
      
               
       </ScrollView>
      
      
       
       </KeyboardAvoidingView>
        );
    }}
    const syles=StyleSheet.create(
        {

            
            TextInputWrapper: {
                backgroundColor:'#ECECEC',
                borderColor:'#6A2929',
                flex: 1,
                height: 60,
                width:320,
                margin:25,
                left:15,
                borderRadius:20,
                borderWidth:2,
                textAlign:'center',
            },
            sizeImg:{
          // position:'absolute',
            width:91,
            top:-67,
            left:40,
            height:98,

            },
            biigBlue:{
                color:'#0B6CFF',
              // position:'absolute',
                textAlign:'center',
                width:250,
                top:20,
                left:100,
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