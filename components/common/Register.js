import React, { Component } from 'react'
import { Icon } from '@ant-design/react-native';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils';

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isregistering:false,
            num:0
        }
    }
    userhandle = (text)=>{
        if(text!==''){
          this.setState({username:text,num:0})
        }
          
      }
    pwdhandle = (text)=>{
        if(text!==''){
          this.setState({pwd:text,num:0})
        }
      }
    register = ()=>{
        
        if(this.state.username != '' && this.state.pwd != ""){
            this.setState({
                isregistering:true
            })
            myFetch.post('/register',{
                username:this.state.username,
                pwd:this.state.pwd}
            ).then(res=>{
                // 注册成功
                Actions.login();
            })
        }
        else{
            this.setState({
              num:1
            })
            console.log('请输入用户名');
        }
        
    }
    relogin = ()=>{
        Actions.login();
    }
    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center'}}>
                <View
                    style={{ alignItems: 'center'}}>
                    <View
                        style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        }}>
                        <Icon name="user" color="red"/>
                        <TextInput placeholder="用户名" 
                            onChangeText={this.userhandle}
                        />
                    </View>
                    <View
                        style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        }}>
                        <Icon name="lock" color="red"/>
                        <TextInput 
                            onChangeText={this.pwdhandle}
                            placeholder="密码" 
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity 
                            style={{
                                width: '35%',
                                height: 40,
                                backgroundColor: '#ccc',
                                marginTop: 30,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight:40,
                                marginLeft:-12
                            }}
                            onPress={this.register}>
                            <Text>注册</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{
                                width: '35%',
                                height: 40,
                                backgroundColor: '#ccc',
                                marginTop: 30,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={this.relogin}>
                            <Text>返回登录</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.num == 0 
                        ? <View style={{marginTop:30}}><Text></Text></View>
                        : <View style={{height:40,backgroundColor:'#ccc',justifyContent:'center',padding:10,borderRadius:15,marginTop:30}}><Text>请输入用户名或密码！</Text></View>
                    }
                </View>
                {
                    this.state.isregistering
                    ?<View style={{height:'30%',width:'80%',position:'absolute',zIndex:11,left:45,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}><Text style={{fontSize:20}}>注册中...</Text></View>
                    :null
                }
            </View>
       
        )
    }
}
