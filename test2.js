import React, { Component } from 'react';

import { StyleSheet, TextInput, View, Text, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView, Platform } from 'react-native';
export default class test2 extends Component {
    render(){
        return(
            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}>
                <ScrollView bounces= {false}>
                <View >
                        <TextInput underlineColorAndroid= "#413E4F"
                            placeholder= "Enter First Name"
                            placeholderTextColor= "#413E4F"
                            ref={ref => { this._nameinput = ref; }}
                            returnKeyType= "next"
                            onSubmitEditing={() =>this._lname.focus()}/>
                            
                            
                    </View>
                    <View >
                        <TextInput underlineColorAndroid= "#413E4F"
                            placeholder= "Enter First Name"
                            placeholderTextColor= "#413E4F"
                            ref={ref => { this._nameinput = ref; }}
                            returnKeyType= "next"
                            onSubmitEditing={() =>this._lname.focus()}/>
                            
                            
                    </View>
                    <View >
                        <TextInput underlineColorAndroid= "#413E4F"
                            placeholder= "Enter First Name"
                            placeholderTextColor= "#413E4F"
                            ref={ref => { this._nameinput = ref; }}
                            returnKeyType= "next"
                            onSubmitEditing={() =>this._lname.focus()}/>
                            
                            
                    </View>
                    <View >
                        <TextInput underlineColorAndroid= "#413E4F"
                            placeholder= "Enter First Name"
                            placeholderTextColor= "#413E4F"
                            ref={ref => { this._nameinput = ref; }}
                            returnKeyType= "next"
                            onSubmitEditing={() =>this._lname.focus()}/>
                            
                            
                    </View>
                    <View >
                        <TextInput underlineColorAndroid= "#413E4F"
                            placeholder= "Enter First Name"
                            placeholderTextColor= "#413E4F"
                            ref={ref => { this._nameinput = ref; }}
                            returnKeyType= "next"
                            onSubmitEditing={() =>this._lname.focus()}/>
                            
                            
                    </View>
                    <View >
                        <TextInput underlineColorAndroid= "#413E4F"
                            placeholder= "Enter First Name"
                            placeholderTextColor= "#413E4F"
                            ref={ref => { this._nameinput = ref; }}
                            returnKeyType= "next"
                            onSubmitEditing={() =>this._lname.focus()}/>
                            
                            
                    </View>
                    <View >
                        <TextInput underlineColorAndroid= "#413E4F"
                            placeholder= "Enter First Name"
                            placeholderTextColor= "#413E4F"
                            ref={ref => { this._nameinput = ref; }}
                            returnKeyType= "next"
                            onSubmitEditing={() =>this._lname.focus()}/>
                            
                            
                    </View>
                    <View >
                        <TextInput underlineColorAndroid= "#413E4F"
                            placeholder= "Enter First Name"
                            placeholderTextColor= "#413E4F"
                            ref={ref => { this._nameinput = ref; }}
                            returnKeyType= "next"
                            onSubmitEditing={() =>this._lname.focus()}/>
                            
                            
                    </View>
                    <View >
                        <TextInput underlineColorAndroid= "#413E4F"
                            placeholder= "Enter First Name"
                            placeholderTextColor= "#413E4F"
                            ref={ref => { this._nameinput = ref; }}
                            returnKeyType= "next"
                            onSubmitEditing={() =>this._lname.focus()}/>
                            
                            
                    </View>
                    <View >
                        <TextInput underlineColorAndroid= "#413E4F"
                            placeholder= "Enter First Name"
                            placeholderTextColor= "#413E4F"
                            ref={ref => { this._nameinput = ref; }}
                            returnKeyType= "next"
                            onSubmitEditing={() =>this._lname.focus()}/>
                            
                            
                    </View>
                    <View >
                        <TextInput underlineColorAndroid= "#413E4F"
                            placeholder= "Enter First Name"
                            placeholderTextColor= "#413E4F"
                            ref={ref => { this._nameinput = ref; }}
                            returnKeyType= "next"
                            onSubmitEditing={() =>this._nameinput.focus()}/>
                            
                            
                    </View>
                    <View >
                        <TextInput underlineColorAndroid= "#413E4F"
                            placeholder= "Enter First Name"
                            placeholderTextColor= "#413E4F"
                            ref={ref => { this._nameinput = ref; }}
                            returnKeyType= "next"
                            onSubmitEditing={() =>this._lname.focus()}/>
                            
                            
                    </View>
                </ScrollView>
                <View >
                    <TouchableOpacity 
                        activeOpacity={0.5}
                        >
                        <Text >SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}