import React, { Component } from 'react';
import {View,Text, Image, ScrollView, Dimensions,ImageBackground,AsyncStorage, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker'
import Login from '../common/Login';

const {width} = Dimensions.get('window');
const s = width/460;

const options = {
    title: '选择图片', 
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照', 
    chooseFromLibraryButtonTitle: '选择照片',
    cameraType: 'back',
    mediaType: 'photo',
    videoQuality: 'high', 
    durationLimit: 10, 
    maxWidth: 300,
    maxHeight: 300,
    quality: 0.8, 
    angle: 0,
    rotation:90,
    allowsEditing: false, 
    noData: false,
    storageOptions: {
        skipBackup: true  
    }
};

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: require('../../assets/img0.png'),
        };
     }

    componentDidMount(){
        console.log("初始照片",this.state.avatarSource)
        AsyncStorage.getItem('uri')
            .then((res)=>{
                let ImageUri = {uri:res}
                this.setState({
                    avatarSource:ImageUri
                })
                console.log("照片",this.state.avatarSource)
            });
    }

    choosePic() {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                this.setState({
                    avatarSource: source
                    
                });
                AsyncStorage.setItem('uri',response.uri,()=>{console.log('store success',source.uri)})
            }
        });
    }

    outlogin = ()=>{
        AsyncStorage.clear();
        Actions.login();
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <ImageBackground source={require('../../assets/pic.png')} style={{width:'100%',height:290*s}}>
                        <TouchableOpacity onPress={this.choosePic.bind(this)} style={{height:183*s,width:127*s,marginLeft:168*s,marginTop:54*s,borderRadius:58*s}}>
                            <Image style={{height:117*s,width:117*s,borderRadius:58*s}}  source={this.state.avatarSource} />
                        </TouchableOpacity>
                    </ImageBackground>
                    <View style={{height:50*s,width:'100%',borderBottomWidth:1,borderBottomColor:'#eeeeee',paddingLeft:25,backgroundColor:'white',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <Icon name='user' color='#000' size={20}  />
                        <Text style={{color:'#000',fontSize:16,marginLeft:20}}>我的个人中心</Text>
                    </View>
                    <View style={{height:230,backgroundColor:'white',paddingTop:8}}>
                        <View style={{flexDirection:'row',marginBottom:40,justifyContent:'space-around',flexWrap:'wrap',height:'11%'}}>
                            <View style={{flexDirection:'column'}}>
                                <Icon name='settings' size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                <Text>账户管理</Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Icon name='map-pin' size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                <Text>收货地址</Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Icon name='minus-square' size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                <Text>我的信息</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginBottom:55,justifyContent:'space-around',flexWrap:'wrap',height:'11%'}}>
                            <View style={{flexDirection:'column'}}>
                                <Icon name='file-text' size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                <Text>我的订单</Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Icon name='sliders' size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                <Text>我的二维码</Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Icon name='database' size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                <Text>我的积分</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginBottom:55,justifyContent:'space-around',flexWrap:'wrap',height:'11%'}}>
                            <View style={{flexDirection:'column'}}>
                                <Icon name='star' size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                <Text >我的收藏</Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Icon  color="#000" style={{textAlign:'center',lineHeight:35}} />
                                <Text ></Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Icon  size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                <Text ></Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Icon  size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                <Text ></Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <Icon  size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                <Text ></Text>
                            </View>
                        </View>
                    </View>

                    <View style={{height:50*s,width:'100%',marginTop:10,paddingLeft:25,backgroundColor:'white',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <Icon name='edit-2' color='#000' size={20}  />
                        <Text style={{color:'#000',fontSize:16,marginLeft:20}}>E族生活</Text>
                    </View>
                        <View style={{height:190*s,backgroundColor:'white',paddingTop:8}}>
                            <View style={{flexDirection:'row',marginBottom:50,justifyContent:'space-around',flexWrap:'wrap',height:'11%'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Icon name='scissors' size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                    <Text>居家维修保养</Text>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Icon name='truck' size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                    <Text>出行接送</Text>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Icon name='user' size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                    <Text>我的受赠人</Text>
                                </View> 
                            </View> 
                            <View style={{flexDirection:'row',marginBottom:50,justifyContent:'space-around',flexWrap:'wrap',height:'11%'}}>
                                <View style={{flexDirection:'column'}}>
                                    <Icon name='home' size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                    <Text>我的住宿优惠</Text>
                                </View>
                                <View style={{flexDirection:'column'}}>
                                    <Icon name='flag' size={20} color="#000" style={{textAlign:'center',lineHeight:35}} />
                                    <Text>我的活动</Text>
                                </View>
                                <View >
                                    <Button onPress={()=>{Actions.release()}} style={{textAlign:'center'}}>
                                        <Icon name='edit' size={20} color="#000" style={{textAlign:'center',lineHeight:35,position:'absolute',left:16,top:0}} />
                                        <Text style={{marginTop:35}}>我的发布</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    <TouchableOpacity onPress={this.outlogin} style={{height:30,marginBottom:10,marginTop:10,marginLeft:'40%',width:80,backgroundColor:'red',borderRadius:15,justifyContent:'center'}}><Text style={{textAlign:'center',color:'white'}}>退出登录</Text></TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
