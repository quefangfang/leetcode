/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
	let arr = str.trim().split(" "),
		len = arr.length,
		newStr = "";
	if(len === 1) return str.trim();
	for(var i = len-1; i > 0; i--){
		if(arr[i] != "") newStr += arr[i]+" "
	}
	return newStr+arr[0];
};
