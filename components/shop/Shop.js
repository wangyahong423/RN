import React, { Component } from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity,FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export default class Shop extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{backgroundColor:'white',height:60,marginTop:10,alignItems:'center'}}>
                    <View  style={{height:60,width:'94%',justifyContent:'center'}}>
                        <Icon name='spinner' style={{marginLeft:10}} size={30} color='green' />
                        <Text style={{position:'absolute',left:70,fontSize:18}}>圈子</Text>
                        <Icon name='angle-right' style={{position:'absolute',right:20}} size={30} />
                    </View>
                </View>
                <View style={{backgroundColor:'white',height:120,marginTop:10,alignItems:'center'}}>
                    <View style={{height:60,width:'94%',borderBottomWidth:0.5,borderBottomColor:'grey',justifyContent:'center'}}>
                        <Icon name='suitcase' style={{marginLeft:10}} size={30} color='red' />
                        <Text style={{position:'absolute',left:70,fontSize:18}}>广场</Text>
                        <Icon name='angle-right' style={{position:'absolute',right:20}} size={30} />
                    </View>
                    <View style={{height:60,width:'94%',justifyContent:'center'}}>
                        <Icon name='rss-square' style={{marginLeft:10}} size={30} color='blue' />
                        <Text style={{position:'absolute',left:70,fontSize:18}}>智能办公硬件</Text>
                        <Icon name='angle-right' style={{position:'absolute',right:20}} size={30} />
                    </View>
                </View>
                <View style={{backgroundColor:'white',height:180,marginTop:10,alignItems:'center'}}>
                    <View style={{height:60,width:'94%',borderBottomWidth:0.5,borderBottomColor:'grey',justifyContent:'center'}}>
                        <Icon name='superpowers' style={{marginLeft:10}} size={30} color='orange' />
                        <Text style={{position:'absolute',left:70,fontSize:18}}>扫一扫</Text>
                        <Icon name='angle-right' style={{position:'absolute',right:20}} size={30} />
                    </View>
                    <View style={{height:60,width:'94%',borderBottomWidth:0.5,justifyContent:'center'}}>
                        <Icon name='bullseye' style={{marginLeft:10}} size={30} color='#ddd' />
                        <Text style={{position:'absolute',left:70,fontSize:18}}>看一看</Text>
                        <Icon name='angle-right' style={{position:'absolute',right:20}} size={30} />
                    </View>
                    <View style={{height:60,width:'94%',justifyContent:'center'}}>
                        <Icon name='search' style={{marginLeft:10}} size={30} color='rgb(346,195,103)' />
                        <Text style={{position:'absolute',left:70,fontSize:18}}>搜一搜</Text>
                        <Icon name='angle-right' style={{position:'absolute',right:20}} size={30} />
                    </View>
                </View>
                <View style={{backgroundColor:'white',height:120,marginTop:10,alignItems:'center'}}>
                    <View style={{height:60,width:'94%',borderBottomWidth:0.5,justifyContent:'center'}}>
                        <Icon name='pencil-square' style={{marginLeft:10}} size={30} color='pink' />
                        <Text style={{position:'absolute',left:70,fontSize:18}}>学习中心</Text>
                        <Icon name='angle-right' style={{position:'absolute',right:20}} size={30} />
                    </View>
                    <View style={{height:60,width:'94%',justifyContent:'center'}}>
                        <Icon name='gift' style={{marginLeft:10}} size={30} color='yellow' />
                        <Text style={{position:'absolute',left:70,fontSize:18}}>福利社</Text>
                        <Icon name='angle-right' style={{position:'absolute',right:20}} size={30} />
                    </View>
                </View>
                <View style={{backgroundColor:'white',height:60,marginTop:10,alignItems:'center'}}>
                    <View style={{height:60,width:'94%',justifyContent:'center'}}>
                        <Icon name='align-left' style={{marginLeft:10}} size={30} color='purple' />
                        <Text style={{position:'absolute',left:70,fontSize:18}}>更多</Text>
                        <Icon name='angle-right' style={{position:'absolute',right:20}} size={30} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
