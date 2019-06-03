/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    return nums.reduce((cur, a) => cur ^= a);
};