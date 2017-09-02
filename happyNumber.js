/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	if( n === 1) return true;
	let sum = add(n);
	let arrNow = [];
	return compare(sum,arrNow);
};

function compare(result,arrNow){
	if( result === 1) return true;
	if(!arrNow[result]){
		let total = add(result);
		arrNow[result] = 1;
		return compare(total,arrNow);
	}else{
		if(result === 1 ) {
			return true;
		}else{
			return false;
		}
	}
}
function add(n){
	let strNum = n+"",
		strNumLen =  strNum.length,
		sum = 0 ;
	if(strNumLen === 1){
		sum = Math.pow(n,2);
	}else{
		let arr = strNum.split(""),
			arrLen = arr.length;
		for(var i = 0;i < arrLen;i++){
			sum += Math.pow(arr[i],2);
		}
	}
	return sum;

}