import React, { Component } from 'react'
import { Icon } from '@ant-design/react-native';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils';

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            repwd:'',
            isregistering:false,
            num:0,
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
    repwdhandle = (text)=>{
        if(text!==''){
          this.setState({repwd:text,ise:0})
        }
      }
    register = ()=>{
        if(this.state.username != '' && this.state.pwd != "" && this.state.repwd != ""){
            if( this.state.pwd == this.state.repwd){
                this.setState({
                    isregistering:true,
                    ise:0
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
                Alert.alert('密码不一致')
            }
            
        }
        else{
            if(this.state.username ==''){
                Alert.alert('请输入用户名！');
            }
            else if(this.state.pwd == ''){
                Alert.alert('请输入密码！');
            }
            else if(this.state.repwd == ''){
                Alert.alert('请再次确认密码！');
            }
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
                        <TextInput placeholder="请输入用户名" 
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
                            placeholder="请输入密码" 
                            secureTextEntry={true}
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
                            onChangeText={this.repwdhandle}
                            placeholder="请确认密码" 
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
