import React, {Component} from 'react';
import {
  AppRegistry,
  Dimensions,
  Font,
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Accidental } from 'vexflow/src/accidental';
import { Stave } from 'vexflow/src/stave';
import { StaveNote } from 'vexflow/src/stavenote';
import { Voice } from 'vexflow/src/voice';
import { Formatter } from 'vexflow/src/formatter';
import { ReactNativeSVGContext, NotoFontPack } from 'standalone-vexflow-context';
//import { Analyser } from 'audio-analyser';
//var audioanalyser = require('audio-analyser');
import {StackNavigator} from 'react-navigation';
import {LinearGradient} from 'expo';
import {Button, SearchBar} from 'react-native-elements';

var progress = 0;
var indexTemp = 0;

var data = [
  {
    "id": 0,
    "midi": 59,
    "pitch": "B4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 71,
    "octave": 4
  },
  {
    "id": 1,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 2,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "2",
    "duration": 2,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 3,
    "midi": 59,
    "pitch": "B4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 71,
    "octave": 4
  },
  {
    "id": 4,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 5,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "2",
    "duration": 2,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 6,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 7,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 8,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 9,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 10,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 11,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 12,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 13,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 14,
    "midi": 59,
    "pitch": "B4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 71,
    "octave": 4
  },
  {
    "id": 15,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 16,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "2",
    "duration": 2,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 17,
    "midi": 59,
    "pitch": "B4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 71,
    "octave": 4
  },
  {
    "id": 18,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 19,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "2",
    "duration": 2,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 20,
    "midi": 59,
    "pitch": "B4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 71,
    "octave": 4
  },
  {
    "id": 21,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 22,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "2",
    "duration": 2,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 23,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 24,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 25,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 26,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 27,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 28,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 29,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 30,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 31,
    "midi": 59,
    "pitch": "B4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 71,
    "octave": 4
  },
  {
    "id": 32,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 33,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "2",
    "duration": 2,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 34,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 35,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 36,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 37,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 38,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 39,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 40,
    "midi": 1000,
    "pitch": "REST",
    "duration_string": "8",
    "duration": 0.5,
    "tie": 0,
    "midi pitch": 0,
    "octave": ""
  },
  {
    "id": 41,
    "midi": 1000,
    "pitch": "REST",
    "duration_string": "8",
    "duration": 0.5,
    "tie": 0,
    "midi pitch": 0,
    "octave": ""
  },
  {
    "id": 42,
    "midi": 59,
    "pitch": "B4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 71,
    "octave": 4
  },
  {
    "id": 43,
    "midi": 59,
    "pitch": "B4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 71,
    "octave": 4
  },
  {
    "id": 44,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 45,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "8",
    "duration": 0.5,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 46,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "2",
    "duration": 2,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 47,
    "midi": 59,
    "pitch": "B4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 71,
    "octave": 4
  },
  {
    "id": 48,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 49,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "2",
    "duration": 2,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 50,
    "midi": 59,
    "pitch": "B4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 71,
    "octave": 4
  },
  {
    "id": 51,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 52,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "2",
    "duration": 2,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 53,
    "midi": 53,
    "pitch": "F4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 65,
    "octave": 4
  },
  {
    "id": 54,
    "midi": 53,
    "pitch": "F4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 65,
    "octave": 4
  },
  {
    "id": 55,
    "midi": 53,
    "pitch": "F4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 65,
    "octave": 4
  },
  {
    "id": 56,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 57,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "2",
    "duration": 2,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 58,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "2",
    "duration": 2,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 59,
    "midi": 53,
    "pitch": "F4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 65,
    "octave": 4
  },
  {
    "id": 60,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 61,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 62,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 63,
    "midi": 53,
    "pitch": "F4",
    "duration_string": "1",
    "duration": 4,
    "tie": "",
    "midi pitch": 65,
    "octave": 4
  },
  {
    "id": 64,
    "midi": 53,
    "pitch": "F4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 65,
    "octave": 4
  },
  {
    "id": 65,
    "midi": 53,
    "pitch": "F4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 65,
    "octave": 4
  },
  {
    "id": 66,
    "midi": 53,
    "pitch": "F4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 65,
    "octave": 4
  },
  {
    "id": 67,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 68,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "2",
    "duration": 2,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 69,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "2",
    "duration": 2,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 70,
    "midi": 53,
    "pitch": "F4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 65,
    "octave": 4
  },
  {
    "id": 71,
    "midi": 57,
    "pitch": "A4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 69,
    "octave": 4
  },
  {
    "id": 72,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 73,
    "midi": 55,
    "pitch": "G4",
    "duration_string": "4",
    "duration": 1,
    "tie": "",
    "midi pitch": 67,
    "octave": 4
  },
  {
    "id": 74,
    "midi": 53,
    "pitch": "F4",
    "duration_string": "1",
    "duration": 4,
    "tie": "",
    "midi pitch": 65,
    "octave": 4
  },
  {
    "id": 75,
    "midi": 1000,
    "pitch": "REST",
    "duration_string": "1",
    "duration": 4,
    "tie": 0,
    "midi pitch": 0,
    "octave": ""
  }
];

let { height, width } = Dimensions.get('window');

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['skyblue', 'steelblue', 'powderblue']}
          style={{ height: height, width: width, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
        >
          <Text style={styles.headingLandingPage}>Welcome to MusicTrack!</Text>
          <Button
            large
            onPress={() => navigate('Tracks')}
            color= '#000080'
            icon={{name: 'music', type: 'font-awesome'}}
            style={{borderWidth: 3, borderColor: '#deb887'}}
            title='GET STARTED' />
          <Text style={styles.footerLandingPage}> 🦆TapTheDuck Inc. </Text>
        </LinearGradient>
      </View>
    );
  }
}

class TrackScreen extends React.Component {
  runVexFlowCode(context, obj, num) {
    console.log(11111111111111111);
    const stave = new Stave(50, num * 120, 300);
    stave.setContext(context);
    stave.setClef('treble');
    stave.setTimeSignature('4/4');
    stave.draw();

    var sumLen = 0;
    notes = [];
    while (sumLen < 4 ) {
      var tempData = data[indexTemp];
      sumLen += tempData.duration;
      indexTemp += 1;
      if (tempData.midi > 500) {
        notes.push(new StaveNote({clef: "treble", keys: [tempData.pitch[0] + "/" + String(tempData.octave)], duration: tempData.duration_string + "r"}))
      } else if (tempData.pitch.length > 2) {
        notes.push(new StaveNote({clef: "treble", keys: [tempData.pitch[0] + "/" + String(tempData.octave)], duration: tempData.duration_string}).addAccidental(0, new Accidental("#")))
      } else {
        notes.push(new StaveNote({clef: "treble", keys: [tempData.pitch[0] + "/" + String(tempData.octave)], duration: tempData.duration_string}))
      }
    }

    const voice = new Voice({num_beats: 4,  beat_value: 4});
    voice.addTickables(notes);

    const formatter = new Formatter().joinVoices([voice]).formatToStave([voice], stave);
    voice.draw(context, stave);
  }

  getDataToPresent(progress, context) {
    // call runVexFlowCode three times with different value
      if (progress <= 76 - 2) {
        indexTemp = progress;
          for (var i=0; i<3;i++){
            this.runVexFlowCode(context, data[progress+i], i);
        }
      }
  }

  static navigationOptions = {
    title: 'Your Tracks',
  };
  render() {
    const context = new ReactNativeSVGContext(NotoFontPack, { width: 400, height: 400 });
    this.getDataToPresent(progress, context);
    return (
      <View>
        <SearchBar lightTheme onChangeText={() => {}} placeholder='Type Here...' />
        <Button
          color="#7fffd4"
          icon={{name: 'plus', type: 'font-awesome'}}
          style={{borderWidth: 3, borderColor: '#5f9ea0'}}
          title='ADD TRACK'
        />
        <Button
        color="#7fffd4"
          icon={{name: 'minus', type: 'font-awesome'}}
          style={{borderWidth: 3, borderColor: '#5f9ea0'}}
          title='DELETE TRACK'
        />
        <LinearGradient
          colors={['skyblue', 'steelblue', 'powderblue']}
          style={{ height: height, width: width, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
        >
        <View>
          {context.render()}
        </View>
        </LinearGradient>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <OurApp/>;
  }
}

const OurApp = StackNavigator({
  Home: { screen: HomeScreen },
  Tracks: { screen: TrackScreen},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  headingLandingPage: {
    position: 'absolute',
    fontSize: 35,
    color: '#191970',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    top: 40
  },
  footerLandingPage: {
    position: 'absolute',
    fontSize: 15,
    bottom: 75
  },
  searchBarStyle: {
    top: 7.5
  }
});
