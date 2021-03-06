var frequencymap = [];
var noise2 = [];
var lastspectrum = [];
var cutoffthresh = 1.15;
var localthresh = 1.6;
var noteupperbuffer = 4;
var notelowerbuffer = 2;
var fftsmooth = 0.8;
var fftsamples = 4096;
var notes = {};
var Afreq = 440; // hz
var NoteNum = 127;
var MinAvg = 60;
var NoiseSamples = 100;
var NoiseReduction = 0.75; // 0.0 - 1.0
var EONTimeout = 3; // > n seconds because processes pitches
var EONThreshold = 0.2; // between 0 and 1
var EONSmooth = 0.3;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setup() {
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(fftsmooth, fftsamples);
  fft.setInput(mic);
  var a = Afreq;
  for (var x = 0; x < NoteNum; x++)
  {
    frequencymap.push((a / 32) * (Math.pow(2, ((x - 9) / 12))));
    notes[x] = 0;
  }
  console.log(frequencymap);
  lastspectrum = findNotes();
  sampleNoise();
}

async function sampleNoise() {
  for (var x = 0; x < NoteNum; x++) {
    noise2.push(0);
  }
  await sleep(300);
  for (var y = 0; y < NoiseSamples; y++) {
    await sleep(20);
    var temp = findNotes();
    for(var i = 0; i < NoteNum; i++){
      noise2[i] = noise2[i] + temp[i];
    }
  }
  noise2 = noise2.map(function(x) { return x / (NoiseSamples*NoiseReduction) });
}

async function recordPitches() {
  //background(200);
  var spectrum = findNotes();
  var avg = 0;
  for (var x = 0; x < NoteNum; x++){
    spectrum[x] = spectrum[x] - noise2[x] < 0 ? 0 : spectrum[x] - noise2[x];
    avg += spectrum[x];
  }
  avg /= NoteNum;
  avg = Math.max(avg, MinAvg);
  for (i = 20; i < NoteNum; i++) {
    var specval;
    //if (spectrum[i]>cutoffthresh*avg || (avg>MinAvg&&i>1&&i<NoteNum-2&& spectrum[i]> localthresh*(spectrum[i-2]+spectrum[i+2])/2)) {
    if ((spectrum[i] > cutoffthresh * avg || (avg > MinAvg && i > 1 && i < NoteNum - 2 && spectrum[i] > localthresh * (spectrum[i - 2] + spectrum[i + 2]) / 2))
      && !(i > 0 && i < NoteNum - 1 && (1.2 * spectrum[i] < spectrum[i - 1] || 1.2 * spectrum[i] < spectrum[i + 1]))) {
      specval = 1.1 * spectrum[i];
      if (notes[i] < noteupperbuffer) {
        notes[i] += 1;
      } 
      var ratio = Math.min(avg / specval, 0.9);
      var blyat = 12;
      for (var noharm = i + blyat; blyat > 2 && noharm < NoteNum - 1; noharm += blyat) {
        spectrum[noharm] *= ratio;
        spectrum[noharm-1] *= ratio;
        spectrum[noharm+1] *= ratio;
        blyat = Math.ceil(blyat / 2);
      } 
    } else {
      specval = 0.4 * spectrum[i];
      if (notes[i] > 0) {
        notes[i] -= 2;
      }
    }
    lastspectrum[i] = fftsmooth * lastspectrum[i] + (1 - fftsmooth) * specval;
  }
}

async function findEndOfNote() {
  var counter = 0;
  var last = mic.getLevel();

  var notes = [];

  while (counter < EONTimeout * 100) {
    await sleep(10);

    if (Math.abs(mic.getLevel(EONSmooth) - last) > EONThreshold) {
      return 1; // return something more useful
    }

    // frequency changes drastically → note changed?

    var activeNotes = getActiveNotes();
    var energy = getNotesByEnergy();


  }
  return 0; // return something more useful?
}

function getActiveNotes() {
  var notelist = [];

  for (var note in notes) {
    var val = notes[note];

    if (val > notelowerbuffer) {
      notelist.push(note);
    }
  }
  return notelist;
}

function getNotesByEnergy() {
  var pairs = [];
  var active = getActiveNotes();
  for (var i = 0; i < active.length; i++){
    var temp = active[i];
    pairs.push([temp, lastspectrum[temp]]);
  }
  return pairs.sort(function(x) { return x[1] });
}

function getActiveNotesString() {
  return ":" + getActiveNotes();
}

function getNotesByEnergyString() {
  return ":" + getNotesByEnergy();
}

function findNotes() {
  var spectrum = [];
  fft.analyze();
  for (var x= 0; x < NoteNum; x++){
    var lower = frequencymap[x];
    var upper = frequencymap[x];
    if (x != 0 ) {
      lower = (frequencymap[x - 1] + frequencymap[x]) / 2;
    }
    if (x != NoteNum - 1) {
      upper = (frequencymap[x + 1] + frequencymap[x]) / 2;
    }
    spectrum.push(fft.getEnergy(lower, upper));
  }
  return spectrum;
}
