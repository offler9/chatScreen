import React from 'react'
import { View ,TextInput, TouchableOpacity,Text, StyleSheet} from 'react-native'


export default class Main extends React.Component{

    state = {
      messages:[],
        userSay:'',
    }

    onChangeText = userSay => this.setState({ userSay })
    
    test(){
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
        console.log(payload)
        const header= {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept' : 'application/x-www-form-urlencoded',
          
        }
        fetch('http://128.199.129.142:5555/api/v1/askgavin',{
        method:'POST',
        headers: header,
        body: payload
        })
        .then(resp => resp.json())
        .then(resp => console.log(resp)) 
            // console.log(res)
            // switch (res.status){
            //   case 200:
            //     this.setState({
            //         messages: res.response,
            //     })
            //     break
            //    case 404:
            //         console.log("error")
            //     break
            // }
        
    }

    
    render() {
        return(
            <View>
                <TextInput style={styles.nameInput} 
                onChangeText={this.onChangeText}
                 placeholder="name" 
                 value={this.state.userSay}/>
                 <TouchableOpacity onPress={this.test.bind(this)}>
                     <Text style={styles.buttonText}>Next</Text>
                 </TouchableOpacity>
            </View>
        )
    }
}

let offset = 24;
let styles = StyleSheet.create({
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: { 
    marginLeft: offset,
    fontSize: offset,
  },
})