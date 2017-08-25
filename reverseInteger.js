/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	let result = 0;
	if(x === 0 || x > 2147483647 || x < -2147483648) return 0;
	if(x>0) {
		result = +x.toString().split("").reverse().join("");
		return result > 2147483647 ? 0: result;
	}else{
		x = x.toString().substring(1);
		result = -x.split("").reverse().join("");
		return result < -2147483647 ? 0: result;
	}
};

