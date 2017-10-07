var frequencymap=[];
var noise2= [];
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function setup() {
   createCanvas(710,400);
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT(0.8, 4096);
   fft.setInput(mic);
   var a = 440;
   for (var x = 0; x < 127; x++)
	{
	   frequencymap.push((a / 32) * (Math.pow(2, ((x - 9) / 12))));
	}
	console.log(frequencymap);
	
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
   for (var x = 0; x<spectrum.length;x++){
	   spectrum[x] = spectrum[x]-noise2[x];
   }
   //console.log(spectrum);
   out.innerHTML = spectrum.length;
   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(5*i, map(spectrum[i], 0, 255, height, 0) );
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
