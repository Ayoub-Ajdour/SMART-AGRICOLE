import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet,Image,Button,TouchableOpacity,TextInput, KeyboardAvoidingView,Alert, ScrollView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default class insc extends Component{
    constructor(props){
        super(props);
        this.state={FirstName:'',LastName:'',email:'',telephone:'',CIN:'',password:'',confirmPassword:'',codeverf:''};

   }
   InserRecord=()=>{
      
    var FirstName=this.state.FirstName;
    var LastName=this.state.LastName;
    var email=this.state.email;
    var telephone=this.state.telephone;
    var password=this.state.password;
    var CIN=this.state.CIN;
    var confirmPassword=this.state.confirmPassword;

  
    var checkEmail = RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i);
    if(FirstName.length==0||LastName.length==0||email.length==0||telephone.length==0||password.length==0||CIN.length==0||confirmPassword.length==0){
            
            Alert.alert(
                "Attention",
                "Pour vous creer un compte,remplire les champs",
                [
                  
                  { text: "Ok" }
                ]
              );
    }else if (!(checkEmail).test(email)){
        
            Alert.alert(
                "Invalid email",
                "Pour vous creer un compte,remplire les champs par des vrais information",
                [
                  
                  { text: "Ok" }
                ]
              );
      } else if (password.length<8){

        Alert.alert(
            "Mot de passe",
            "Minimum 08 characters required",
            [
              
              { text: "Ok" }
            ]
          );
      }else if (!((/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(password))){
        Alert.alert(
            "Mot de passe",
            "Utilisation d'un special character au minimum est obligatorie",
            [
              
              { text: "Ok" }
            ]
          );
      }else if (((/[ ]/).test(password))){
        Alert.alert(
            "Mot de passe",
            "L'utilisation d'espace n'est pas autorisé",
            [
              
              { text: "Ok" }
            ]
          );
      }else if(password !== confirmPassword){
        Alert.alert(
            "Mot de passe",
            "Le mot de passe et son confirmation n'est pas similaire",
            [
              
              { text: "Ok" }
            ]
          );
      }else{
        var insertAPIURL="http://10.0.2.2:80/api/insert.php";
        var headers={
            'Accept':'application/json',
            'Content-type':'application.json'
        };
        var Data={
           // FirstName:FirstName,
           // LastName:LastName,
           email:email,
          //  password:password,
           CIN:CIN

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
           
            if(Response[0].Message=="123"){
                Alert.alert(
                    "Attention",
                    "Le compte déja existe,Vous voulez connecter",
                    [
                      
                      { text: "Oui",onPress:() => this.props.navigation.navigate('pp')  },
                      {text:"Non"}
                    ]
                  );
           }else if(Response[0].Message=="bad"){
                Alert.alert(
                    "Attention",
                    "Il y a un ereur ",
                    [
                      
                      { text: "Ok"  }
                    ]
                  );
           }
           else{
               this.state.codeverf=Response[0].Message;
           //    var codeverf=this.state.codeverf;
         //  alert('jjjjjjjjjjjj');
            this.props.navigation.navigate('ver',{
                x1:this.state.CIN,
                x2:this.state.FirstName,
                x3:this.state.LastName,
                x4:this.state.password,
                x5:this.state.email,
                x6:this.state.codeverf,
                x7:this.state.telephone,
            });
            }
            
            
        }
        )
        .catch((error)=>{
            
        }
        )
    }
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
                       
               <Image source={require('./1.webp')} style={syles2.sizeImg} />
               <Text style={syles2.biigBlue}>Smart Agricole</Text>
               </View >
           <View >
                <TextInput  style={syles2.TextInputWrapper} placeholder="Prenom"   onChangeText={FirstName=>this.setState({FirstName})}/>
                </View >
           <View  > 
               <TextInput  style={syles2.TextInputWrapper} placeholder="Nom" onChangeText={LastName=>this.setState({LastName})}/>
               </View >
           <View>  
                <TextInput  style={syles2.TextInputWrapper}  placeholder="email"  onChangeText={email=>this.setState({email})}/>
                </View >

                <View>  
              
                <TextInput  style={syles2.TextInputWrapper}  placeholder="numéro de telephone"  keyboardType='numeric' onChangeText={telephone=>this.setState({telephone})}
                />
                </View >

           <View  >
                 <TextInput   style={syles2.TextInputWrapper} placeholder="CIIIN" onChangeText={CIN=>this.setState({CIN})}/>
                 </View >
           <View >  
                <TextInput  style={syles2.TextInputWrapper} placeholder="Mot de passe" onChangeText={password=>this.setState({password})} secureTextEntry/>
                </View >
           <View  >  
                <TextInput  style={syles2.TextInputWrapper} placeholder="confirmation  mot de passe"onChangeText={confirmPassword=>this.setState({confirmPassword})} secureTextEntry/>
                </View >
         
           
            </ScrollView>
            <View 
            style={{height:80}}
            >
                
            <TouchableOpacity style={syles2.bt}  onPress={this.InserRecord}>
            
        <Text  style={syles2.next} >Suivant</Text>
             </TouchableOpacity>
             <TouchableOpacity style={syles2.bto}
             onPress={()=>this.props.navigation.navigate('opop')}
             >
                 <Text style={syles2.txt1}>Annuler</Text>
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
                    margin:15,
                    borderRadius:20,
                    borderWidth:2,
                    textAlign:'center',
                },
              
                
                                        bt:{
                                          
                                            backgroundColor:'#C1B613',
                                           // position:'absolute',
                                            width:190,
                                            height:50,
                                            borderRadius:20,
                                        
                                            left:180,
                                            top:10
                                            
                                        
                                            
                                        },
                                        bto:{
                                           
                                            backgroundColor:'#C1B613',
                                           // position:'absolute',
                                            width:130,
                                            marginTop:30,
                                            height:40,
                                            borderRadius:20,
                                            
                                            left:40,
                                            top:-70
                                            
                                        
                                            
                                        },
                                        next:{
                                            fontWeight:'bold',
                                            width:130,
                                            height:28,
                                            fontSize:25,
                                            top:6,
                                            left:50,
                                            color:'#503835'
                                        },
                                        txt1:{
                                            fontWeight:'bold',
                                            width:130,
                                            height:28,
                                            fontSize:20,
                                            top:4,
                                            left:30,
                                            color:'#503835'
                                        },

                                        
                                        bt11:{
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
                                            left:90
                                            
                                        
                                            
                                        },
                                        next1:{
                                            fontWeight:'bold',
                                            width:130,
                                            height:28,
                                            fontSize:25,
                                            top:-20,
                                            left:30,
                                            color:'#503835'
                                        },
                                
                            }
)
