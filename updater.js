import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet,Image,Button,TouchableOpacity,TextInput,KeyboardAvoidingView,ScrollView,Alert} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons'; 

export default class addMaterials extends Component{
    
    constructor(props){
        super(props);
        this.state={cin:'',id_ferme:'',Nameup:'',Typeup:'',Modelup:'',NumberPateup:'',LastTechnicalInspectionup:'',LastInsuranceup:'',listData:[]  , vibrate: false,
        date1: new Date(),
        date2: new Date(),
        isShowDatePicker1: false,
        isShowDatePicker2: false,
    };
            this.url="http://192.168.56.1/api/affichMaterials.php";
            this.state.Nameup=this.props.navigation.state.params.P1;
        this.state.Typeup=this.props.navigation.state.params.P2;
        this.state.Modelup=this.props.navigation.state.params.P3;
        this.state.NumberPateup=this.props.navigation.state.params.P4;
        this.state.LastTechnicalInspectionup=this.props.navigation.state.params.P5;
        this.state.LastInsuranceup=this.props.navigation.state.params.P6;
        this.state.id_ferme=this.props.navigation.state.params.P7;
        this.state.idMaterialup=this.props.navigation.state.params.P8;
    }

    InsertRecord=()=>
    {

       this.state.idMaterialup=this.props.navigation.state.params.P8;
         
        
        var idMaterialup=this.state.idMaterialup;
        var Nameup=this.state.Nameup;
        var Typeup=this.state.Typeup;
        var Modelup=this.state.Modelup;
        var NumberPateup=this.state.NumberPateup;
        var LastTechnicalInspectionup=this.state.date1;
        var LastInsuranceup=this.state.date2;
        var date1=this.state.date1;
        var date2=this.state.date2;
        this.state.id_ferme=this.props.navigation.state.params.P7;
        var id_ferme=this.state.id_ferme;
        //alert(id_ferme);
      //  alert(date1+"   "+idMaterialup+"  "+Nameup+" "+ Modelup+" "+NumberPateup+" "+ LastTechnicalInspectionup+" "+LastInsuranceup+" "+date2);
        
        //alert(Nameup+LastInsuranceup);
        if(Nameup.length==0 ||Typeup.length==0 ||Modelup.length==0 ||NumberPateup.length==0 ||LastTechnicalInspectionup.length==0 ||LastInsuranceup.length==0){
            //alert("chi w7da khawiya");
           // alert(date1+"   "+idMaterialup+"  "+Nameup+" "+ Modelup+" "+NumberPateup+" "+ LastTechnicalInspectionup+" "+LastInsuranceup+" "+date2);
            
            Alert.alert(
                "Materiel",
                "Pour complèter votre avec operation,Remplire tous les champs",
                [
                  
                  { text: "Ok" }
                ]
              );
            //alert(date1);
        }
        else{
            
                // alert("good");
            //props.navigation.navigate('nextMaterials')
            var InsertAPIURL="http:/10.0.2.2:80/api/test2.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };

            var Data={
                idMaterialup:idMaterialup,
                Nameup:Nameup,
                Typeup:Typeup,
                Modelup:Modelup,
                NumberPateup:NumberPateup,
                LastTechnicalInspectionup:date1,
                LastInsuranceup:date2,
                id_ferme:id_ferme,
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
            {}
            )
            this.props.navigation.navigate('nextMaterials');
        }
        
    }
    


    render(){
        var {date1} = this.state;
        var {date2} = this.state;
        return(
            
            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles2.FlexGrowOne}
            >
             <ScrollView bounces={false}    
                  style= {syles2.FlexOne}
                    >
           <View style={{width:600,height:80,backgroundColor:'#D5D2C5'}}/>
           <Text style={{fontWeight:'700',color:'black',fontSize:20,top:8,left:10}}>Nom </Text>
            <View style={syles2.TextInputWrapper}>
            <TextInput placeholder="exemple" textAlign='center'  defaultValue={this.props.navigation.state.params.P1} onChangeText={Nameup=>this.setState({Nameup})}/>
            </View>
            <Text style={{fontWeight:'700',color:'black',fontSize:20,top:8,left:10}}>Type </Text>
            <View style={syles2.TextInputWrapper}>
            <TextInput placeholder="Type"  textAlign='center'  defaultValue={this.props.navigation.state.params.P2}   onChangeText={Typeup=>this.setState({Typeup})}/>
            </View>
            <Text style={{fontWeight:'700',color:'black',fontSize:20,top:8,left:10}}>Model </Text>
            <View style={syles2.TextInputWrapper}>
            <TextInput placeholder="Model"  textAlign='center'   defaultValue={this.props.navigation.state.params.P3}  onChangeText={Modelup=>this.setState({Modelup})}/>
            </View>
            <Text style={{fontWeight:'700',color:'black',fontSize:20,top:8,left:10}}>NumberPate </Text>
            <View style={syles2.TextInputWrapper}>
            <TextInput placeholder="NumberPate"  textAlign='center'  defaultValue={this.props.navigation.state.params.P4}  onChangeText={NumberPateup=>this.setState({NumberPateup})}/>
            </View>
            <Text style={{fontWeight:'700',color:'black',fontSize:20,top:8,left:10}}>Last technical inspection </Text>
            

            <View>

<DateTimePickerModal
    isVisible={this.state.isShowDatePicker1}
    mode="date"
    date1={this.state.date1}
    onConfirm={
      date1=>{this.setState({date1})}
    }
    onCancel={() => this.setState({ isShowDatePicker1: !this.state.isShowDatePicker1 })}
    //headerTextIOS='Please Select Date'
    confirmTextIOS='OK' />
    <TouchableOpacity  style={syles2.TextInputWrapper}  >

                <Text style={syles2.next} >{date1.getFullYear()}/{date1.getMonth() + 1}/{date1.getDate()}</Text>
                    <Icon name="calendar"  size={25} style={{top:-55,left:290,fontSize:40}} onPress={() => this.setState({ isShowDatePicker1: !this.state.isShowDatePicker1 })}/>  
                </TouchableOpacity>
                 </View >


            <Text style={{fontWeight:'700',color:'black',fontSize:20,top:8,left:10}}>Last insurance </Text>
            
            
            <View>

<DateTimePickerModal
    isVisible={this.state.isShowDatePicker2}
    mode="date"
    date2={this.state.date2}
    onConfirm={
      date2=>{this.setState({date2})}
    }
    onCancel={() => this.setState({ isShowDatePicker2: !this.state.isShowDatePicker2 })}
    //headerTextIOS='Please Select Date'
    confirmTextIOS='OK' />
    <TouchableOpacity  style={syles2.TextInputWrapper}  >

                <Text style={syles2.next} >{date2.getFullYear()}/{date2.getMonth() + 1}/{date2.getDate()}</Text>
                    <Icon name="calendar"  size={25} style={{top:-55,left:290,fontSize:40}} onPress={() => this.setState({ isShowDatePicker2: !this.state.isShowDatePicker2 })}/>  
                </TouchableOpacity>
                 </View >

            </ScrollView>
            <View>
            <Text style={syles2.biigBlue}>Koutti Agricole</Text>
            <Image source={require('./1.webp')} style={syles2.sizeImg} />
            </View>
            <View style={{height:50}}>
            <TouchableOpacity
       style={syles2.bt1}
        onPress={() => this.props.navigation.navigate('nextMaterials')}
        >
        <Text style={syles2.tx1} 
        
        >Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={syles2.bt2}
        onPress={() => this.InsertRecord()}
        >
        <Text style={syles2.tx2} 
        
        >Save</Text>
        </TouchableOpacity>
        </View>
           </KeyboardAvoidingView>
        );
    }
}
const syles2=StyleSheet.create(
    
    {
        TextInputWrapper: {
            backgroundColor:'#D5D2C5',
            //borderColor:'#6A2929',
            flex: 1,
            height: 58,
            
            margin:22,
            borderRadius:20,
            //borderWidth:2,
            textAlign:'center',
        },
        
                next:{
                    fontWeight:'bold',
                    width:300,
                    height:58,
                    fontSize:25,
                    top:7,
                    left:13,
                    textAlign:'center',
                    color:'#503835'
                },
        FlexGrowOne: {
            flexGrow : 1
        },
        FlexOne: {
            flex : 1
        },
        txa:{
            backgroundColor:'#FFFFFF',
            borderColor:'#6A2929',
            borderWidth:2,
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
            bt1:{
                backgroundColor:'#6A2929',
                position:'absolute',
                width:120,
                top:-10,
                left:100,
                height:40,
                borderRadius:20,
                // /padding:20,
    
                
            },
            tx1:{
                color:'#ECECEC',
                position:'absolute',
                //textAlign:'center',
                width:130,
                top:3,
               // fontWeight:'bold',
                fontSize:24,
                height:50,
                left:20,
                
                
                fontStyle:'normal',
                fontFamily:'Reem Kufi',
            },
            bt2:{
                backgroundColor:'#6A2929',
                position:'absolute',
                width:160,
                top:-8,
                left:225,
                height:50,
                borderRadius:20,
                // /padding:20,
    
                
            },
            tx2:{
                color:'#ECECEC',
                position:'absolute',
                //textAlign:'center',
                width:130,
                top:6,
                fontWeight:'bold',
                fontSize:25,
                height:54,
                left:50,
                
                fontStyle:'normal',
                fontFamily:'Reem Kufi',
            },
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
                txi2:{
                    backgroundColor:'#ECECEC',
                    borderColor:'#6A2929',
                    borderWidth:2,
                    position:'absolute',
                    textAlign:'center',
                    width:331,
                    top:210,
                    height:58,
                    left:30,
                    borderRadius:20,
                    
                 },
                 txi3:{
                    backgroundColor:'#ECECEC',
                    borderColor:'#6A2929',
                    borderWidth:2,
                    position:'absolute',
                    textAlign:'center',
                    width:331,
                    top:280,
                    height:58,
                    left:30,
                    borderRadius:20,
                    
                    },
                    txi4:{
                        backgroundColor:'#ECECEC',
                        borderColor:'#6A2929',
                        borderWidth:2,
                        position:'absolute',
                        textAlign:'center',
                        width:331,
                        top:350,
                        height:58,
                        left:30,
                        borderRadius:20,
                        
                        },
                        txi5:{
                            backgroundColor:'#ECECEC',
                            borderColor:'#6A2929',
                            borderWidth:2,
                            position:'absolute',
                            textAlign:'center',
                            width:331,
                            top:420,
                            height:58,
                            left:30,
                            borderRadius:20,
                            
                                },
                                txi6:{
                                    backgroundColor:'#ECECEC',
                                    borderColor:'#6A2929',
                                    borderWidth:2,
                                    position:'absolute',
                                    textAlign:'center',
                                    width:331,
                                    top:490,
                                    height:58,
                                    left:30,
                                    borderRadius:20,
                                    
                                        },
                                        bt:{
                                            backgroundColor:'#C1B613',
                                            position:'absolute',
                                            width:200,
                                            top:590,
                                            left:100,
                                            height:60,
                                            borderRadius:20,
                                            padding:20,
                                
                                            
                                        },
                                        
                                        
                                
                            })