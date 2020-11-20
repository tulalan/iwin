/*
 * @Description:
 * @Author: JAY
 * @Date: 2020-11-14 17:43:23
 * @LastEditTime: 2020-11-20 23:45:29
 * @LastEditors: JAY
 */
import React, {Component} from 'react';
import {
  Alert,
  ImageBackground,
  TouchableHighlight,
  StyleSheet,
  Image,
  Text,
} from 'react-native';

import {WebView} from 'react-native-webview';
import ErrorNetwork from './src/components/ErrorNetwork';

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
      <>
        <ImageBackground
          source={require('./src/assets/Bg.jpg')}
          style={styles.Background}>
          <Text style={styles.DescriptionText}>
            Do chính sách bảo mật của iwin68, người chơi cần tải bản cài đặt
            trực tiếp, bấm nút "tải xuống ngay" và cho phép cài đặt
          </Text>

          <WebView
            style={styles.webview}
            ref={(ref) => {
              this.webview = ref;
            }}
            source={{uri}}
            scrollEnabled={true}
            injectedJavaScript={this.interJectJavascript}
          />
          <TouchableHighlight
            underlayColor="rgba(0, 0, 0, 0)"
            style={styles.ButtonStyle}
            onPress={() => {
              this.createTwoButtonAlert();
            }}>
            <Image source={require('./src/assets/download.png')} />
          </TouchableHighlight>
        </ImageBackground>
        <ErrorNetwork />
      </>
    );
  }
}

const styles = StyleSheet.create({
  Background: {flex: 1},
  ButtonStyle: {
    alignSelf: 'center',
  },
  DescriptionText: {
    marginTop: 50,
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  webview: {
    display: 'none',
    backgroundColor: 'transparent',
  },
});
