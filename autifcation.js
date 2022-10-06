import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet,Image,Button,TouchableOpacity, Dimensions} from 'react-native';
const {width,height}=Dimensions.get("window");
export default class autifcation extends Component{
   
    render(){
        return(
            <ImageBackground style={{flex:3}} source={require('./log1.webp')}>
            <View >
                <Text style={syles.biigBlue}>Koutti Agricole</Text>
                <Text style={syles.bigBlue}>Your farm in your phone</Text>
                <Image source={require('./1.webp')} style={syles.sizeImg} />
                
        
        <TouchableOpacity
       
        style={syles.bt}
        onPress={() => this.props.navigation.navigate('nouveoUser')} 
        >
        <Text style={syles.tx}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={syles.bt2}
        onPress={() => this.props.navigation.navigate('pp')} 
        >
        <Text style={syles.tx2}>Have an account ? Sign in</Text>
        </TouchableOpacity>

        </View>
                
            
            </ImageBackground>
        );

    }
}
const syles=StyleSheet.create(
    {
        container:{
            marginTop:50,
        },
        bigBlue:{
            color:'#256AF0',
            position:'absolute',
            textAlign:'center',
            width:392,
            top:height-630,
            left:width-380,
            fontSize:30,
            height:54,
            fontWeight:'bold',
            fontStyle:'normal',
            fontFamily:'Reem Kufi',
            
        },

        biigBlue:{
            color:'#0B6CFF',
            position:'absolute',
            textAlign:'center',
            width:350,
            top:height-680,
            left:width-320,
            fontSize:40,
            height:54,
            fontWeight:'bold',
            fontStyle:'normal',
            fontFamily:'Reem Kufi',
            
        },
        sizeImg:{
            position:'absolute',
            width:91,
            top:height-710,
            left:width-360,
            height:98,
        },
        bt:{
            backgroundColor:'#C1B613',
            position:'absolute',
            width:230,
            top:height-115,
            left:width-270,
            height:60,
            borderRadius:20,
            padding:20,

            
        },
        tx:{
            color:'#503835',
            position:'absolute',
            textAlign:'center',
            width:250,
            fontWeight:'bold',
            fontSize:36,
            height:54,
            
            fontStyle:'normal',
            fontFamily:'Reem Kufi',
        },
        bt2:{
            position:'absolute',
            width:300,
            top:height-63,
            left:width-380,
            height:70,
            borderRadius:20,
            padding:20,
            
        },
        tx2:{
            color:'#FDF940',
            position:'absolute',
            textAlign:'center',
            width:400,
            fontSize:30,
            height:81,
            fontWeight:'bold',
            fontStyle:'normal',
            fontFamily:'Reem Kufi',
        },
    }
);