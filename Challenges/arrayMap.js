function checkSubarraySum(nums, target) {
    const sumMap = new Map();
    let currentSum = 0;

    for (let idx = 0; idx < nums.length; idx++) {
        currentSum += nums[idx];

        if (currentSum === target) {
            return true;
        }

        if (sumMap.has(currentSum - target)) {
            return true;
        }

        sumMap.set(currentSum, idx);
    }

    return false;
}

const nums1 = [1, 2, 3, 4, 5];
const target1 = 20;
console.log(checkSubarraySum(nums1, target1)); 

const nums2 = [4, -2, 3, -1, 5, -6, 2, 8];
const target2 = 15;
console.log(checkSubarraySum(nums2, target2)); 

const nums3 = [4, -2, 3, -1, 5, -6, 2, 8];
const target3 = 7;
console.log(checkSubarraySum(nums3, target3)); 
