import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {reateBottomTabNavigator,createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Icon} from 'react-native-elements';
import Prof from './profil';
import Cart from './cart';

 class home extends Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:40}}>rachid ait lakit </Text>
            </View>
        );

    }
}
const TabNavigator=createMaterialBottomTabNavigator(
    {
        Home :{screen:home,
            navigationOptions:{
                tabBarLabel:'clik me',
                activeColor:'#ff0000',
                inactiveColor:'#000000',
                barStyle:{backgroundColor:'#67baf6'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'home'} size={25} style={{color:'#ff0000'}}/>
                    </View>
                )
            }
        },
        Cart :{screen:Cart,
            navigationOptions:{
                tabBarLabel:'Cart',
                activeColor:'#ff0000',
                inactiveColor:'#000000',
                barStyle:{backgroundColor:'#67baf6'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'list'} size={25} style={{color:'#ff0000'}}/>
                    </View>
                )
            }
        },
        //topic
        Prof :{screen:Prof,
            navigationOptions:{
                tabBarLabel:'Profile',
                activeColor:'#ff0000',
                inactiveColor:'#000000',
                barStyle:{backgroundColor:'#67baf6'},
                tabBarIcon:()=>(
                    <View>
                        <Icon name={'receipt-long'} size={25} style={{color:'#ff0000'}}/>
                    </View>
                )
            }
        }

    }
);

export default createAppContainer(TabNavigator);