import React,{Component} from 'react';  
import { View, Text,Alert, Button,Image,StyleSheet,TouchableOpacity,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';
export default class forgetpaasword extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            code:'',
          }
        }
        InserRecord=()=>{
            var email=this.state.email;
            //alert(email);
            var insertAPIURL1="http://10.0.2.2:80/api/forgetpassword.php";
            var headers={
                'Accept':'application/json',
                'Content-type':'application.json'
            };
            var Data={
                // FirstName:FirstName,
                // LastName:LastName,
                email:email,
               //  password:password,
                //CIN:CIN
     
              };
              fetch(insertAPIURL1,{
                method:'POST',
                headers:headers, 
                body:JSON.stringify(Data)
            }
            )
            .then((Response)=>Response.json())
            .then((Response)=>
            {
               

                
                if(Response[0].Message=="F"){
                   /// this.props.navigation.navigate('pinPourMdifpass',{p:this.state.email});
                  
                   Alert.alert(
                    "Attention",
                    "Le compte n'existe pas sur Smart Agricole",
                    [
                      
                      { text: "Ok" }
                    ]
                  );
               }else{
                this.state.code=Response[0].Message;
                this.props.navigation.navigate('pinPourMdifpass',{p:this.state.email,
                    p1:this.state.code
                
                });
               }
              
                
            }
            )
            .catch((error)=>{
                
            }
            )
        }
        Annuler=()=>{
            this.props.navigation.navigate('pp');
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
                     <Text style={syles2.biigBlue}>Smart Agricole</Text> 
                     <Image source={require('./1.webp')} style={syles2.sizeImg} />
                     
                     
                     <Text style={{textAlign:'center',fontSize:35,fontWeight:'900',color:'black'}}>Oublier mot de passe</Text>
                     <Text style={{top:80,fontSize:20,fontWeight:'700'}}>   Entre votre Email :</Text>
                    
                     
                        
                <TextInput  placeholder="Exemple@gmail.com"  placeholderTextColor={'gray'} style={syles2.TextInputWrapper} onChangeText={email=>this.setState({email})}
                />
                </View >
                         </ScrollView>
            <View>
            <TouchableOpacity style={syles2.bt} onPress={this.InserRecord} >
            
        <Text  style={syles2.next} >Suivant</Text>
       
             </TouchableOpacity>
             <Text style={syles2.next1} onPress={()=>this.Annuler()}>Annuler</Text>
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
                            marginTop:100,
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
                                                next1:{
                                                    fontWeight:'bold',
                                                    width:120,
                                                    height:28,
                                                    fontSize:18,
                                                    top:-22,
                                                    left:230,
                                                    color:'#503835'
                                                },
                                              
                                        
                                    }
        )
        