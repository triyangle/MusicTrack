var frequencymap=[];
var noise2= [];
var cutoffthresh = 1.1;
var localthresh = 3.4;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setup() {
   createCanvas(710,400);
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT(0.8, 8192);
   fft.setInput(mic);
   var a = 440;
   for (var x = 0; x < 127; x++)
	{
	   frequencymap.push((a / 32) * (Math.pow(2, ((x - 9) / 12))));
	}
	console.log(frequencymap);
	sampleNoise();
}

async function sampleNoise() {
	for (var x = 0; x < 127; x++) {
		   noise2.push(0);
	}
	await sleep(500);
	for (var y=0; y<100; y++) {
		await sleep(20);
		var temp = findNotes();
		for(var i = 0; i < temp.length; i++){
		   noise2[i]=noise2[i] + temp[i];
		}
	}
	noise2 = noise2.map(function(x) {return x*0.0075});
}

function draw() {
   background(200);
   var out = document.getElementById('output');
   var spectrum = findNotes();
   var avg = 0;
   for (var x = 0; x<spectrum.length;x++){
	   spectrum[x] = spectrum[x]-noise2[x]<0 ? 0:spectrum[x]-noise2[x];
	   avg += spectrum[x];
   }
   avg /= spectrum.length;
   avg = Math.max(avg,50);
   //console.log(spectrum);
   out.innerHTML = spectrum.length;
   beginShape();
   for (i = 0; i<spectrum.length; i++) {
	var specval
	 if (spectrum[i]>cutoffthresh*avg || (i>1&&i<spectrum.length-2&& spectrum[i]> localthresh*(spectrum[i-1]+spectrum[i-2]+spectrum[i+1]+spectrum[i+2])/4)) {
		 specval = spectrum[i];
	 } else {
		 specval = 0.5*spectrum[i];
	 }
    vertex(5*i, map(specval, 0, 255, height, 0) );
   }
   endShape();
}

function findNotes() {
	var spectrum = [];
   fft.analyze();
   for(var x= 0; x<127; x++){
	   var lower = frequencymap[x];
	   var upper = frequencymap[x];
	   if (x!=0) {
		lower = (frequencymap[x-1]+frequencymap[x])/2;
	   }
	   if (x!=126) {
		   upper = (frequencymap[x+1]+frequencymap[x])/2;
	   }
	   spectrum.push(fft.getEnergy(lower,upper));
   }
   return spectrum;
}
