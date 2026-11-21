/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var reverseBits = function(n) {
	n = (n >> 0).toString(2);
	finalString = ''
	for (i=0; i<n.length; i++) {
		finalString += n[n.length - (i+1)]
	}
	finalString = finalString.padEnd(32, '0')

	return Number("0b"+finalString)
};

console.log(reverseBits(43261596))
