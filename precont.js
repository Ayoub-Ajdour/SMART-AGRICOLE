import React,{Component} from 'react';
import {ImageBackground,View,Text,StyleSheet,Image,Button,TouchableOpacity,TextInput} from 'react-native';
export default class precont extends Component{
         
    constructor(props){
        super(props);
        this.state={texts:'',id_user:'',list:[]};

   }

   affiche=()=>{
    this.state.id_user=this.props.navigation.state.params.p;
    var id_user=this.state.id_user ; 
        var insertAPIURL="http://10.0.2.2:80/api/affiche.php";
        var headers={
            'Accept':'application/json',
            'Content-type':'application.json'
        };
        var Data={
            
           id_user:id_user,
         };
         fetch(insertAPIURL,{
            method:'POST',
            headers:headers, 
            body:JSON.stringify(Data)
        }
        )
        .then((Response)=>Response.json())
        .then((Response)=>
        {
           // alert(Response[0].Message);
               
            this.setState({list:Response.data.result});
            
        }
        )
        .catch((error)=>{
            alert("error"+error);
        }
        )
    
}
   InserRecord=()=>{
    var texts=this.state.texts;
    this.state.id_user=this.props.navigation.state.params.p;
    var id_user=this.state.id_user ;     
    // alert(this.state.id_user);
    if(texts.length==0){
          alert("le champ est vide !!");
        // alert(this.state.id_user);
      }else{
        var insertAPIURL="http://10.0.2.2:80/api/message.php";
        var headers={
            'Accept':'application/json',
            'Content-type':'application.json'
        };
        var Data={
            texts:texts,
           id_user:id_user,
         };
         fetch(insertAPIURL,{
            method:'POST',
            headers:headers, 
            body:JSON.stringify(Data)
        }
        )
        .then((Response)=>Response.json())
        .then((Response)=>
        {
           //alert(Response[0].Message);
           this.affiche();
           // this.setState({list:Response.data.result});
            
        }
        )
        .catch((error)=>{
            alert("error"+error);
        }
        )
    }
}

    render(){
        this.affiche();
        return(
           
               <View>

                <TextInput  placeholder="description de malade"   onChangeText={texts=>this.setState({texts})}/>
                <TouchableOpacity   onPress={this.InserRecord}>
            
        <Text >save</Text>
             </TouchableOpacity>
             <View>
             {
                        this.state.list.map((val,index)=>
                       <View key={index}>
                           <Text>{val.message_text}|||{val.id_user} </Text>
                          
                           </View>
                        )
                    }
             </View>
                </View >
               
            
        );

    }
}