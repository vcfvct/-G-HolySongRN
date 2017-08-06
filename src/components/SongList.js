/**
 * Created by xex766 on 7/30/17.
 */
import React, {Component} from 'react';
import songs from '../static/songs';
import {SectionList, StyleSheet, Text, View} from "react-native";
import _ from 'lodash';
import pinyin from 'js-pinyin';
pinyin.setOptions({checkPolyphone: false, charCase: 0});

export default class SongList extends Component {
  getSongTitles() {
    return songs.map((song) => song.name);
  }

  getSongsObject() {
    let songsObj = {};
    songs.forEach((song) => songsObj[song.name] = song.lyric);
    return songsObj;
  }

  generateSections() {
    let sectionsObj = {};
    let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    alphabet.map((char) => sectionsObj[char] = []);
    songs.forEach((song) => {
      let pinyinChars = pinyin.getFullChars(song.name);
      sectionsObj[pinyinChars[0]].push(Object.assign(song, {pinyinChars}));
    });

    return Object.keys(sectionsObj).map((char) => {
      return {title: char, data: _.sortBy(sectionsObj[char], 'pinyinChars')};
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.generateSections()}
          renderItem={({item}) => <Text key={item.name} style={styles.item}>{item.name}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})