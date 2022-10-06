import React,{Component, version} from 'react';
import {ImageBackground,View,Text,Alert,StyleSheet,Image,Button,TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Picker} from  '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'
//import RNPickerSelect from 'react-native-picker-select';
export default class Production extends Component{
    constructor(props){
        super(props);
        //this.state = { date: new Date() }
       // state = { datee: new Date() }
        this.state={date1: new Date(),date2: new Date(),date3:new Date(),nomSP:'',nbrOuv:'',produit:'0',variete:'',surface:'',dest:'',SrsEnerg:'',typeSource1:'',eau:'',typeSource:'',day1:'',year1:'',month1:'',day2:'',year2:'',month2:'',cin:'',id_ferme:'',listData1:[],listData2:[],listData2:[],listData3:[],listData4:[],listData5:[],listData6:[],listData7:[]
        ,prix_eau:'',prix_energie:'',prix_pesticide:'',prix_par_pers_jr:'',prix_engrais:'',prix_plants:''
        ,tprix_eau:'',tprix_energie:'',tprix_pesticide:'',tprix_par_pers_jr:'',tprix_engrais:'',tprix_plants:'',totale:'',datte1:'',datte2:'',secondv:''
    };
    
    this.ambiListData();
    
    this.prix();
    }

    async ambiListData(){
        //alert("h");
   // alert(produit);
    //alert("heyyyyyy");
    var Data={
    };
    var headers={
        'Accept':'application/json',
        'Content-Type':'application.json'
    };
    var i="http://10.0.2.2:80/api/afiichepro.php";
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
            this.setState({listData1:Datta.data.result1});
            
            this.setState({listData2:Datta.data.result2});
            this.setState({listData3:Datta.data.result3});
            this.setState({listData4:Datta.data.result4});
            this.setState({listData5:Datta.data.result5});
           this.setState({listData6:Datta.data.result6});
           // alert('h');
        
        }
        )
        .catch((error)=>
        {}
        )
    }







    async ambiListData1(){
        //alert("h");
       var produit=this.state.produit;
   // alert(produit);
    //alert("heyyyyyy");
    var Data={
        produiti:produit
    };
    var headers={
        'Accept':'application/json',
        'Content-Type':'application.json'
    };
    var i="http://10.0.2.2:80/api/variety.php";
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
            
           this.setState({listData7:Datta.data.result7});
           // alert('h');
        
        }
        )
        .catch((error)=>
        {}
        )
    }



    FirstAnl(){
        this.state.cin=this.props.navigation.state.params.p1;
        var cin=this.state.cin ; 
        this.state.id_ferme=this.props.navigation.state.params.p2;
        var id_ferme=this.state.id_ferme;
        var id_ferme=this.state.id_ferme;
        var temperature=0;
        var ph=0;
        var cycle_plante="Semis";
        var date_suivi=this.state.date1;
        var InsertAPIURL1="http:/10.0.2.2:80/api/insertAn.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };
        
        var Data1={
            cin:cin,
            id_ferme:id_ferme,
            temperature:temperature,
            ph:ph,
            cycle_plante:cycle_plante,
            date_suivi:date_suivi,
        };
        //alert("good");
        fetch(
            InsertAPIURL1,
            {
                method:'POST',
                headers:headers,
                body:JSON.stringify(Data1)
                
            }
        )
        .then((Response)=>Response.json())
        .then((Response)=>
        {
            //this.props.navigation.navigate('Analyse');
            //alert("hey");
          //  alert(Response[0].Message);
            
        }
        )
        .catch((error)=>
        {}
        )
        
    }
    

    Insert(){
        var fe;
        this.state.cin=this.props.navigation.state.params.p1;
        var cin=this.state.cin ; 
        this.state.id_ferme=this.props.navigation.state.params.p2;
        var id_ferme=this.state.id_ferme;
        
        //this.state.date1<this.state.date2 ||this.state.date1==this.state.date2||
        //this.state.produit.length==0 ||
        
          // alert("good");

          var date1=this.state.date1; //
          var date2=this.state.date2; //
          var produit=this.state.produit; // 
          var variete=this.state.variete; 
          var surface=this.state.surface; // 
          var dest=this.state.dest; //
          var SrsEnerg=this.state.SrsEnerg; //
          var eau=this.state.eau; //
          var typeSource=this.state.typeSource; //
          var typeSource1=this.state.typeSource1;
          var surface=this.state.surface;
          var nbrOuv=this.state.nbrOuv;
          var InsertAPIURL="http:/10.0.2.2:80/api/insertProduction.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };
          // alert("cin "+cin +"d&"+id_ferme+"+d1 "+date1+" d1 "+date2+" d1 "+produit+" d1 "+variete+" d1 "+surface+" d1 "+dest+" d1 "+SrsEnerg+" d1 "+eau+" d1 "+typeSource+" d1 "+typeSource1);
            var Data={
          cin:cin,////
          id_ferme:id_ferme,///
          nbrOuv:nbrOuv,///
          date1:date1,///
          date2:date2,///
          produit:produit,///
          variete:variete, ///        
          surface:surface,////
          dest:dest,///
          SrsEnerg:SrsEnerg,//
          eau:eau,///
          typeSource:typeSource,///
          typeSource1:typeSource1,//
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
                //alert("hhhhhhhhhh");
                this.FirstAnl();
                this.props.navigation.navigate('menu1');
                
            }
            )
            .catch((error)=>
            this.props.navigation.navigate('menu1')
            )
            this.FirstAnl();
           // this.props.navigation.navigate('opop')
           
        }
    
    
    createTwoButtonAlert (){
    //var c=JSON.stringify(this.state.date2);
    var val=this.state.totale;
     this.state.year1=this.state.date1.getFullYear();
    this.state.month1=this.state.date1.getMonth()+1;
    this.state.day1=this.state.date1.getDay()+1;
    this.state.year2=this.state.date1.getFullYear();
    this.state.month2=this.state.date1.getMonth()+1;
    this.state.day2=this.state.date1.getDay()+1;
    //var val=JSON.stringify(val);
    
    Alert.alert(
      "Production",
      val,
      [
        {
          text: "Annuler",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Valider", onPress: () => this.Insert() }
      ]
    );
}
createTwoButtonAlert2(val){
    //var c=JSON.stringify(this.state.date2);
    
     this.state.year1=this.state.date1.getFullYear();
    this.state.month1=this.state.date1.getMonth()+1;
    this.state.day1=this.state.date1.getDay()+1;
    this.state.year2=this.state.date1.getFullYear();
    this.state.month2=this.state.date1.getMonth()+1;
    this.state.day2=this.state.date1.getDay()+1;
    //var val=JSON.stringify(val);
    
    
    Alert.alert(
      "Informations",
      val,
      [
        {
          text: "Annuler",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Suivant", onPress: () => this.createTwoButtonAlert() }
      ]
    );
}
    acvProduit=(value)=>{
       this.setState({produit:value});
        // this.state.produit=value;
       // alert(value);
       this.ambiListData1();
        
    }
    acvVariete=(value)=>{
       // this.state.variete=value;
        this.setState({variete:value});
        //alert(this.state.variete);
        
       
    }
    acvDest=(value)=>{
        this.setState({dest:value});
        this.DateControl();
        //this.state.dest=value;
    }
    acvEnrg=(value)=>{
        this.setState({SrsEnerg:value});
        //this.state.SrsEnerg=value;
    }
    acvEau=(value)=>{
        this.setState({eau:value});
        //this.state.eau=value;
    }
    acvTypeS=(value)=>{
        this.setState({typeSource:value});
        //this.state.typeSource=value;
    }
    acvTypeS1=(value)=>{
        this.setState({typeSource1:value});
        //this.state.typeSource=value;
    }
    save=()=>{
        alert(this.state.date1+'\n\n\n'+this.state.date2);
        //alert(this.state.date1.getMonth()+1);
    }
    calculTotal=()=>{
        
        
        if(this.state.variete.length==0 ||this.state.surface.length==0 ||this.state.dest.length==0 ||this.state.SrsEnerg.length==0 ||this.state.eau.length==0||this.state.typeSource.length==0){
            Alert.alert(
                "Production",
                "Pour complèter votre avec operation,Remplire tous les champs",
                [
                  
                  { text: "Ok" }
                ]
              );
        }
        else if(this.state.date1.getTime()==this.state.date2.getTime()||this.state.date1.getTime()>this.state.date2.getTime()){
            if(this.state.date1==this.state.date2){
                Alert.alert(
                    "Production",
                    "La date de récolte est égale date de début,Verifier vos informqtion ",
                    [
                      
                      { text: "Ok" }
                    ]
                  );
        }
            else{
                Alert.alert(
                    "Production",
                    "La date de récolte est plus que de début,Verifier vos informqtion ",
                    [
                      
                      { text: "Ok" }
                    ]
                  );
            }
        }
        else{
        var prod1=19; //production insufisant T/H   
        var prod2=35; //prodduction bon 
        var prod3=49; // production trres bon
        var Min_eau=1236; //350   t/h
        var Max_eau=1412; //400
        var compssant=30; /// amazyr t/h
        var Dest_chimique1_herbicide=2.6; //  l/h
        var surface=this.state.surface;
        var plants=750000;   //h
        
             // this.props.navigation.navigate('opop')
             this.state.tprix_eau=this.state.prix_eau*surface*Min_eau;
             this.state.tprix_energie=this.state.prix_energie*surface;
             this.state.tprix_pesticide=this.state.prix_pesticide*surface*compssant;
             this.state.tprix_par_pers_jr=this.state.prix_par_pers_jr*this.state.nbrOuv*120;
             this.state.tprix_plants=this.state.prix_plants*surface*plants;
             this.state.tprix_engrais=this.state.prix_engrais*Dest_chimique1_herbicide*surface;
             this.state.totale="prix totale de eau est : "+ this.state.tprix_eau+" DH\nprix totale de energie est : "+this.state.tprix_energie+
             " DH\nprix totale de pesticide est : "+this.state.tprix_pesticide+" DH\nouvrier : "+this.state.tprix_par_pers_jr+" DH\nprix totale de plants est : "
             +this.state.tprix_plants+" DH\nprix totale de engrais est : "+this.state.tprix_engrais+" DH";
             
             this.testDate();  ///
             
                 
        }
    
          }
      prix=()=>{
        var InsertAPIURL="http:/10.0.2.2:80/api/CalculECo.php";
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };
        var Data={
          
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
             this.state.prix_eau=Response[0].prix_eau;
             this.state.prix_energie=Response[0].prix_energie;
             this.state.prix_pesticide=Response[0].prix_pesticide;
             this.state.prix_par_pers_jr=Response[0].prix_par_pers_jr;
             this.state.prix_plants=Response[0].prix_plants;
             this.state.prix_engrais=Response[0].prix_engrais;

             
                 
                  
              }
              )
              .catch((error)=>
               alert(error)
              )

      }

      DateControl(){
        var variete=this.state.variete; 
        // alert("g" + variete);
       var produit=this.state.produit;
       // alert(produit);
        //alert("heyyyyyy");
        var Data={
         variete:variete,
        };
        var headers={
            'Accept':'application/json',
            'Content-Type':'application.json'
        };
        var i="http://10.0.2.2:80/api/dateIdeal.php";
        fetch(i,
            {
                method:'POST',
                headers:headers,
                body:JSON.stringify(Data)
                
            })
            .then((Response)=>Response.json())
            .then((Response)=>
            {
                
              // alert("heyyy1")
                
               this.state.datte1=Response[0].d1;
               this.state.datte2=Response[0].d2;
                //alert('h');
            
            }
            )
            .catch((error)=>
            alert("Error"+error)
            )
      }
      testDate(){
          var m=this.state.date1.getMonth()+1;
                
               if(m>=this.state.datte1 || m<=this.state.datte2){
                var v="date que vous avez choisie est ideal \n";
               }
               else{
                var v="Attention!!! date que vous avez choisie n'est pas commode pour ce produit \n";
               }
           //    this.createTwoButtonAlert2(v);
           this.state.cin=this.props.navigation.state.params.p1;
        var cin=this.state.cin; 
        this.state.id_ferme=this.props.navigation.state.params.p2;
        var id_ferme=this.state.id_ferme;
        
        //this.state.date1<this.state.date2 ||this.state.date1==this.state.date2||
        //this.state.produit.length==0 ||
        
          // alert("good");

          var date1=this.state.date1; //
          var date2=this.state.date2; //
          var produit=this.state.produit; // 
          var variete=this.state.variete; 
          var surface=this.state.surface; // 
          var dest=this.state.dest; //
          var SrsEnerg=this.state.SrsEnerg; //
          var eau=this.state.eau; //
          var typeSource=this.state.typeSource; //
          var typeSource1=this.state.typeSource1;
          var surface=this.state.surface;
          var nbrOuv=this.state.nbrOuv;
           this.state.secondv=v;
           
               this.props.navigation.navigate('infoProductioon',
           {
            P1:this.state.cin,
            P2:this.state.id_ferme, 
            P3:this.state.date1,
            P4:this.state.date2,
            P5:this.state.produit,
            P6:this.state.variete,

            P7:this.state.surface,
            P8:this.state.dest, 
            P9:this.state.SrsEnerg,
            P10:this.state.eau,
            P11:this.state.typeSource,
            P12:this.state.typeSource1,
            P13:this.state.surface,
            P14:this.state.nbrOuv,
            P15:v,
            P16:this.state.totale,

            

        });

      }

    
    render(){
      //  this.ambiListData();
      this.ambiListData1();
        return(
            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles2.FlexGrowOne}
            >
             <ScrollView bounces={false}
                  style= {syles2.FlexOne}
                    >
                       
                   
                     <View style={{width:600,height:80,backgroundColor:'#ECECEC'}}>
                     <TouchableOpacity onPress={()=>this.props.navigation.navigate('menu1')}>
                <Image source={require('./arrow.png')} style={syles2.sizeImg3} />
                </TouchableOpacity>
                    <Text style={syles2.mater}>Production</Text>
                </View>
                    <View>
                        <Text></Text>
                    </View>
                    <View style={syles2.TextInputWrapper}>
                    <Picker 
                    onValueChange={this.acvProduit.bind()}
                    selectedValue={this.state.produit}   
                  
                    > 
                        <Picker.Item label='select produit' value="0"></Picker.Item>
                        <Picker.Item label='Carotte' value="1"></Picker.Item>
                        <Picker.Item label='Tomate' value="2"></Picker.Item>

               
                


                        

                    </Picker>
                    </View>
                    <View style={syles2.TextInputWrapper}>
                    <Picker 
                    onValueChange={this.acvVariete.bind()}
                    selectedValue={this.state.variete}
                    > 
                        <Picker.Item label='selectionner la variete' value={0}></Picker.Item>
                        
                        {
                    
                    this.state.listData7.map((val,index)=>
                    (

                           
                           <Picker.Item label={val.variete} value={val.id_produit} key={index}></Picker.Item>
    
                        
                    ))
                }

                    </Picker>



                   



                    </View>
                   
            <View >
            <TextInput  style={syles2.TextInputWrapper} onChangeText={surface=>this.setState({surface})} placeholder="Surface" />
            </View >
            <View  style={syles2.TextInputWrapper}>
            <Picker 
                    onValueChange={this.acvDest.bind()}
                    selectedValue={this.state.dest}
                    > 
 <Picker.Item label='select destruction chimique' value={0}></Picker.Item>

{
                    
                    this.state.listData3.map((val,index)=>
                    (

                           
                           <Picker.Item label={val.nom_dest} value={val.id_destruction_chimique} key={index}></Picker.Item>
    
                        
                    ))
                }


                       
                        

                    </Picker>
                    </View>
                    <View style={syles2.TextInputWrapper}>
                    <Picker 
                    onValueChange={this.acvEnrg.bind()}
                    selectedValue={this.state.SrsEnerg}
                    > 
                        <Picker.Item label="selectionner le source d'energie" value={0}></Picker.Item>
                        
                        {
                    
                    this.state.listData4.map((val,index)=>
                    (

                           
                           <Picker.Item label={val.source} value={val.id_src_energ} key={index}></Picker.Item>
    
                        
                    ))
                }
                        
                         </Picker>
                    </View>
                    <View style={syles2.TextInputWrapper}>
                    <Picker 
                    onValueChange={this.acvEau.bind()}
                    selectedValue={this.state.eau}
                    > 
                        <Picker.Item label="selectionner le source d'eau" value={0}></Picker.Item>

                        {
                    
                    this.state.listData5.map((val,index)=>
                    (

                           
                           <Picker.Item label={val.source} value={val.id_src_eau} key={index}></Picker.Item>
    
                        
                    ))
                }

                    </Picker>
                    </View>
       <View  > 
           <TextInput  style={syles2.TextInputWrapper} onChangeText={nomSP=>this.setState({nomSP})} placeholder="nom semences plante " />
           </View>

           <View style={syles2.TextInputWrapper}>
           <Picker 
                    onValueChange={this.acvTypeS1.bind()}
                    selectedValue={this.state.typeSource1}
                    > 
                        <Picker.Item label='selectionner le type du plants' value={0}></Picker.Item>

                        {
                    
                    this.state.listData6.map((val,index)=>
                    (

                           
                           <Picker.Item label={val.type} value={val.id_semences_plants} key={index}></Picker.Item>
    
                        
                    ))
                }

                    </Picker>
                    </View>

           <View style={syles2.TextInputWrapper}>
           <Picker 
                    onValueChange={this.acvTypeS.bind()}
                    selectedValue={this.state.typeSource}
                    > 
                        <Picker.Item label="selectionner le type d'energie" value={0}></Picker.Item>

                        {
                    
                    this.state.listData1.map((val,index)=>
                    (

                           
                           <Picker.Item label={val.type_engrais} value={val.id_eng_prod} key={index}></Picker.Item>
    
                        
                    ))
                }

                    </Picker>
                    </View>

                   

                    <View> 

           <TextInput style={syles2.TextInputWrapper}  onChangeText={nbrOuv=>this.setState({nbrOuv})} placeholder="nombre d'ouvrier " />
           </View >
           <View>
        <Text style={{fontSize:20,left:10,color:'#6A2929'}}>Date debut :</Text>
    </View>
           <View style={syles2.TextInputWrapper}>
           <DatePicker
           style={{height:30,top:11}}
      date={this.state.date1}
      onDateChange={date1 => this.setState({ date1 })}
      mode={'date'}
    />
    </View>
    <View>
        <Text style={{fontSize:20,left:10,color:'#6A2929'}}>Date recolte :</Text>
    </View>
    <View style={syles2.datestyle}>
    <DatePicker
    style={{height:30,top:11}}
      date={this.state.date2}
      onDateChange={date2 => this.setState({ date2 })}
      mode={'date'}
    />
    
    </View>
           </ScrollView>
            <View style={{height:60}}>
            <TouchableOpacity 
            style={syles2.bt}  
          //  onPress={() => this.createTwoButtonAlert()}
          onPress={() => this.calculTotal()}
        // onPress={()=>this.props.navigation.navigate('infoProductioon')}
            >
            
        <Text  style={syles2.next} >continue</Text>
             </TouchableOpacity>
        </View>
        <View>
        <Text style={syles2.biigBlue}>Smart Agricole</Text>
            <Image source={require('./1.webp')} style={syles2.sizeImg} />
        </View>
            </KeyboardAvoidingView>
        );
    }
}
const syles2=StyleSheet.create(
    
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
        pickerstyle:{
            backgroundColor:'#ECECEC',
                    //borderColor:'#6A2929',
                    //flex: 1,
                    //height: 58,
                    
                    margin:27,
                    //borderRadius:20,
                    borderWidth:20,
                    //textAlign:'center',
        },
        datestyle:{
            backgroundColor:'#ECECEC',
            borderColor:'#6A2929',
            flex: 1,
            height: 58,
            
            margin:35,
            borderRadius:90,
            borderWidth:2,
            borderColor:'#6A2929',
        },
        selected:{
                width:20,
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
            //flex : 1,
        
               width:91,
            
               left:28,
               height:98,
        },
        
                TextInputWrapper: {
                    backgroundColor:'#ECECEC',
                    borderColor:'#6A2929',
                    flex: 1,
                    height: 58,
                    
                    margin:25,
                    borderRadius:20,
                    borderWidth:2,
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
                                            top:-40,
                                            marginBottom:20,
                                            marginLeft:90,
                                            
                                        
                                            
                                        },
                                        next:{
                                            fontWeight:'bold',
                                            width:300,
                                            height:28,
                                            fontSize:25,
                                            top:-20,
                                            left:25,
                                            color:'#503835'
                                        },
                                        
                                      
                                
                            }
)