// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
//
// Solve it without division and in O(n).
//
// For example, given [1,2,3,4], return [24,12,8,6].
//
// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)
//
// Subscribe to see which companies asked this question.
// 新数组获得除了自己的乘积

function productExceptSelf(nums) {
  // 1.验证数组，2.获得除了自己的乘积 4.生成新数组
  // nums[a1,a2,a3,a4]
  // array1[1 * a2*a3*a4,a1 * a3*a4,a1*a2 * a4,a1*a2*a3 * 1]
  let len = nums.length
  let array1 = []
  array1[0] = 1
  for (let i = 1; i < len; i++) {
    array1[i] = array1[i-1] * nums[i-1]
  }
  let array2 = []
  array2[len-1] = 1
  for (let i = len-2; i >= 0; i--) {
    array2[i] = array2[i+1] * nums[i+1]
  }
  let arrayNew = []
  for (let i = 0; i < len; i++) {
    arrayNew[i] = array1[i] * array2[i]
  }
  return arrayNew

}



(function(){
  let nums = [1,2,3,4]
  console.log(productExceptSelf(nums));
})()
