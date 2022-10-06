import React,{Component} from 'react';  
import { View, Text, Button,Image,StyleSheet,TouchableOpacity,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'; 
export default class uEco extends Component{

    constructor(props){
        super(props);
        this.state={listData:[],id_eco:'',prix_eau:'',prix_energie:'',prix_pesticide:'',prix_par_pers_jr:'',prix_engrais:'',prix_plants:''};
        this.state.prix_eau=this.props.navigation.state.params.p1;
        this.state.prix_energie=this.props.navigation.state.params.p2;
        this.state.prix_pesticide=this.props.navigation.state.params.p3;
        this.state.prix_par_pers_jr=this.props.navigation.state.params.p4;
        this.state.prix_engrais=this.props.navigation.state.params.p5;
        this.state.prix_plants=this.props.navigation.state.params.p6;
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
        .catch((error)=>
          alert("error")
       // this.ambiListData()
        )
    }
    

    InsertRecord=()=>
    {
        
        var prix_eau=this.state.prix_eau;
        var prix_energie=this.state.prix_energie;
        var prix_pesticide=this.state.prix_pesticide;
        var prix_par_pers_jr=this.state.prix_par_pers_jr;
        var prix_engrais=this.state.prix_engrais;
        var prix_plants=this.state.prix_plants;
        if(prix_energie.length==0 || prix_eau.length==0||prix_pesticide.length==0 || prix_par_pers_jr.length==0||prix_engrais.length==0 || prix_plants.length==0){
            alert("khawiya");
        }
        else{ 
          // alert("good");
            //props.navigation.navigate('nextMaterials')



            var InsertAPIURL="http:/10.0.2.2:80/api/updateeco.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };
            var Data={
                prix_eau,
                prix_energie,
                prix_pesticide,
                prix_par_pers_jr,
                prix_engrais,
                prix_plants,
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
                this.props.navigation.navigate('pageAdmin');
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
       // this.ambiListData();
         return(
            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles.FlexGrowOne}
            >
                <View  style={{width:600,height:80,backgroundColor:'#ECECEC'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('pageAdmin')}>
                <Image source={require('./arrow.png')} style={syles.sizeImg3} />
                </TouchableOpacity>
                    <Text style={syles.mater}>Eco</Text>
                </View>
                <ScrollView bounces={false}
                  style= {syles.FlexOne}
                  
                    >
                      
                   <View>
                       <Text style={{fontSize:20,top:10,fontWeight:'500',color:'black'}}>  Prix eau :</Text>
                        <TextInput  style={syles.TextInputWrapper} defaultValue={this.props.navigation.state.params.p1} onChangeText={prix_eau=>this.setState({prix_eau})} keyboardType='numeric'/>
                        </View>
                        <View>
                        <Text style={{fontSize:20,top:10,fontWeight:'500',color:'black'}}>  Prix energie :</Text>
                        <TextInput  style={syles.TextInputWrapper} defaultValue={this.props.navigation.state.params.p2} onChangeText={prix_energie=>this.setState({prix_energie})} keyboardType='numeric'/>
                        </View>
                        <View>
                        <Text style={{fontSize:20,top:10,fontWeight:'500',color:'black'}}>  Prix pesticide :</Text>
                        <TextInput  style={syles.TextInputWrapper} defaultValue={this.props.navigation.state.params.p3} onChangeText={prix_pesticide=>this.setState({prix_pesticide})} keyboardType='numeric'/>
                        </View>
                        <View>
                        <Text style={{fontSize:20,top:10,fontWeight:'500',color:'black'}}>  Prix par person jour :</Text>
                        <TextInput  style={syles.TextInputWrapper} defaultValue={this.props.navigation.state.params.p4} onChangeText={prix_par_pers_jr=>this.setState({prix_par_pers_jr})} keyboardType='numeric'/>
                        </View>
                        <View>
                        <Text style={{fontSize:20,top:10,fontWeight:'500',color:'black'}}>  Prix engrais :</Text>
                        <TextInput  style={syles.TextInputWrapper} defaultValue={this.props.navigation.state.params.p5} onChangeText={prix_engrais=>this.setState({prix_engrais})} keyboardType='numeric'/>
                        </View>
                        <View>
                        <Text style={{fontSize:20,top:10,fontWeight:'500',color:'black'}}>  Prix plants :</Text>
                        <TextInput  style={syles.TextInputWrapper} defaultValue={this.props.navigation.state.params.p6} onChangeText={prix_plants=>this.setState({prix_plants})} keyboardType='numeric'/>
                        </View>
                       
                        
                    
                    
                   
                
                        
                        
                
                </ScrollView>
                <View style={{height:85}}>
                    <TouchableOpacity style={syles.bt} onPress={()=>this.InsertRecord()}>
                        <Text style={syles.next1}>Enregistrer</Text>
                    </TouchableOpacity>
                </View>
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
            margin:15,
            left:15,
            borderRadius:20,
            borderWidth:2,
            textAlign:'center',
        },
    
        TextInputWrapper1: {
            backgroundColor:'#ECECEC',
            borderColor:'#6A2929',
            flex: 1,
            height: 120,
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
            
            left:15,
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