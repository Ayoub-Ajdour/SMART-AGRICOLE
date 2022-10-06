import React,{Component} from "react";
import {View} from "react-native";
import {Picker} from '@react-native-picker/picker';
export default class kaka extends Component{
    constructor(){
        super();
        this.state={selecdValueb:''};
      }
     show=(value)=>{
     alert(value);
      this.setState({selecdValueb:value});
     }
    render(){
        return(
            <View>
        
                <Picker
                
                  selectedValue={this.state.selecdValueb}
                  onValueChange={this.show.bind()}
                >
                    
                <Picker.Item   label="select item" ></Picker.Item>
                <Picker.Item   label="raect" value="8000"></Picker.Item>
                <Picker.Item   label="html" value="7000"></Picker.Item>
                <Picker.Item   label="select" value="6000"></Picker.Item>
                </Picker>
            
            </View>
        );
    }
}