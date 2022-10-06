import React,{Component} from 'react';  
import { View, Text, Button,Image,StyleSheet,TouchableOpacity,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'; 
export default class Mengrais extends Component{

    constructor(props){
        super(props);
        this.state={listData:[],tEng:''};
        this.ambiListData()
    }
     ambiListData(){
           
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
    var i="http://10.0.2.2:80/api/mengrais.php";
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
        .catch((error)=>
        alert("Error"+error)
        )
    }
    klikDelete(val){
        
            
            var urll="http:/10.0.2.2:80/api/supengrais.php";
            
            var Data={
                val,
            };
             
            

            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };
            fetch(urll,
                {
                    method:'POST',
                    headers:headers,
                    body:JSON.stringify(Data)
                    
                }
                )
            .then((Response)=>Response.json())
            .then((Response)=>{
                //alert("was delected  ");
                this.ambiListData();
            })
            .catch((error)=>{
                console.log(error);
            })
            //alert(idMaterial);
           // this.ambiListData();
    }
    

    InsertRecord=()=>
    {
        
        var tEng=this.state.tEng;
        if(tEng.length==0 ){
            alert("khawiya");
        }
        else{ 
          // alert("good");
            //props.navigation.navigate('nextMaterials')
            var InsertAPIURL="http:/10.0.2.2:80/api/insertEng.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };
            var Data={
                tEng,
            };
            fetch(
                InsertAPIURL,
                {
                    method:'POST',
                    headers:headers,
                    body:JSON.stringify(Data)
                    
                }
            )
            .then((Response)=>Response.json())
            .then((Response)=>
            {
               // alert(Response[0].Message);
                
            }
            )
            .catch((error)=>
            this.ambiListData()
            )
          //  this.props.navigation.navigate('nextMaterials');
        }
       // this.ambiListData();
    }


    render(){
      //  this.ambiListData();
         return(
            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles.FlexGrowOne}
            >
                <View  style={{width:600,height:80,backgroundColor:'#ECECEC'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('pageAdmin')}>
                <Image source={require('./arrow.png')} style={syles.sizeImg3} />
                </TouchableOpacity>
                    <Text style={syles.mater}>Engrais</Text>
                </View>
                <View style={{height:100}}>
                    <TextInput  style={syles.TextInputWrapper} onChangeText={tEng=>this.setState({tEng})}/>
                </View>
                <View>
                    <TouchableOpacity style={syles.bt} onPress={()=>this.InsertRecord()}>
                        <Text style={syles.next1}>Ajoute</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView bounces={false}
                  style= {syles.FlexOne}
                  
                    >
                        
                         {
                    this.state.listData.map((val,index)=>
                    (

                        <View key={index}>       
                        <Text>     
                            <Text>        </Text>                
                                <TouchableOpacity   onPress={()=>this.klikDelete(val.id_eng_prod)}>
                                <Image source={require('./bin.png')} style={syles.sizeImg2}/>
                                </TouchableOpacity>
                                <Text>        </Text>  
                <Text style={syles.textListName}>{val.type_engrais}</Text>
                </Text>
                           
                            
                            
                        
    
                        </View>
                    ))
                }
                
                </ScrollView>
            </KeyboardAvoidingView>
         );
    }
}


const syles=StyleSheet.create(
    {
        sizeImg3:{
            //    position:'absolute',
            width:50,
           // top:580,
            left:10,
           height:50,
           top:10,
           
           
            //fontSize:30
            
        
            },
        textListName:{
            //flex:3,
            left:20,
            fontSize:25,
            fontWeight:'bold',
            color:'black'
            
    },
        FlexGrowOne: {
            flexGrow : 1
        },
        FlexOne: {
            flex : 1
        },
        mater:{
            color:'#000000',
            position:'absolute',
            textAlign:'center',
            width:200,
            top:10,
            fontWeight:'bold',
            fontSize:35,
            height:54,
            left:90,
            
            fontStyle:'normal',
            fontFamily:'Reem Kufi',
        },
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
    
        mater:{
            color:'#000000',
            position:'absolute',
            textAlign:'center',
            width:200,
            top:10,
            fontWeight:'bold',
            fontSize:35,
            height:54,
            left:90,
            
            fontStyle:'normal',
            fontFamily:'Reem Kufi',
        },
        txtl:{
            backgroundColor:'#000000',
            position:'absolute',
            textAlign:'center',
            width:331,
            top:490,
            height:58,
            left:30,
            borderRadius:20,
        },
        sizeImg:{
        position:'absolute',
        width:91,
        top:580,
        left:40,
        height:98,

        },
        sizeImg2:{
        //    position:'absolute',
        width:28,
       // top:580,
        //left:40,
       height:28,
       top:4
        //fontSize:30
        
    
        },
        
        biigBlue:{
            color:'#0B6CFF',
            position:'absolute',
            textAlign:'center',
            width:250,
            top:620,
            left:100,
            fontSize:30,
            height:54,
            fontWeight:'bold',
            fontStyle:'normal',
            fontFamily:'Reem Kufi',
            
        },
        bt:{
            backgroundColor:'#ECECEC',
            position:'absolute',
            width:150,
            top:110,
            left:190,
            height:40,
            //borderRadius:20,
            // /padding:20,

            
        },
        tx:{
            color:'#000000',
            position:'absolute',
            textAlign:'center',
            width:130,
            top:7,
            fontWeight:'bold',
            fontSize:15,
            height:54,
            left:10,
            
            fontStyle:'normal',
            fontFamily:'Reem Kufi',
        },
        bt2:{
            backgroundColor:'#ECECEC',
            position:'absolute',
            width:180,
            top:180,
            left:10,
            height:40,
            borderRadius:20,
            //padding:20,

            
        },
        find:{
            top:180,
            left:50,
        },
        txi:{
            textAlign:'center',
        },
        
        viewData:{
            /*top:300,
            flexDirection:'row',
            padding:5,
            borderBottomWidth:1,
            borderBottomColor:'#dedede'*/
            top:230,
            width:400,
            height:120
        },
        textListName:{
                //flex:3,
                left:20,
                fontSize:25,
                fontWeight:'bold',
                color:'black'
                
        },
        textListEdit:{
            left:280,
                color:'blue',
                marginRight:20
        },
        textListDelete:{
            color:'red',
            left:320,

        },
        next1:{
            fontWeight:'bold',
            width:130,
            height:35,
            fontSize:25,
            top:-20,
            
            left:40,
            color:'#503835'
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
            top:-40,
            marginBottom:20,
            marginLeft:90,
            
        
            
        },
        
    }
    )