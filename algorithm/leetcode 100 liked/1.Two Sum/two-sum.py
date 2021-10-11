class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        needNumList = {}
        needNumList[target - nums[0]] = 0;
        for i in range(1, len(nums)):
            if nums[i] in needNumList:
                return [needNumList[nums[i]], i]
            else:
                needNumList[target - nums[i]] = i
        