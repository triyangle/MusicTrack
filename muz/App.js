import React, { Component } from 'react';
import { Accidental } from 'vexflow/src/accidental';
import { Stave } from 'vexflow/src/stave';
import { StaveNote } from 'vexflow/src/stavenote';
import { Voice } from 'vexflow/src/voice';
import { Formatter } from 'vexflow/src/formatter';
import { ReactNativeSVGContext, NotoFontPack } from 'standalone-vexflow-context';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//designates which three/four lines gets to present
var progress = 0;
var indexTemp = 0;

// var wrapper = fetch('../data/data.json');
// const count = Object.keys(wrapper).length;
// console.log(count);

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


export default class App extends Component {

  runVexFlowCode(context, obj, num) {
    // alert('hi');
    console.log(11111111111111111);
    const stave = new Stave(50, num * 120, 300);
    stave.setContext(context);
    stave.setClef('treble');
    stave.setTimeSignature('4/4');
    stave.draw();
    // fun part
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

    // const notes = [
    //   new StaveNote({clef: "treble", keys: ["c/4", "e/4"], duration: "q" })
    //     .addAccidental(0, new Accidental("##")),
    //   new StaveNote({clef: "treble", keys: ["d/1"], duration: "4" }),
    //   new StaveNote({clef: "treble", keys: ["b/4"], duration: "4r" }),
    //   new StaveNote({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" })
    // ];
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

  render() {

    const context = new ReactNativeSVGContext(NotoFontPack, { width: 400, height: 400 });
    this.getDataToPresent(progress, context);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to TapTheDuck!
        </Text>

        <View> 
          {context.render()} 
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    backgroundColor: '#ecf0f1',
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
});
