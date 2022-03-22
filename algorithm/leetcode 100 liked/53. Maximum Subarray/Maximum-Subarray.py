class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        dp = [0] * len(nums)
        dp[0] = nums[0]
        result = dp[0]
        
        for i in range(1, len(nums)):
            dp[i] = max(nums[i], dp[i-1] + nums[i])
            result = max(result, dp[i])
        
        return result

    #simplified
    def maxSubArray(self, nums: List[int]) -> int:
        for i in range(1, len(nums)):
            nums[i] = max(nums[i], nums[i-1] + nums[i])
        
        return max(nums);