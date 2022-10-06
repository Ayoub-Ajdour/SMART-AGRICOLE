import React,{Component} from 'react';
import {ImageBackground,View,Alert,Text,StyleSheet,Image,Button,TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Picker} from  '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons'; 



export default class addAnal extends Component{
    
    constructor(props){
        super(props);
        this.state={cycle:'',production:'',date1:new Date,dateActuel:new Date,Temp:'',ph:'',listData:[],cin:'',id_ferme:'',dateCulture:'' ,vibrate: false,
      
        isShowDatePicker: false,};
        this.productionAmb();
    }

    createTwoButtonAlert (val){
        //var c=JSON.stringify(this.state.date2);
         this.state.year1=this.state.date1.getFullYear();
        this.state.month1=this.state.date1.getMonth()+1;
        this.state.day1=this.state.date1.getDay()+1;
        this.state.year2=this.state.date1.getFullYear();
        this.state.month2=this.state.date1.getMonth()+1;
        this.state.day2=this.state.date1.getDay()+1;
        var datee=JSON.stringify(this.state.date1);
        
        var production=this.state.production;
       // alert(production);
           
        var dattee=this.state.date1;
        
        var Temp=this.state.Temp;
        var ph=this.state.ph;
        var cycle=this.state.cycle;
       // alert(HauP+datte+ColorF+Temp+flo+cycle);
        if(Temp.length==0 ||ph.length==0 ||cycle.length==0||production.length==0){
            

            Alert.alert(
                "Analyse",
                "Pour complèter votre avec operation,Remplire tous les champs",
                [
                  
                  { text: "Ok" }
                ]
              );
        }
        else{

        Alert.alert(
          "Analyse",
          val,
          [
            
            { text: "Valider", onPress: () => this.InsertRecord() }
          ]
        );
    }
    }


    InsertRecord=()=>
    {
        this.state.cin=this.props.navigation.state.params.p1;
        this.state.id_ferme=this.props.navigation.state.params.p2;
        var cin=this.state.cin;
        var id_ferme=this.state.id_ferme;
        var production=this.state.production;
         
        var datte=this.state.date1;
    
        var Temp=this.state.Temp;
        var ph=this.state.ph;
        var cycle=this.state.cycle;
       // alert(HauP+datte+ColorF+Temp+flo+cycle);
        if(Temp.length==0 ||ph.length==0 ||cycle.length==0||production.length==0){
            Alert.alert(
                "Analyse",
                "Pour complèter votre avec operation,Remplire tous les champs",
                [
                  
                  { text: "Ok" }
                ]
              );            
        }
        else{
           //alert("good");
            //props.navigation.navigate('nextMaterials')
            var InsertAPIURL1="http:/10.0.2.2:80/api/insertAn.php";
            var headers={
                'Accept':'application/json',
                'Content-Type':'application.json'
            };
            
            var Data1={
                cin:cin,
                id_ferme:id_ferme,
              
             
                temperature:Temp,
                ph:ph,
                cycle_plante:cycle,
                date_suivi:datte,
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
               
                //alert("hey");
              //  alert(Response[0].Message);
                
            }
            )
            .catch((error)=>
            {}
            )
            
        }

    }
    productionAmb(){
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
         var i="http://10.0.2.2:80/api/Affprod.php";
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
             {}
             )
    }
    acvPro=(value)=>{
        // this.state.variete=value;
         this.setState({production:value});

         var Data={
            id_produc:value
         };
         var headers={
             'Accept':'application/json',
             'Content-Type':'application.json'
         };
         var i="http://10.0.2.2:80/api/takeDate.php";
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
                 this.state.dateCulture=new Date(Datta[0].date_debut);
                
                // alert('h');
             
             }
             )
             .catch((error)=>
            {}
             )
         
     }

    acvcycle=(value)=>{
        // this.state.variete=value;
         this.setState({cycle:value});
     }

     test(){
        var moiActual=this.state.dateActuel.getMonth();
        if(moiActual=0){
        this.state.tempMax=31;
        this.state.tempMin=19;
        }
        else if(moiActual=1){
        this.state.tempMax=42;
        this.state.tempMin=20;
        }
        else if(moiActual=2){
        this.state.tempMax=40;
        this.state.tempMin=24;
        }else if(moiActual=3){
            this.state.tempMax=41;
            this.state.tempMin=25;
        }else if(moiActual=4){
            this.state.tempMax=41;
            this.state.tempMin=29;
        }else if(moiActual=5){
            this.state.tempMax=39;
            this.state.tempMin=27;
        }else if(moiActual=6){
            this.state.tempMax=35;
            this.state.tempMin=25;
        }else if(moiActual=7){
            this.state.tempMax=33;
            this.state.tempMin=24;
        }else if(moiActual=8){
            this.state.tempMax=34;
            this.state.tempMin=24;
        }else if(moiActual=9){
            this.state.tempMax=38;
            this.state.tempMin=25;
        }else if(moiActual=10){
            this.state.tempMax=35;
            this.state.tempMin=19;
        }else if(moiActual=11){
            this.state.tempMax=32;
            this.state.tempMin=15;
        }
        var temperature=this.state.Temp;
        if(temperature<=this.state.tempMax && temperature>=this.state.tempMin){
            var message="1) temperature est favorable pour votre culture";
        }
        else if(temperature>this.state.tempMax){
            var message="1) temperature n'est favorable pour votre culture !!\nLa temperature ideal pour ce mois est entre "+this.state.tempMin+" et "+this.state.tempMax;
        }
        else{
            var message="1) temperature n'est favorable pour votre culture !!\nLa temperature ideal pour ce mois est entre "+this.state.tempMin+" et "+this.state.tempMax;
        }

        var d1=new Date(this.state.date1);

        var time_diff = d1.getTime() - this.state.dateCulture.getTime();
        // différence de jours
       var days_Diff = time_diff / (1000 * 3600 * 24);
       // afficher la différence
       var time=parseInt(days_Diff);
       if(this.state.cycle=="Levée"){
        if(time<10 && time>6){
            message+="\n2) votre culture en bon progrès agricole (cycle Avancé)";
        }else{
            message+="\n2) Attention !! Il y a un problem dans votre culture (cycle Retardé)";
        }
       }else if(this.state.cycle=="Sortie 1ère feuille"){

        if(time<15 && time>10){
            message+="\n2) votre culture en bon progrès agricole (cycle Avancé)";
        }else{
            message+="\n2) Attention !! Il y a un problem dans votre culture (cycle Retardé)";
        }

    }else if(this.state.cycle=="Développement racines et feuilles"){

        if(time<40 && time>15){
            message+="\n2) votre culture en bon progrès agricole (cycle Avancé)";
        }else{
            message+="\n2) Attention !! Il y a un problem dans votre culture (cycle Retardé)";
        }

    }else if(this.state.cycle=="Tubérisation"){

        if(time<100 && time>40){
            message+="\n2) votre culture en bon progrès agricole (cycle Avancé)";
        }else{
            message+="\n2) Attention !! Il y a un problem dans votre culture (cycle Retardé)";
        }

    }else if(this.state.cycle=="Récolte"){

        if(time<150 && time>100){
            message+="\n2) vos carotte sont disponibles pour recoler (cycle Avancé)";
        }else{
            message+="\n2) Attention !! Il y a un problem dans votre culture (cycle Retardé)";
        }

    }

    if(this.state.ph<8 && this.state.ph>5.5){
        message+="\n3) Pour Acidité est ideal";
    }else{
        message+="\n3) Attention !! ph n'est pas rythmique ! traiter-le";
    }

    //
    this.props.navigation.navigate('infoAnalyse',{p:message});
       this.InsertRecord();
    }
     

    render(){
        var {date1} = this.state;
        return(
            
            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
            style= {syles2.FlexGrowOne}
            >
                <View style={{width:600,height:80,backgroundColor:'#ECECEC'}}>
                    <Text style={{color:'#000000',
                position:'absolute',
                textAlign:'center',
                width:800,
                top:10,
                fontWeight:'bold',
                fontSize:35,
                height:54,
                left:-210,
                }}>Noveau Analyse</Text>
                </View>
             <ScrollView bounces={false}
                  style= {syles2.FlexOne}
                    >
           <View style={syles2.TextInputWrapper}>
           <Picker 
                    onValueChange={this.acvPro.bind()}
                    selectedValue={this.state.production}
                    > 
                        <Picker.Item label='selectionner le production' value={0}></Picker.Item>
                        {
                    
                    this.state.listData.map((val,index)=>
                    (

                           
                           <Picker.Item  label={val.variete} value={val.id_produc} key={index} ></Picker.Item>
                        
                        //onPress={()=>this.takeDate(val.date_debut)}
                    ))
                }
                        </Picker>
            </View>
            <View>
                    <Text style={{fontWeight:'700',color:'black',top:10,left:20,fontSize:20}}>Cycle plante</Text>
                </View>
            <View  style={syles2.TextInputWrapper}>
            <Picker 
                    onValueChange={this.acvcycle.bind()}
                    selectedValue={this.state.cycle}
                    > 
                        <Picker.Item label='selaectionner la variete' value={0}></Picker.Item>
                           <Picker.Item label='Levée' value='Levée' ></Picker.Item>
                           <Picker.Item label='Sortie 1ère feuille' value='Sortie 1ère feuille' ></Picker.Item>
                           <Picker.Item label='Développement racines et feuilles' value='Développement racines et feuilles' ></Picker.Item>
                           <Picker.Item label='Tubérisation' value='Tubérisation' ></Picker.Item>
                           <Picker.Item label='Récolte' value="Récolte" ></Picker.Item>
                        </Picker>
            </View>

         
           
               
                
            <View>
                    <Text style={{fontWeight:'700',color:'black',top:10,left:20,fontSize:20}}>temperature</Text>
                </View>
            <View  style={syles2.TextInputWrapper}>
            <TextInput placeholder="temperature" onChangeText={Temp=>this.setState({Temp})} style={{textAlign:'center'}} keyboardType='numeric'/>
            </View>
           
           
            <View>
                    <Text style={{fontWeight:'700',color:'black',top:10,left:20,fontSize:20}}>Valeur de PH</Text>
                </View>
            <View style={syles2.TextInputWrapper}>
            <TextInput placeholder="PH" onChangeText={ph=>this.setState({ph})} style={{textAlign:'center'}}  keyboardType='numeric'/>
            </View>
            <View>
                    <Text style={{fontWeight:'700',color:'black',top:10,left:20,fontSize:20}}>Date de suivie</Text>
                </View>
           <View  >
           <DateTimePickerModal
          isVisible={this.state.isShowDatePicker}
          mode="date"
          date1={this.state.date1}
          onConfirm={
            date1=>{this.setState({date1})}
          }
          onCancel={() => this.setState({ isShowDatePicker: !this.state.isShowDatePicker })}
          //headerTextIOS='Please Select Date'
          confirmTextIOS='OK' />
          <TouchableOpacity  style={syles2.TextInputWrapper}  >
     
     <Text style={syles2.next} >{date1.getFullYear()}/{date1.getMonth() + 1}/{date1.getDate()}</Text>
     <Icon name="calendar"  size={25} style={{top:-45,left:300}} onPress={() => this.setState({ isShowDatePicker: !this.state.isShowDatePicker })}/>  
</TouchableOpacity>
    
    </View>
   
            
           <View style={{height:60}}>
            <TouchableOpacity
        style={syles2.bt1}
        onPress={() => this.props.navigation.navigate('Analyse')}
>
        <Text style={syles2.tx1} 
        
        >annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={syles2.bt2}
        onPress={() => this.test()}
        >
        <Text style={syles2.tx2} 
       
        >continue</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        <View>
          
            <Image source={require('./1.webp')} style={syles2.sizeImg} />
            </View>
        </KeyboardAvoidingView>            
        );
    }
}
const syles2=StyleSheet.create(
    
    {
        sizeImg:{
            flex : 1,
        
                width:91,
            
                left:28,
                height:98,
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
           // top:580,
            //left:40,
            height:98,

            },
            biigBlue:{
                color:'#0B6CFF',
                position:'absolute',
                textAlign:'center',
                width:250,
                //top:620,
                //left:100,
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
                top:7,
                left:90,
                height:40,
                borderRadius:20,
                // /padding:20,
    
                
            },
            tx1:{
                color:'#ECECEC',
                position:'absolute',
                //textAlign:'center',
               // width:130,
                //top:3,
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
                top:5,
                left:220,
                height:45,
                borderRadius:20,
                // /padding:20,
    
                
            },
            tx2:{
                color:'#ECECEC',
                position:'absolute',
                //textAlign:'center',
                width:130,
                top:2,
                fontWeight:'bold',
                fontSize:25,
                height:54,
                left:35,
                
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