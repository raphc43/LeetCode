/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let finalValue = nums[0];
    for (let i=1; i<nums.length; i++) {
        finalValue ^= nums[i];
    }
    
    return finalValue;
};
