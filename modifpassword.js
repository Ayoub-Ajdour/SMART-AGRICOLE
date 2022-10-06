import React,{Component} from 'react';  
import { View, Text, Button,Image,StyleSheet,TouchableOpacity,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';
export default class modifpassword extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            rpassword:'',
        }
    }
    InserRecord(){
        this.state.email=this.props.navigation.state.params.p;
        var email=this.state.email;
        var password=this.state.password;
        var rpassword=this.state.rpassword;
        
        if(password.length<8){
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
          }else if(password !== rpassword){
            Alert.alert(
                "Mot de passe",
                "Le mot de passe et son confirmation n'est pas similaire",
                [
                  
                  { text: "Ok" }
                ]
              );

          }
          else{

            var insertAPIURL="http://10.0.2.2:80/api/Insertpwd.php";
        var headers={
            'Accept':'application/json',
            'Content-type':'application.json'
        };
        var Data={
           // FirstName:FirstName,
           // LastName:LastName,
           email:email,
           password:password,
           

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
           
            this.props.navigation.navigate('pp');
           
            }
            
            
        
        )
        .catch((error)=>{
            alert("error"+error);
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
                         <View>
                     <Text style={syles2.biigBlue}>Koutti Agricole</Text> 
                     <Image source={require('./1.webp')} style={syles2.sizeImg} />
                     
                     
                   
                     <Text style={{top:80,fontSize:20,fontWeight:'700'}}>  Nouveau password:</Text>
                     <Text style={{top:180,fontSize:20,fontWeight:'700'}}>  Confirme password:</Text>
                     
                        
                <TextInput  placeholder="Nouveau password"  placeholderTextColor={'gray'} style={syles2.TextInputWrapper} onChangeText={password=>this.setState({password})}
/>
<TextInput  placeholder="Cofirme password"  placeholderTextColor={'gray'} style={syles2.TextInputWrapper} onChangeText={rpassword=>this.setState({rpassword})}
/>
                
                </View >
                         </ScrollView>
            <View>
            <TouchableOpacity style={syles2.bt} 
            onPress={()=>this.InserRecord()}
            >
            
        <Text  style={syles2.next} >Next</Text>
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
                  //  marginTop:160,
                    marginTop:67,
                   marginLeft:15,
                   marginRight:15,
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
                                            left:50,
                                            color:'#503835'
                                        },
                                      
                                
                            }
)
