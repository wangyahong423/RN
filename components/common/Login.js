import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false,
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
    login = ()=>{
        if(this.state.username != '' && this.state.pwd != ""){
          this.setState({
            isloading:true
          })
          myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd}
          ).then(res=>{
              console.log(this.state.username,this.state.pwd)
              AsyncStorage.setItem('user',JSON.stringify(res.data))
                  .then(()=>{
                      this.setState({isloading:false})
                      Actions.homePage();
                  })
          })
        }
        else{
          this.setState({
            num:1
          })
          console.log('请输入用户名');
        }
        
    } 
    toregister = ()=>{
      Actions.register();
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
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.login}>
                <Text>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.toregister}>
                <Text>去注册</Text>
            </TouchableOpacity>
            {
              this.state.num == 0 
              ? <View style={{marginTop:30}}><Text></Text></View>
              : <View style={{height:40,backgroundColor:'#ccc',justifyContent:'center',padding:10,borderRadius:15,marginTop:30}}><Text>请输入用户名或密码！</Text></View>
            }
            
        </View>
        {
            this.state.isloading
            ?<View style={{height:'30%',width:'80%',position:'absolute',zIndex:11,left:45,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}><Text style={{fontSize:20}}>正在登录中...</Text></View>
            :null
        }
      </View>
    );
  }
}