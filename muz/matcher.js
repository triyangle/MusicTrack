//int measures curr count of measures
//globalmap:
//	break->128
var buffer = [];
var iter = 0;
var MatcherArray = [];
function initMatch(measureArray) {
	while (measureArray[iter] != 128 && iter < measureArray.length) {
		buffer.push(measureArray[iter]);
		iter++;
	}
	if (iter < measureArray.length) {
		buffer.push(measureArray[iter]);
		iter++;
	}
	MatcherArray = measureArray;
}

async function matchMeasure() {
	while (MatcherArray[iter] != 128 && iter < MatcherArray.length) {
		buffer.push(MatcherArray[iter]);
		iter++;
	}
	while (buffer.length > 0 && buffer[0] != 128) {
		
	}
}

async function nextChord() {
	await var result = findEndOfNote();
	return result;
}
