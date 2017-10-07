var frequencymap=[];
var noise2= [];
var cutoffthresh = 1.1;
var localthresh = 1.55;
var noteupperbuffer = 6;
var notelowerbuffer = 3;
var fftsmooth = 0.8;
var fftsamples = 8192;
var notes = {};
var Afreq = 440;//hz
var NoteNum = 127;
var MinAvg = 50;
var NoiseSamples = 100;
var NoiseReduction = 0.75;//0.0-1.0
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setup() {
   createCanvas(710,400);
   noFill();

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
	sampleNoise();
}

async function sampleNoise() {
	for (var x = 0; x < NoteNum; x++) {
		   noise2.push(0);
	}
	await sleep(300);
	for (var y=0; y<NoiseSamples; y++) {
		await sleep(20);
		var temp = findNotes();
		for(var i = 0; i < NoteNum; i++){
		   noise2[i]=noise2[i] + temp[i];
		}
	}
	noise2 = noise2.map(function(x) {return x/(NoiseSamples*NoiseReduction)});
}

function draw() {
   background(200);
   var out = document.getElementById('output');
   var spectrum = findNotes();
   var avg = 0;
   for (var x = 0; x<NoteNum;x++){
	   spectrum[x] = spectrum[x]-noise2[x]<0 ? 0:spectrum[x]-noise2[x];
	   avg += spectrum[x];
   }
   avg /= spectrum.length;
   avg = Math.max(avg,MinAvg);
   //console.log(spectrum);
   beginShape();
   for (i = 0; i<NoteNum; i++) {
	var specval
	 if (spectrum[i]>cutoffthresh*avg || (avg>MinAvg&&i>1&&i<NoteNum-2&& spectrum[i]> localthresh*(spectrum[i-2]+spectrum[i+2])/2)) {
		 specval = spectrum[i];
		 if (notes[i]<noteupperbuffer) {
			notes[i] += 1;
		 }
	 } else {
		 specval = 0.5*spectrum[i];
		 if (notes[i]>0) {
			notes[i] -= 1;
		 }
	 }
    vertex(5*i, map(specval, 0, 255, height, 0) );
   }
   out.innerHTML = getActiveNotes();
   endShape();
}

function getActiveNotes() {
	var notelist="";
	for (var note in notes) {
		var val = notes[note];
		if(val>notelowerbuffer) {
			notelist += note + ",";
		}
	}
	return notelist;
}

function findNotes() {
	var spectrum = [];
   fft.analyze();
   for(var x= 0; x<NoteNum; x++){
	   var lower = frequencymap[x];
	   var upper = frequencymap[x];
	   if (x!=0) {
		lower = (frequencymap[x-1]+frequencymap[x])/2;
	   }
	   if (x!=NoteNum-1) {
		   upper = (frequencymap[x+1]+frequencymap[x])/2;
	   }
	   spectrum.push(fft.getEnergy(lower,upper));
   }
   return spectrum;
}
