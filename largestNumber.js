/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
	let arr = nums.sort(nums),
		len = arr.length-1,
		newStr = "",
		count = -1;
	if( len === 0) return nums[0]+"";
	for(let p = 0;p <= len;p++){
		if(!arr[p]){
			count++;
		}else{
			arr[p] = arr[p] + '';
		}

	}
	if( count === len ){
		return '0';
	}
	for( var i = 0; i < len; i ++ ){
		for(var j = 0; j < len - i; j++){
			let result = compare(arr[j],arr[j+1]);
			if( result > 0 ){
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	for(var k = len; k >= 0; k--){
		newStr += arr[k]
	}
	return newStr
};

function compare(strPre,strNext){
	let str1 = strPre + strNext
	let str2 = strNext + strPre
	return str1 - str2
}