package main

import (
	"fmt"
	"leetcode/array"
)

func main() {
	// fizzBuzz := math.FizzBuzz(15)
	// fmt.Println("!!!", fizzBuzz)

	// var nums = []int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}
	// value := array.RemoveDuplicates(nums)

	var prices = []int{7, 1, 5, 3, 6, 4}
	value := array.MaxProfit(prices)
	fmt.Println("count!!!", value)
}
