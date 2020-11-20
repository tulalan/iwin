/*
 * @Description:
 * @Author: JAY
 * @Date: 2020-11-14 17:43:23
 * @LastEditTime: 2020-11-20 23:45:29
 * @LastEditors: JAY
 */
import React, {Component} from 'react';
import {Linking, Alert, View, Button} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends Component {
  createTwoButtonAlert = () => {
    Alert.alert(
      'THONG BAO',
      'BAN PHAI TAI VE FILE CAI DAT MAC DINH',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => this.putMessage()},
        ,
      ],
      {cancelable: false},
    );
  };
  putMessage = () => {
    this.webview.postMessage('download-apk');
  };
  interJectJavascript = `(function () {
    document.addEventListener('message', function (msg) {
      if (msg.data === 'download-apk') {
        $('.download').click();
      }
    })
  })()`;
  render() {
    const uri = 'https://iwin335.com/?code=820505';
    return (
      <View style={{flex: 1}}>
        <Button
          onPress={() => {
            this.createTwoButtonAlert();
          }}
          title="button"
        />
        <WebView
          ref={(ref) => {
            this.webview = ref;
          }}
          source={{uri}}
          scrollEnabled={true}
          injectedJavaScript={this.interJectJavascript}
        />
      </View>
    );
  }
}
