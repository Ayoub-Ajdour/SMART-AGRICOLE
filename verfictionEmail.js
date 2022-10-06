import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet,Image,Button,TouchableOpacity,TextInput} from 'react-native';
export default class img extends Component{
    constructor(props){
        super(props);
        this.state={FirstName:'',LastName:'',email:'',telephone:'',CIN:'',password:'',codeverf:'',verfication:''};

   }
   InserRecord=()=>{
   this.state.FirstName=this.props.navigation.state.params.x2;
    var FirstName=this.state.FirstName;
    this.state.LastName=this.props.navigation.state.params.x3;
    var LastName=this.state.LastName;
    this.state.CIN=this.props.navigation.state.params.x1;
    var CIN=this.state.CIN;
    this.state.email=this.props.navigation.state.params.x5;
    var email=this.state.email;
    this.state.password=this.props.navigation.state.params.x4;
    var password=this.state.password;
    this.state.codeverf=this.props.navigation.state.params.x6;
    var codeverf=this.state.codeverf;
    var verfication=this.state.verfication;
    this.state.telephone=this.props.navigation.state.params.x7;
    var telephone=this.state.telephone;

    var insertAPIURL="http://10.0.2.2:80/api/inser2.php";
        var headers={
            'Accept':'application/json',
            'Content-type':'application.json'
        };
        var Data={
            FirstName:FirstName,
            LastName:LastName,
            CIN:CIN,
            email:email,
            telephone:telephone,
            password:password,
            codeverf:codeverf,
            verfication:verfication

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
            
            if(Response[0].Message=="V"){
                
               this.props.navigation.navigate('prapartionCont',{p:this.state.CIN});
            }else{
               
                  
               alert(Response[0].Message);
                  
               
            }
            
            
        }
        )
        .catch((error)=>{
            alert("error"+error);
        }
        )
    

}
    
    render(){
        return(
            
            <View>
                  <View>
                     <Text style={syles2.biigBlue}>Smart Agricole</Text> 
                     <Image source={require('./1.webp')} style={syles2.sizeImg}
                      />
                     </View>
                <Text style={{fontWeight:'700',fontSize:22,color:'black',top:85,textAlign:'center'}}>
                    Entrer le code que nous avons envoyé au " {this.props.navigation.state.params.x5} "
                </Text>
                <View>
                <TextInput style={syles2.txi1} placeholder="000000"  onChangeText={verfication=>this.setState({verfication})}
                     />
                     </View>
                     <View>
                <TouchableOpacity
        style={syles2.bt}
             onPress={this.InserRecord}
        >
        <Text style={syles2.tx2} 
   
        
        >Suivant</Text>
        </TouchableOpacity>
        <Text style={syles2.next1} onPress={()=>this.props.navigation.navigate('nouveoUser')}>Annuler</Text>
        </View>
            </View>
            
        );
    }
    }
    const syles2=StyleSheet.create(
    
        {
            next1:{
                fontWeight:'bold',
                width:160,
                height:28,
                fontSize:20,
                top:324,
                left:220,
                color:'#503835'
            },
            txi1:{
                backgroundColor:'#ECECEC',
                borderColor:'#6A2929',
                borderWidth:2,
                position:'absolute',
                textAlign:'center',
                width:331,
                top:140,
                height:58,
                left:30,
                borderRadius:20,
                
                    },
                    tx2:{
                        color:'#503835',
                        position:'absolute',
                        textAlign:'center',
                        width:250,
                        fontWeight:'bold',
                        fontSize:36,
                        height:54,
                        left:-20,
                        fontStyle:'normal',
                        fontFamily:'Reem Kufi',
                    },
                    bt:{
                        backgroundColor:'#C1B613',
                        position:'absolute',
                        width:200,
                        top:267,
                        left:100,
                        height:60,
                        borderRadius:20,
                        padding:20,
            
                        
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
                        //flex : 1,
                    
                            width:91,
                        
                           left:28,
                            height:98,
                    },
                }
    )