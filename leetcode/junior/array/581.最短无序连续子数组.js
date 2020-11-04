/**
 * @param {number[]} nums
 * @return {number}
 * 我们将数组 numsnums 进行排序，记为 nums\_sortednums_sorted 。
 * 然后我们比较 numsnums 和 nums\_sortednums_sorted 的元素来决定最左边和最右边不匹配的元素。
 * 它们之间的子数组就是要求的最短无序子数组。
 */
var findUnsortedSubarray = function (nums) {
  const _nums = [...nums].sort((a, b) => a - b)
  let start = nums.length
  let end = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== _nums[i]) {
      start = Math.min(i, start)
      end = Math.max(i, end)
    }
  }
  return (end - start >= 0) ? (end - start + 1) : 0;
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
