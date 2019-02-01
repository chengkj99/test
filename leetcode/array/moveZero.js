
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 说明:
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

var moveZeroes = function(nums) {
  let len = nums.length
  let i = 0
  while (len--) { // 控制循环次数
    if (nums[i] === 0) { //操作每一个发现是 0 的元素
      nums.splice(i, 1)
      nums.push(0)
    } else {
      i++
    }
  }
  return nums
};

console.log(moveZeroes([0,1,0,0,3,0,2,3,4,6,7,8])) //[ 1, 3, 2, 3, 4, 6, 7, 8, 0, 0, 0, 0 ]

