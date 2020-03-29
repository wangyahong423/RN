import React, { Component } from 'react';
import {View,TextInput, Image, Button,Text, ScrollView,StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Home extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{flexDirection:'row',height:74,alignItems:'center',justifyContent:'center',backgroundColor:'#f23030'}}>
                        <View style={{width:'80%',height:43,backgroundColor:'#fbb8b8',borderRadius:21.5,marginRight:10,flexDirection:'row',alignItems:'center',paddingLeft:20}}>
                            <Icon name='search1' size={20} color='white' />
                            <TextInput placeholder='请输入您要搜索的内容' placeholderTextColor="#FFFFFF" style={{paddingLeft:10,fontSize:12}} />
                        </View>
                        <Icon name='shoppingcart' size={30} color='white' />
                </View>
                <Swiper style={styles.wrapper} showsButtons>
                    <View>
                        <Image source={require('../../assets/per.png')} style={{height:223,width:'100%'}} />
                    </View>
                    <View>
                        <Image source={require('../../assets/2.png')} style={{height:223,width:'100%'}} />

                    </View>
                    <View>
                        <Image source={require('../../assets/3.png')} style={{height:223,width:'100%'}} />

                    </View>
                </Swiper>
                <View>
                        <View style={{width:'100%',height:65,backgroundColor:'#fff',marginTop:11,paddingLeft:25,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                            <Image style={{height:57,width:58}} source={require('../../assets/2.png')} />
                            <Text style={{marginLeft:25}}>居家维修保养</Text>
                            <Icon style={{marginLeft:230}} name='right' size={18} color='#EEEEEE' />
                        </View>
                        <View style={{width:'100%',height:65,backgroundColor:'#fff',marginTop:11,paddingLeft:25,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                            <Image style={{height:57,width:56}} source={require('../../assets/1.png')} />
                            <Text style={{marginLeft:25}}>住宿优惠</Text>
                            <Icon style={{marginLeft:258}} name='right' size={18} color='#EEEEEE' />
                        </View>
                        <View style={{width:'100%',height:65,backgroundColor:'#fff',marginTop:11,paddingLeft:25,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                            <Image style={{height:57,width:56}} source={require('../../assets/3.png')} />
                            <Text style={{marginLeft:25}}>出门接送</Text>
                            <Icon style={{marginLeft:258}} name='right' size={18} color='#EEEEEE' />
                        </View>
                        <View style={{width:'100%',height:65,backgroundColor:'#fff',marginTop:11,paddingLeft:25,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                            <Image style={{height:57,width:57}} source={require('../../assets/5.png')} />
                            <Text style={{marginLeft:25}}>E族活动</Text>
                            <Icon style={{marginLeft:263}} name='right' size={18} color='#EEEEEE' />
                        </View>
                    </View>

                    <View style={{width:'85%',height:40,borderRadius:7,marginTop:27,marginLeft:'7.5%',backgroundColor:'red'}}>
                        <Text style={{textAlign:'center',lineHeight:40,color:'#fff',fontSize:18}}>发布需求</Text>
                    </View>
                    <Text style={{color:'#767676',marginTop:30,textAlign:'center'}}>©E族之家 版权所有</Text>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    wrapper: {
        height:223,
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })
  