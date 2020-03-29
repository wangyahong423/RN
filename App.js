import React,{useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Router, Scene, Tabs, Drawer, Lightbox, Overlay, Modal,Actions  } from "react-native-router-flux";
import { StyleSheet, View,AsyncStorage,Text,ToastAndroid,BackHandler  } from 'react-native';
import Home from './components/home/Home';
import Commodity from './components/commodity/Commodity';
import Shop from './components/shop/Shop';
import Person from './components/person/Person';
import Release from './components/person/Release';
import SplashScreen from 'react-native-splash-screen';
import SwiperPage from './components/common/SwiperPage';
import Login from './components/common/Login';
import Register from './components/common/Register';

console.disableYellowBox = true;
const rootUrl = 'https://www.fastmock.site/mock/65721c49c01f167ea082d0dc81fb0c41/api';

const App = () => {
  let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
    init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
  }
  
  return ( 
    <>
      <Router
        backAndroidHandler={() => {
          if(Actions.currentScene == 'login' || Actions.currentScene == 'home' || Actions.currentScene == 'commodity' || Actions.currentScene == 'shop' || Actions.currentScene == 'person'){
              if (new Date().getTime() - now < 2000) {
                BackHandler.exitApp();
              }
              else {
                ToastAndroid.show('再按一次退出应用', 100);
                now = new Date().getTime();
                return true;
              }
          }
          else{
            Actions.pop();
            return true;
          }
        }}
        >
        <Overlay>
          <Modal key='modal' hideNavBar>
            <Lightbox key='lightbox'>
                <Scene key='root'> 
                  <Tabs key='tabbar' hideNavBar activeTintColor='red' inactiveTintColor='black' tabBarStyle={{backgroundColor:'#fff',borderTopWidth:0}}>
                    <Scene key='homePage'  title='首页' hideNavBar  icon={({focused})=><Icon color={focused?'red':'black'} name='home' size={26} />}>
                      <Scene key='home' component={Home} />
                    </Scene>
                    <Scene hideNavBar key='commodityPage' title='商品分类' icon={({focused})=><Icon color={focused?'red':'black'} size={26} name='th-large' />}>
                      <Scene key='commodity' component={Commodity} />
                    </Scene>
                    <Scene key='shopPage' title='发现'  icon={({focused})=><Icon size={26} color={focused?'red':'black'} name='eye' />}>
                      <Scene key='shop' component={Shop} initial={true} />
                    </Scene>
                    <Scene key='personPage' title='个人中心' icon={({focused})=><Icon color={focused?'red':'black'} size={26} name='user' />}>
                      <Scene key='person' hideNavBar component={Person} />
                      <Scene key='release' navBarButtonColor='white' navigationBarStyle={{backgroundColor:'red'}} renderTitle='我的发布'  renderRightButton={<View style={{marginRight:20}}><Icon color='white'  size={22} name='ellipsis-h'></Icon></View>} titleStyle={{flex:1,textAlign:'center',color:'white'}}  hideTabBar component={Release} />
                    </Scene>
                  </Tabs>
                </Scene>
            </Lightbox>
            <Scene key='login' component={Login} initial={!isLogin} />
            <Scene key='register' component={Register} />
          </Modal>
        </Overlay>
      </Router>
    </>
  );
}; 

const styles = StyleSheet.create({
  
});

export default App;
