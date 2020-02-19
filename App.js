import React, { Component } from 'react'
import { Text, View, Button,Alert } from 'react-native'
import RNDM from 'react-native-easy-downloader';
 
const testUrl = 'http://src/getFile';
 

export default class App extends Component {
  render() {
    return (
      <View>
      <Button
        onPress={() => {
          RNDM.download({
            url: testUrl,
          }).then(
            ret => Alert.alert('Success', ret)
          ).catch (
            err => Alert.alert('Something wrong', err.message)
          )
        }}
        title="Download only"
        color="#841584"
      />
     
      <Button
        onPress={() => {
          RNDM.installApk('test').then(
            // success
          ).catch (
            err => Alert.alert('Something wrong', err.message)
          )
        }}
        title="Install only"
        color="#841584"
      />
     
      <Button
        onPress={() => {
          RNDM.download({
            url: testUrl,
            autoInstall: true,
            savePath: RNDM.DirDownload + '/test.apk',
            title: 'test',
            description: 'v2.0.5',
          }).then(
            ret => console.log('Success', ret)
          ).catch (
            err => Alert.alert('Something wrong', err.message)
          )
        }}
        title="Download and install"
        color="#841584"
      />
     
      <Text>Props:</Text>
      <Text>DirDownload: {RNDM.DirDownload}</Text>
      <Text>DirExternalStorage: {RNDM.DirExternalStorage}</Text>
    </View>
    )
  }
}
