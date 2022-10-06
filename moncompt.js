import React,{Component} from 'react';  
import { View, Text, Button,Image,StyleSheet,TouchableOpacity,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'; 
export default class moncompt extends Component{
     constructor(){
        super();
        
        this.state={
            cin:'',
            id_ferme:'',
            listData:[]
          }
      //   this.state.id_user=this.props.navigation.state.params.p;
      
     }
     
     async ambiListData(){
           
        //
       // alert(this.state.id_ferme);
        //alert("h");
       /* this.state.id_ferme=this.props.navigation.state.params.p2;
        var id_ferme=this.state.id_ferme;
        */
        this.state.cin=this.props.navigation.state.params.p1;
        var cin=this.state.cin;
       // alert(cin);
       // alert(cin);
        //alert(cin);
    //alert("hey");
    //alert("heyyyyyy");
    
    var Data={
        cin:cin
    };
    var headers={
        'Accept':'application/json',
        'Content-Type':'application.json'
    };
    //alert("heyyy1");
    var insertAPIURL="http://10.0.2.2:80/api/comptInfo1.php";
    fetch(insertAPIURL,{
        method:'POST',
        headers:headers, 
        body:JSON.stringify(Data)
    }
    )
    .then((Response)=>Response.json())
    .then((Response)=>
    {
            /////////////////////////////////list data amertid s info n user tzaytasn icons n moidifier
           
            this.setState({listData:Response.data.result});
           // alert(val.Name);
        
        }
        )
        .catch((error)=>
        alert("Error"+error)
        )
       // alert("heyyy1");
    }
     changePass=(val)=>{
        this.props.navigation.navigate('modifpassword',{p:val });
     }
    render(){
        this.ambiListData();
        return(
            
            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles.FlexGrowOne}
            >
                <View  style={{width:600,height:80,backgroundColor:'#ECECEC'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('profile')}>
                <Image source={require('./arrow.png')} style={syles.sizeImg3} />
                </TouchableOpacity>
                    
                </View>
                <ScrollView bounces={false}
                  style= {syles.FlexOne}
                    >

                
                
                <View style={{height:210}}>
                <Image source={require('./R.png')} style={{height:140,width:140,top:70,alignSelf:'center'}}/>
                </View>
                <View>
                {
                    this.state.listData.map((val,index)=>
                    (

                        <View key={index}>
                           
                            
                               <View style={syles.TextInputWrapper}>
                                    <Text  style={{textAlign:'center',top:20}}>   {val.cin} </Text> 
                                    </View>
                               <View style={syles.TextInputWrapper}>
                                    <Text  style={{textAlign:'center',top:20}}>{val.Nom}</Text>
                                    </View>
                               <View style={syles.TextInputWrapper}>  
                                   <Text  style={{textAlign:'center',top:20}}>{val.prenom}</Text>
                                   </View>
                               <View style={syles.TextInputWrapper}> 
                                   <Text  style={{textAlign:'center',top:20}}>{val.phone}</Text>
                                   </View >
                               <View style={syles.TextInputWrapper}>   
                                      <Text style={{textAlign:'center',top:20}} >{val.email}</Text>
                               </View>
                               <View>
                <TouchableOpacity style={syles.TextInputWrapperi} onPress={()=>this.changePass(val.email)}>
                <Text style={{textAlign:'center',top:15,fontSize:20,fontWeight:'bold',color:'#ECECEC'}} >Changer Mot de passe</Text>
                </TouchableOpacity>
                </View>
                                </View>
                    )
                    )
    }
                </View>
               
                
       </ScrollView>
      
      
       
       </KeyboardAvoidingView>
        );
    }}
    const syles=StyleSheet.create(
        {
            sizeImg2:{
                //    position:'absolute',
                width:28,
               // top:580,
                //left:40,
               height:28,
               top:4
                //fontSize:30
                
            
                },
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
                margin:10,
                left:15,
                
            borderRadius:60,
               // borderWidth:2,
                textAlign:'center',

            },
            TextInputWrapperi: {
                backgroundColor:'red',
                borderColor:'red',
                flex: 1,
                height: 60,
                width:320,
                margin:10,
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