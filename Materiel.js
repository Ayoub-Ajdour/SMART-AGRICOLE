import React,{Component} from 'react';  
import { View, Text, Button,Image,StyleSheet,TouchableOpacity,TextInput, Alert} from 'react-native';
//import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'; 
export default class Materiel extends Component{

    constructor(props){
        
        super(props);
        //this.state={Name:'',listData:[],idMaterial:''};
        this.state={cin:'',id_ferme:'',Find:'',Name:'',Type:'',Model:'',NumberPate:'',LastTechnicallnspection:'',LastInsurance:'',listData:[],idMaterial:''
      
    };
        //this.url="http://192.168.56.1/api/affichMaterials.php";
        //this.url="http://192.168.56.1/api/test1.php";
       // this.ambiListData();
       this.state.id_ferme=this.props.navigation.state.params.p2;

       this.ambiListData();
    }
   
    addM(){
        this.state.cin=this.props.navigation.state.params.p1;
        this.state.id_ferme=this.props.navigation.state.params.p2;
        //alert(this.state.id_ferme);
        this.props.navigation.navigate('newMaterials',{p1:this.state.cin
            ,p2:this.state.id_ferme})
    }
    createTwoButtonAlert (){
        //var c=JSON.stringify(this.state.date2);
         this.state.year1=this.state.date1.getFullYear();
        this.state.month1=this.state.date1.getMonth()+1;
        this.state.day1=this.state.date1.getDay()+1;
        this.state.year2=this.state.date1.getFullYear();
        this.state.month2=this.state.date1.getMonth()+1;
        this.state.day2=this.state.date1.getDay()+1;
        var datee=JSON.stringify(this.state.date1);
        
        Alert.alert(
          "Materiel",
          datee,
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => this.Insert() }
          ]
        );
    }
        async ambiListData(){
           
            //
           // alert(this.state.id_ferme);
            //alert("h");
            this.state.id_ferme=this.props.navigation.state.params.p2;
            var id_ferme=this.state.id_ferme;
        //alert("hey");
        //alert("heyyyyyy");
        var Data={
            id_ferme:id_ferme
        };
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };
        var i="http://10.0.2.2:80/api/test1.php";
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
           {}
            )
        }
         
        async klikEdit(idMaterial,Name,Type,Model,NumberPate,date1,date2){
            //this.klikDelete(idMaterial);
            //this.props.navigation.navigate('newMaterials');
            //this.state.idMaterial=idMaterial;
            this.state.idMaterial=idMaterial;
            this.state.Name=Name;
            this.state.Type=Type;
            this.state.Model=Model;
            this.state.NumberPate=NumberPate;
            this.state.date1=date1;
            this.state.date2=date2;
            
            var id_ferme=this.state.id_ferme;
           //this.props.navigation.navigate('upd',{P1:this.state.idMaterial});
           this.props.navigation.navigate('upd',
           {
            P1:this.state.Name,
            P2:this.state.Type,
            P3:this.state.Model,
            P4:this.state.NumberPate,
            P5:this.state.date1,
            P6:this.state.date2,
            P7:this.state.id_ferme,
            P8:this.state.idMaterial,
            
        });
        
        //klikDelete(id)
        this.ambiListData();
        }
        async klikDelete(idMaterial){
            
            this.state.idMaterial=idMaterial;
            var idMaterial=this.state.idMaterial;
            this.state.id_ferme=this.props.navigation.state.params.p2;
            var id_ferme=this.state.id_ferme;
            
            var urll="http:/10.0.2.2:80/api/test3.php";
            
            var Data={
                idMaterial:idMaterial,
                id_ferme:id_ferme,
            };
             
            

            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };
            await fetch(urll,
                {
                    method:'POST',
                    headers:headers,
                    body:JSON.stringify(Data)
                    
                }
                )
            .then((Response)=>Response.json())
            .then((Response)=>{
                Alert.alert(
                    "Materiel",
                    "Le materiel a été bien suprimer",
                    [
                      
                      { text: "Ok" }
                    ]
                  );
                this.ambiListData();
            })
            .catch((error)=>{
                console.log(error);
            })
            //alert(idMaterial);
            this.ambiListData();
        }
        detail(id_materiel,id_ferme,nom_materiel,type_materiel,model,nb_plate,dernier_controle_technique,derniere_assurance){
            var i=" Nom :  "+nom_materiel+"\n Type :  "+type_materiel+"\n Model :  "+model+"\n Numéro de plate :  "+nb_plate+"\n Dernier contrôle technique :  "+dernier_controle_technique+"\n Dernière assurance   :"+derniere_assurance;
            var j="Materiel N° "+id_materiel;
            Alert.alert(
                j,
                i,
                [
                  
                  { text: "Ok" }
                ]
              );
            
        }
        
        Search=()=>{
            var Find=this.state.Find;
            //alert(Find);
            this.state.id_ferme=this.props.navigation.state.params.p2;
            var id_ferme=this.state.id_ferme;
            if(Find.length==0){
                Alert.alert(
                    'Chercher un materiel',
                    'Entrer le nom du materiel dabord',
                    [
                      
                      { text: "Ok" }
                    ]
                  );
            }
            else{
                              var urlll="http://10.0.2.2:80/api/sersh.php";
                
                var Data={
                    Find:Find,
                    id_ferme:id_ferme,
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
                var i="Name :  "+Response[0].Name+"\n Type :  "+Response[0].Type+"\n Model :  "+Response[0].Model+"\n Numéro de plate :  "+Response[0].NumberPate+"\n Dernier contrôle technique :  :"+Response[0].LastTechnicallnspection+"\n Dernière assurance   :  "+Response[0].LastInsurance;
                    Alert.alert(
                        "Materiel",
                        i,
                        [
                          
                          { text: "Ok" }
                        ]
                      );
                })
                .catch((error)=>{
                    console.log(error);
                })
                //alert('g');

            }
        }
    render(){
       // this.ambiListData();
        this.ambiListData()
        //this.ambiListData();
        return(
            <View>
                
                <View style={{width:600,height:80,backgroundColor:'#ECECEC'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('menu1')}>
                <Image source={require('./arrow.png')} style={syles.sizeImg3} />
                </TouchableOpacity>
                    <Text   style={syles.mater}>Materials</Text>
                </View>
                
                <View style={syles.viewData}>
                <Text style={{fontSize:25}}>________Liste du materiels_________</Text>
                <Text>

                </Text>
                {
                    this.state.listData.map((val,index)=>
                    (

                        <View key={index}>
                           
                            <Text>
                                <Text>     </Text>
                                <TouchableOpacity   onPress={()=>this.klikEdit(val.id_materiel,val.nom_materiel,val.type_materiel,val.model,val.nb_plate,val.dernier_controle_technique,val.derniere_assurance)}>
                                <Image source={require('./editer.png')} style={syles.sizeImg2}/>
                                </TouchableOpacity>
                                <Text> </Text>
                                <TouchableOpacity   onPress={()=>this.klikDelete(val.id_materiel)}>
                                <Image source={require('./bin.png')} style={syles.sizeImg2}/>
                                </TouchableOpacity>
<Text style={syles.textListName} onPress={()=>this.detail(val.id_materiel,val.id_ferme,val.nom_materiel,val.type_materiel,val.model,val.nb_plate,val.dernier_controle_technique,val.derniere_assurance)}>
                                
<Text>     </Text>{val.nom_materiel}
                            </Text>
                            </Text>
                            
                        
    
                        </View>
                    ))
                }
                
            </View> 
                
               
                <Image source={require('./1.webp')} style={syles.sizeImg} />
                <Text style={syles.biigBlue}>Smart Agricole</Text>
                <TouchableOpacity
                 style={syles.bt}
             onPress={() => this.addM()}
                 >
        <Text style={syles.tx}>+ Nouveau Materiel</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
       
       style={syles.bt2}>
           
       <TextInput
        style={syles.txi}
        placeholder="chercher içi" 
        onChangeText={Find=>this.setState({Find})}
        
        
      />
      
      <Icon name="search" onPress={this.Search} style={{top:-30,left:150,fontSize:20}}/>
      
       </TouchableOpacity>
       
            </View>
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
               // width:130,
                top:7,
                fontWeight:'bold',
                fontSize:15,
                //height:54,
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

            }

            
        }
        )