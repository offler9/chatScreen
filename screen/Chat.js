import React from 'react'
import { View, StyleSheet,Button, Platform } from 'react-native'
import { GiftedChat, Composer } from 'react-native-gifted-chat'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import SocketIOClient from 'socket.io-client'
export default class Chat extends React.Component {
        state={
            messages:[],
            // uId:'',
            userSay:''
        }
    
    static navigationOptions = ({navigation}) => ({
        title: (navigation.state.params || {}).name || 'Chat!',
    })

    // componentWillMount() {
    //     for (let i = 0; i < data.Replies.length; i++) {
    //         console.log(data.Replies[i].CreatedDate);
    //         debugger

    //         var id = data.From._id

    //         if (data.To.id == UserID) {
    //             id = this.state.userID
    //         }

    //         const obj = {
    //             _id: Math.round(Math.random() * 1000000),
    //             text: data.Replies[i].Reply,
    //             createdAt: data.Replies[i].CreatedDate,
    //             user: {
    //                 _id: id,
    //                 name: 'React Native',
    //                 avatar: data.From.Profile.DisplayPicture
    //             },
    //             image: '',

    //         }
    //         arrMsg.push(obj);

    //     };


    //     this.setState((previousState) => {
    //         return {
    //             messages: GiftedChat.append(previousState.messages, arrMsg)
    //         };
    //     });
    //   }

    // onSend(){
    //     let data = {
    //         userSay : this.state.userSay
    //       }
    //       let payload = []
    //       for (let property in data) {
    //         let encodedKey = encodeURIComponent(property)
    //         let encodedValue = encodeURIComponent(data[property])
    //         payload.push(encodedKey + "=" + encodedValue)
    //       }
    //       payload = payload.join("&")
    //       console.log(payload)
    //       const header= {
    //         'Cache-Control': 'no-cache, no-store, must-revalidate',
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'Accept' : 'application/x-www-form-urlencoded',
            
    //       }
    //     fetch('http://128.199.129.142:5555/api/v1/askgavin',{
    //     method:'POST',
    //     headers:{
    //         "Content-Type":"application/x-www-form-urlencoded"
    //     },
    //     body: payload
    //     })
    //     this.setState(previousState => ({
    //         messages: GiftedChat.append(previousState.messages, messages),
    //     }))
    //     .then(res => {
    //         console.log(res)
    //         switch (res.status){
    //           case 200:
    //             this.setState({
    //                 messages: res.response,
    //             })
    //             break
    //            case 404:
    //                 console.log("error")
    //             break
    //         }
    //     })
    // }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
          }))  
        let data = {
            userSay : this.state.userSay
        }
        let payload = []
        for (let property in data) {
            let encodedKey = encodeURIComponent(property)
            let encodedValue = encodeURIComponent(data[property])
            payload.push(encodedKey + "=" + encodedValue)
        }
        payload = payload.join("&")
        const header= {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept' : 'application/x-www-form-urlencoded',
            
          }
        fetch('http://128.199.129.142:5555/api/v1/askgavin',{
            method:'POST',
            headers:header,
            body: payload
            })
            .then((resp) => resp.json())
            .then(resp => {
                    this.setState(previousState => ({
                        messages: GiftedChat.append(previousState.messages, messages=[{_id: Math.round(Math.random() * 100000),text: resp.result.response, createdAt: new Date()}]),
                      }))   
                 
            })
      }

    setCustomText = (userSay) => {
        this.setState({userSay:userSay})
    }

    render(){
        console.log(this.state.messages)
        return (
            <View style={{flex:1}}>
            <GiftedChat messages={this.state.messages} text={this.state.userSay} onInputTextChanged={(userSay)=> this.setCustomText(userSay)}
            onSend={this.onSend.bind(this)} bottomOffset={Platform.OS === "ios" ? 290 : 0}
            />
            {Platform.OS === 'android' ? <KeyboardSpacer/> : null} 
            </View>
        )
    }
}

// let styles = StyleSheet.Create({

// })