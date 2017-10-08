import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Vex from 'vexflow'
import Svg, {G, Rect, Path} from 'react-native-svg'

VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
var div = document.getElementById("boo")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(500, 500);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.Stave(10, 40, 400);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

var vf = new Vex.Flow.Factory({
    renderer: {elementId: 'boo', width: 500, height: 200}
  });
  
  var score = vf.EasyScore();
  var system = vf.System();
  
  system.addStave({
    voices: [
      score.voice(score.notes('C#5/q, B4, A4, G#4', {stem: 'up'})),
      score.voice(score.notes('C#4/h, C#4', {stem: 'down'}))
    ]
  }).addClef('treble').addTimeSignature('4/4');
  
  vf.draw();