import React,{Component} from 'react';
import {ImageBackground,Alert,View,Text,StyleSheet,Image,Button,TouchableOpacity,TextInput} from 'react-native';
export default class pinPourMdifpass extends Component{
    constructor(props){
        super(props);
        this.state={
            verfication:'',
            email:'',
            code:''
        }
    }
    InserRecord(){
      
        this.state.email=this.props.navigation.state.params.p;
        var email=this.state.email;
        this.state.code=this.props.navigation.state.params.p1;
        var code=this.state.code;
        var verfication=this.state.verfication;
        //alert(code);
        if(code==verfication){
            this.props.navigation.navigate('modifpassword',{p:email });
        }else{
                   Alert.alert(
                    "Pin est faux",
                    "Pour continuer,entrez le pin que l'envoye à votre adresse email",
                    [
                      
                      { text: "Ok" }
                    ]
                  );
        }



        
    }
    render(){
        return(
            <View>
                <Text style={{fontWeight:'700',top:100,left:20,fontSize:20,color:'black'}}>entre votre code</Text>
                <TextInput style={syles2.txi1} placeholder="0000"  onChangeText={verfication=>this.setState({verfication})}
                     />
                <TouchableOpacity
        style={syles2.bt}
            onPress={()=>this.InserRecord()}
        >
        <Text style={syles2.tx2}>Suivant</Text>
        </TouchableOpacity>
            </View>
        );
    }
    }
    const syles2=StyleSheet.create(
    
        {
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
                        top:250,
                        left:100,
                        height:60,
                        borderRadius:20,
                        padding:20,
            
                        
                    },
                }
    )
