import React, { Component } from 'react';

import { StyleSheet, TextInput, View, Text, KeyboardAvoidingView, Keyboard, TouchableOpacity, ScrollView, Platform } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    submit() {
     //   Keyboard.dismiss();
    }
    render() {
        return (
            <KeyboardAvoidingView enabled behavior={ Platform.OS === 'ios'? 'padding': null}
                style= {styles.FlexGrowOne}
                >
                
                <ScrollView bounces= {false}
                  style= {styles.FlexOne}
                    >

                    <View  >
                        <TextInput/>
                    </View>

                    <View 
                    >
                        <TextInput 
                            />
                            
                    </View>

                    <View 
                    >
                        <TextInput 
                            />
                    </View>

                    <View 
                    >
                        <TextInput 
                            />
                    </View>

                    <View 
                    >
                        <TextInput 
                            />
                    </View>

                    <View 
                    >
                        <TextInput 
                            />
                    </View>

                    <View 
                    >

                        <TextInput 
                            />
                    </View>

                    <View 
                    >
                        <TextInput 
                            />
                    </View>

                    <View 
                    >
                        <TextInput 
                           />
                    </View>
                </ScrollView>

                <View //style= {[styles.Shadow, styles.ButtonBackgroundColor]}
                >
                    <TouchableOpacity //style={[styles.ButtonWrapper, styles.Shadow]}
                       // activeOpacity={0.5}
                        onPress={()=> this.submit()}>
                        <Text //style= {styles.SubmitText}
                        >SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    FlexGrowOne: {
        flexGrow : 1
    },
    FlexOne: {
        flex : 1
    },
    TextInputWrapper: {
        flex: 1,
        height: 40,
        margin: 20
    },
    ButtonWrapper: {
        backgroundColor: '#51D8C7',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#000',
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 30,
        marginBottom: 30
    },
    ButtonBackgroundColor: {
        backgroundColor: '#e6fff9'
    },
    Shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    SubmitText: {
        color: '#FFFFFF', 
        paddingVertical: 10, 
        fontSize: 16
    }
});