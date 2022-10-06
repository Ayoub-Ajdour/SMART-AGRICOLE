import React,{Component} from 'react';
import {View,Text,StyleSheet,Button ,TextInput} from 'react-native';


export default class StudentInsert extends Component{
    constructor(props){
         super(props);
         this.state={ROLLNO:'',NAME:'',COURSE:''};
    }
    InserRecord=()=>{
        var ROLLNO=this.state.ROLLNO;
        var NAME=this.state.NAME;
        var COURSE=this.state.COURSE;
        if(ROLLNO.length==0||NAME.length==0||COURSE.length==0){
                alert("3awd lkrk");
        }
        else{
             var insertAPIURL="http://10.0.2.2:80/api/insert.php";
             var headers={
                 'Accept':'application/json',
                 'Content-type':'application.json'
             };
             var Data={
                ROLLNO:ROLLNO,
                NAME:NAME,
                COURSE:COURSE

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
                 alert(Response[0].Message);
             }
             )
             .catch((error)=>{
                 alert("errhj"+error);
             }
             )
        }
    }
    render(){
        return(
            <View style={styles.ViewStyle}> 
                <TextInput 
                placeholder={"ROLLNO"}
                keyboardType={"numeric"}
                style={styles.txtsyle}
                onChangeText={ROLLNO=>this.setState({ROLLNO})}
                />
            <TextInput 
                placeholder={"NAME"}
                style={styles.txtsyle}
                onChangeText={NAME=>this.setState({NAME})}
                />
                 <TextInput 
                placeholder={"COURSE"}
                style={styles.txtsyle}
                onChangeText={COURSE=>this.setState({COURSE})}
                />
                <Button
                title={"clik me"}
                onPress={this.InserRecord}
                />
            </View>
        );

    }
}
const styles=StyleSheet.create({

  ViewStyle:{
      flex:1,
      padding:20,
      marginTop:10
  },
  txtsyle:{
     borderBottomWidth:1,
     borderBottomColor:'red',
     marginBottom:20
  }

});