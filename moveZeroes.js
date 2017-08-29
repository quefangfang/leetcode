/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let len = nums.length,count = 0,now = 0;
	for(var i = 0;i < len;i++){
		if(nums[i] === 0 ){
			count++;
		}else{
			nums[now] = nums[i];
			now++;
		}
	}
	for(var j = 0;j < count;j++){
		nums[now] = 0;
		now++;
	}
};
