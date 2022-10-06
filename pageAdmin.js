import React,{Component} from 'react';  
import { View, Text, Button,Image,StyleSheet,TouchableOpacity,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'; 
export default class pageAdmin extends Component{
    constructor(props){
        super(props);
        this.state={listData:[],id_eco:'',prix_eau:'',prix_energie:'',prix_pesticide:'',prix_par_pers_jr:'',prix_engrais:'',prix_plants:'',e:'',p:''};
      //  this.ambiListData()
    }
    async ambiListData(){
           
        //
       // alert(this.state.id_ferme);
        //alert("h");
        
    //alert("hey");
    //alert("heyyyyyy");
    var Data={
        
    };
    var headers={
        'Accept':'application/json',
        'Content-Type':'application.json'
    };
    var i="http://10.0.2.2:80/api/meco.php";
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
            this.setState({listData:Datta.data.result});
           // alert(val.Name);
        
        }
        )
        .catch((error)=>{}
       
        )
    }
    render(){
        this.ambiListData();
        return(

            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles.FlexGrowOne}
            >
                 <View style={{width:600,height:80,backgroundColor:'#ECECEC'}}>
                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('pp')}>
                <Image source={require('./logout.png')} style={syles.sizeImg3} />
                </TouchableOpacity>
                     <Text style={syles.mater}>Modification</Text></View>
                <ScrollView bounces={false}
                  style= {syles.FlexOne}
                    >
               
             
                
                
                <View style={syles.TextInputWrapper}>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Mpesticide')}
                >
       <Text style={syles.tx1}>Pesticide</Text>
       </TouchableOpacity>
       </View >
       <View  style={syles.TextInputWrapper}>
       <TouchableOpacity
    onPress={()=>this.props.navigation.navigate('Mmalade')}
   
       >
       <Text style={syles.tx2}>Maladie</Text>
       </TouchableOpacity>
       </View >
       <View  style={syles.TextInputWrapper}>
       <TouchableOpacity
     onPress={()=>this.props.navigation.navigate('Mravageur')}
       >
       <Text style={syles.tx3}>Ravageur</Text>
       </TouchableOpacity>
       </View>
       <View  style={syles.TextInputWrapper}>
       <TouchableOpacity
     
     onPress={()=>this.props.navigation.navigate('Msol')}

       >
       <Text style={syles.tx4}>Sol</Text>
       </TouchableOpacity>
       </View>
       <View  style={syles.TextInputWrapper}>
       {
                    this.state.listData.map((val,index)=>
                    (
                      
       <View  key={index} >
       <TouchableOpacity
         onPress={()=>this.props.navigation.navigate('uEco',{
             p1:val.prix_eau,
             p2:val.prix_energie,
             p3:val.prix_pesticide,
             p4:val.prix_par_pers_jr,
             p5:val.prix_engrais,
             p6:val.prix_plants,
             
         })}
      >
       <Text style={syles.tx5}>Eco</Text>
       </TouchableOpacity>
       
       </View>
                        ))
                    }
                    </View>
       <View  style={syles.TextInputWrapper}>
       <TouchableOpacity
   
   onPress={()=>this.props.navigation.navigate('Mengrais')}

       >
       <Text style={syles.tx2}>Engrais</Text>
       </TouchableOpacity>
       </View >
       <View  style={syles.TextInputWrapper}>
       <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Mdest')}

       >
       <Text style={syles.tx3}>Dest</Text>
       </TouchableOpacity>
       </View>
       <View  style={syles.TextInputWrapper}>
       <TouchableOpacity
     onPress={()=>this.props.navigation.navigate('Mproduit')}
       
       >
       <Text style={syles.tx4}>Produit</Text>
       </TouchableOpacity>
       </View>
       <View  style={syles.TextInputWrapper}>
       <TouchableOpacity
         onPress={()=>this.props.navigation.navigate('MSom')}
      >
       <Text style={syles.tx5}>TypeSoumenes</Text>
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
                width:40,
               // top:580,
                left:345,
               height:40,
               top:15,
               
               
                //fontSize:30
                
            
                },
            mater:{
                color:'#000000',
                position:'absolute',
                textAlign:'center',
                width:250,
                top:10,
                fontWeight:'bold',
                fontSize:35,
                height:54,
                left:65,
                
                fontStyle:'normal',
                fontFamily:'Reem Kufi',
            },
            
            TextInputWrapper: {
                backgroundColor:'#ECECEC',
                borderColor:'#6A2929',
                flex: 1,
                height: 60,
                width:320,
                margin:15,
                left:19,
                borderRadius:7,
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



