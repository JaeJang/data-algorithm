class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        
        if len(nums) < 3:
            return []
        
        result = []
        
        for i in range(len(nums) - 2):
            target = -nums[i]
            needNums = {}
            for j in range(i + 1, len(nums)):
                if nums[j] in needNums:
                    tmpAnswer = sorted([nums[i], nums[j], nums[needNums[nums[j]]]])
                    if tmpAnswer not in result:    
                        result.append(tmpAnswer)
                else:
                    needNums[target - nums[j]] = j
                    
                    
        return result

"""
[-1,0,1,2,-1,-4]
"""