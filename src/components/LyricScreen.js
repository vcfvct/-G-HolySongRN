/**
 * Created by xex766 on 8/6/17.
 */
import React, {Component} from 'react';
import {Text, View} from "react-native";

export default class LyricScreen extends Component{
  static navigationOptions = {
    title: '歌词',
  };
  render(){
    let {params} = this.props.navigation.state;
    return(
      <View>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginTop: 10}}>{params.name}</Text>
        <Text style={{textAlign: 'center', fontSize: 18}}>{params.lyric}</Text>
      </View>
    )
  }
}