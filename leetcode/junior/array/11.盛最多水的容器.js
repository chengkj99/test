/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力求解：求出所有的可能，找出其中的最大值
var maxArea = function (height) {
  let len = height.length
  let maxValue = -1
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      // 面积 = 横坐标的距离 * 纵坐标的最小高度
      const curArea = (j - i) * Math.min(height[i], height[j])
      maxValue = Math.max(maxValue, curArea)
    }
  }
  return maxValue
};

// 双指针
var maxArea = function (height) {
  let l = 0
  let r = height.length - 1
  let maxValue = -1
  while (l < r) {
    const curArea = (r - l) * Math.min(height[l], height[r])
    maxValue = Math.max(maxValue, curArea)
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return maxValue
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
// @lc code=end
