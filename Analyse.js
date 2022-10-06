import React,{Component} from 'react';  
import { View, Text, Button,Image,StyleSheet,TouchableOpacity,TextInput,Alert,KeyboardAvoidingView,ScrollView} from 'react-native';
//import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Analyse extends Component{

    constructor(props){
        
        super(props);
        //this.state={Name:'',listData:[],idMaterial:''};
        this.state={Find:'',cycle:'',date1:new Date(),Temp:'',ph:'',listData:[],cin:'',id_ferme:'',dateActual:new Date(),tempMin:'',tempMax:''};
        //this.url="http://192.168.56.1/api/affichMaterials.php";
        //this.url="http://192.168.56.1/api/test1.php";
       // this.ambiListData();
       
    }
   
    async ambiListData(){
        //alert("h");
      //  var Name=this.state.Name;
    //alert("hey");
    //alert("heyyyyyy");
    this.state.id_ferme=this.props.navigation.state.params.p2;
    var id_ferme=this.state.id_ferme;
    var Data={
       // Name:Name
       id_ferme,
    };
    var headers={
        'Accept':'application/json',
        'Content-Type':'application.json'
    };
    var i="http://10.0.2.2:80/api/AfficheAn.php";
    fetch(i,
        {
            method:'POST',
            headers:headers,
            body:JSON.stringify(Data)
            
        })
        .then((Datta)=>Datta.json())
        .then((Datta)=>
        {
            
          // alert("heyyy1")
            this.setState({listData:Datta.data.result});
            
            
           // alert('h');
        
        }
        )
        .catch((error)=>
        alert("Error"+error)
        )
    }    


        detail(idAn,production,Temp,ph,cycle,datte){
           var i=" production : "+production+"\n Température : "+Temp+"\n Cycle :  "+cycle+"\n Ph :  "+ph+"\n Date :"+datte;
           Alert.alert(
            "Analyse",
            i,
            [
              
              { text: "Ok" }
            ]
          );
        }

        async klikDelete(idAn){
            
            this.state.idAn=idAn;
            var idAn=this.state.idAn;
            
            var urll="http:/10.0.2.2:80/api/supprimeAn.php";
            
            var Data={
                id_analyse:idAn
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
                //alert("was delected"+Response[0].Message);
                
            })
            .catch((error)=>{
                console.log(error);
            })
            //alert(idMaterial);
          
        }
        

        /*
        async klikEdit(idMaterial,Name,Type,Model,NumberPate,LastTechnicallnspection,LastInsurance){
            //this.klikDelete(idMaterial);
            //this.props.navigation.navigate('newMaterials');
            //this.state.idMaterial=idMaterial;
            this.state.idMaterial=idMaterial;
            this.state.Name=Name;
            this.state.Type=Type;
            this.state.Model=Model;
            this.state.NumberPate=NumberPate;
            this.state.LastTechnicallnspection=LastTechnicallnspection;
            this.state.LastInsurance=LastInsurance;
            

           //this.props.navigation.navigate('upd',{P1:this.state.idMaterial});
           this.props.navigation.navigate('upd',
           {
            P1:this.state.idMaterial,
            P2:this.state.Name,
            P3:this.state.Type,
            P4:this.state.Model,
            P5:this.state.NumberPate,
            P6:this.state.LastTechnicallnspection,
            P7:this.state.LastInsurance,
            
        });
        
        //klikDelete(id)
        this.ambiListData();
        }
        
        
        
        Search=()=>{
            var Find=this.state.Find;
            //alert(Find);
            if(Find.length==0){
                alert('enter value');
            }
            else{
                              var urlll="http://10.0.2.2:80/api/sersh.php";
                
                var Data={
                    Find:Find
                };
                 
                
    
                var headers={
                    'Accept':'application/json',
                    'Content-Type':'application.json'
                };

                fetch(urlll,
                    {
                        method:'POST',
                        headers:headers,
                        body:JSON.stringify(Data)
                        
                    }
                    )
                .then((Response)=>Response.json())
                .then((Response)=>{
                    //this.setState({Namee:Response[0].Name});
                    alert(Response[0].Type);
                })
                .catch((error)=>{
                    console.log(error);
                })
                //alert('g');

            }
        }*/
        addAn(){
            this.state.cin=this.props.navigation.state.params.p1;
        this.state.id_ferme=this.props.navigation.state.params.p2;
            this.props.navigation.navigate('addAnal',{p1:this.state.cin
                ,p2:this.state.id_ferme});
        }
       
    render(){
        //this.ambiListData();
        var i=0;
        this.ambiListData()
      
        
        return(
            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles.FlexGrowOne}
            >
                        
                <View style={{width:600,height:80,backgroundColor:'#ECECEC'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('menu1')}>
                <Image source={require('./arrow.png')} style={syles.sizeImg3} />
                </TouchableOpacity>
                    <Text   style={syles.mater}>ANALYSE</Text>
                </View>
                
                
                
                <View style={{margin:25,}}>
                <TouchableOpacity
                 style={syles.bt}
                 onPress={()=>this.addAn()}
                 >
        <Text style={syles.tx}>+ Nouveau Analyse</Text>
        </TouchableOpacity>
        </View>
        <View>
            <Text></Text>
            <Text></Text>
        </View>
       <View>
                <Text style={{fontSize:25}}>_________Liste d'analyses__________</Text>
                </View>
                <ScrollView bounces={false}
                  style= {syles.FlexOne}
                    >
                        <View>
                {
                    this.state.listData.map((val,index)=>
                    (
//style={syles.TextInputWrapper}
                        <View key={index} >
                           <Text>{val.datte}</Text>
                            <Text>
                                <Text>     </Text>
                            
                            <Text> </Text>
                            <TouchableOpacity  onPress={()=>this.klikDelete(val.id_analyse)}>
                                <Icon name="trash" size={30} color="#6A2929"
                                />
                                </TouchableOpacity>
<Text style={syles.textListName} onPress={()=>this.detail(val.id_analyse,val.id_ferme,val.temperature,val.ph,val.cycle_plante,val.date_suivi)}
>
<Text style={{color:'#6A2929'}}>  Analyse N°: {++i}</Text>
                            </Text>
                            </Text>
                            
                        
    
                        </View>
                    
                    )
                    )
                    
                }
                
            </View> 
            </ScrollView>
            <View style={{height:100}}>
            <Text style={syles.biigBlue}>Smart Agricole</Text>
                <Image source={require('./1.webp')} style={syles.sizeImg} />
            </View>
            </KeyboardAvoidingView>
            
        );
    }}
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
            FlexGrowOne: {
                flexGrow : 1
            },
            FlexOne: {
                flex : 1,
            },
            TextInputWrapper: {
                backgroundColor:'#ECECEC',
                borderColor:'#6A2929',
                flex: 1,
                height: 90,
                
                margin:25,
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
            //top:580,
           left:40,
            height:98,

            },
            biigBlue:{
                color:'#0B6CFF',
                position:'absolute',
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
            bt:{
                backgroundColor:'#ECECEC',
                position:'absolute',
                width:150,
                //top:110,
                left:200,
                height:40,
                //borderRadius:20,
                // /padding:20,
    
                
            },
            tx:{
                color:'#000000',
                position:'absolute',
                textAlign:'center',
                //width:130,
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
                    fontWeight:'bold'
            },
            textListEdit:{
                left:280,
                    color:'blue',
                    marginRight:20
            },
            textListDelete:{
                color:'red',
                left:320,

            }

            
        }
        )