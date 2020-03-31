import React, { Component } from 'react'
import { Text, View, Button, ScrollView, ToastAndroid, StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Release extends Component {
    constructor() {
        super();
        this.state = {
            tits: [],
            pages: 1,
            isloading: true
        }
        this.getData(this.state.pages)
    }

    getData = () => {
        this.setState({ isloading: true })
        fetch('https://cnodejs.org/api/v1/topics?page=1&limit=11')
            .then((res) => res.json())
            .then(res => {
                this.setState({ 
                    tits: res.data ,
                    isloading: false
                })
            }
            )
    }

    nextPage = () => {
        this.setState({ pages: this.state.pages + 1 }, () => {
            fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.pages + '&limit=11')
                .then((res) => res.json())
                .then(res => {
                    this.setState({ tits: res.data })
                }
                )
        });
    }

    lastPage = () => {
        if (this.state.pages > 1) {
            this.setState({ pages: this.state.pages - 1 }, () => {
                fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.pages + '&limit=11')
                    .then(res => res.json())
                    .then(res => {
                        this.setState({ tits: res.data });
                    })
            })
        }
        else {
            ToastAndroid.show('已经是第一页了！', 100);
        }
    }


    render() {
        return (
            <View>
                <View style={{ paddingLeft: 15 * s, paddingRight: 15 * s, backgroundColor: 'white', height: '88%', width: '100%' }} >
                    {
                        this.state.tits.map((item) => (
                            <View style={{ flexDirection: 'row', height: '9%', borderBottomWidth: 1, borderBottomColor: 'gray', alignItems: 'center' }}>
                                <Text numberOfLines={1} style={{ marginRight: 30 * s, color: 'grey', width: '40%', lineHeight: 30 * s }}>{item.title}</Text>
                                <Text style={{ marginRight: 25 * s, color: 'grey', lineHeight: 30 * s, width: "30%" }}>{item.create_at.slice(0, 10)}</Text>
                                <Text style={{ color: "grey", lineHeight: 30 * s, width: '30%' }}>{item.title.length % 2 == 0 ? <Text>已回复</Text> : <Text style={{ color: 'red' }}>待回复</Text>}</Text>
                            </View>
                        ))
                    }
                </View>
                
                <View style={styles.bottom}>
                    <Text style={styles.front} onPress={this.lastPage}>上一页</Text>
                    <Text style={styles.page}>第{this.state.pages}页</Text>
                    <Text style={styles.next} onPress={this.nextPage}>下一页</Text>
                </View>
                
                {
                    this.state.isloading
                        ? <View style={{ alignItems: 'center',height:'4%',backgroundColor:'#fff' }}><Text style={{ fontSize: 16}}>正在获取数据...</Text></View>
                        : <View style={{ alignItems: 'center',height:'4%',backgroundColor:'#fff' }}><Text style={{ fontSize: 16}}></Text></View>
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({

    front: {
        width: '20%',
        height: 30,
        borderRadius: 15,
        marginTop: 15,
        backgroundColor: '#ff0000',
        textAlign: 'center',
        paddingTop: 3,
        marginLeft: 20,
        color: 'white'
    },
    next: {
        width: '20%',
        height: 30,
        borderRadius: 15,
        marginTop: 15,
        backgroundColor: '#ff0000',
        marginRight: 20,
        textAlign: 'center',
        paddingTop: 3,
        color: 'white'
    },
    page: {
        marginTop: 20,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: '#fff',
        height: '8%'
    }
})