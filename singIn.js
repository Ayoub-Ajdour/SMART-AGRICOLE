import React,{Component} from 'react';
import {Alert,ImageBackground,View,Text,StyleSheet,Image,Button,TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default class singIn extends Component{
    constructor(props){
        super(props);
        this.state={email:'',password:'',cin:'',id_ferme:''};
      // this.state.email=this.props.navigation.state.params.p1;
       // this.state.password=this.props.navigation.state.params.p2;

   }
   InserRecord=()=>{
    
    var email=this.state.email;
    var password=this.state.password;
    var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
    if(email.length==0||password.length==0){
           // alert("svp complte remplisage des champs ");
            Alert.alert(
                "Veillez saisir vos information de connexion",
                "Pour vous connecter,entrez l'adresse email et le mot de passe que vous utilisez pour Smart Agricole",
                [
                  
                  { text: "Ok" }
                ]
              );
    }else if (!(checkEmail).test(email)){
         Alert.alert(
                "invalid email!!!",
                "Pour vous connecter,entrez l'adresse email et le mot de passe que vous utilisez pour Smart Agricole",
                [
                  
                  { text: "Ok" }
                ]
              );
      } else{
    var insertAPIURL="http://10.0.2.2:80/api/singIn.php";
        var headers={
            'Accept':'application/json',
            'Content-type':'application.json'
        };
        var Data={
            email:email,
            password:password
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
           // alert("yeeeyy"+Response[0].Message);
            if(Response[0].Message=="email or password incorrect"){
                Alert.alert(
                    "email or password incorrect !!!",
                    "Pour vous connecter,entrez l'adresse email et le mot de passe que vous utilisez pour Smart Agricole",
                    [
                      
                      { text: "Ok" }
                    ]
                  );
            }else{
                 
               // alert(Response[0].Message);
               this.state.cin=Response[0].Message1;
               this.state.id_ferme=Response[0].Message2;
               if(Response[0].Message3=="1"){
            //alert(Response[0].Message2);
                this.props.navigation.navigate('menu1'
                ,{p1:this.state.cin,
                p2:this.state.id_ferme}
                );
                    
                }else{
                  //  alert(Response[0].Message3);
                    this.props.navigation.navigate('pageAdmin');
                }
                  
               
            }
            
            
        }
        )
        .catch((error)=>{}
        )
    

}
   }
          Oblier=()=>{
        this.props.navigation.navigate('forgetpaasword');
      }
      
    render(){
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
                <Text style={{top:23,fontSize:20,fontWeight:'700',color:'black'}}> Entre votre email :</Text>
            <TextInput  style={syles2.TextInputWrapper} placeholder="email"  onChangeText={email=>this.setState({email})}/>
            </View >
       <View> 
       <Text style={{top:23,fontSize:20,fontWeight:'700',color:'black'}}> Mot de passe :</Text>
           <TextInput  style={syles2.TextInputWrapper} placeholder="password"  onChangeText={password=>this.setState({password})} secureTextEntry/>
           <Text  style={{fontSize:18,fontWeight:'400',color:'black',top:-40,left:180}} onPress={this.Oblier}>Mot de passe oublié ?</Text>
           </View >
           </ScrollView>
            <View>
            <TouchableOpacity style={syles2.bt}  onPress={this.InserRecord}>
            
        <Text  style={syles2.next} >Connexion</Text>
             </TouchableOpacity>
        </View>
        <Text style={syles2.next1} onPress={()=>this.props.navigation.navigate('inerface')}>Annuler</Text>
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
                    margin:40,
                    borderRadius:20,
                    borderWidth:3,
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
                                            marginBottom:20,
                                            marginLeft:90,
                                            
                                        
                                            
                                        },
                                        next:{
                                            fontWeight:'bold',
                                            width:160,
                                            height:28,
                                            fontSize:25,
                                            top:-20,
                                            left:5,
                                            color:'#503835'
                                        },
                                        next1:{
                                            fontWeight:'bold',
                                            width:160,
                                            height:28,
                                            fontSize:25,
                                            top:-25,
                                            left:220,
                                            color:'#503835'
                                        },
                                      
                                
                            }
)
