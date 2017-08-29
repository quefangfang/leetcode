/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	s = s.trim();
	if( s.length === 0 ) return 0;
	let arr = s.split(" "),len = arr.length;
	return arr[len-1].toString().length;
};