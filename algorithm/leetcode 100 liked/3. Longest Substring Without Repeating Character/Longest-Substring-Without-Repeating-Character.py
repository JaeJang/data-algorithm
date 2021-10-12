class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        current = ''
        maxCount = 0 
        
        for c in s:
            if c not in current:
                current += c
                
            else:
                if maxCount < len(current):
                    maxCount = len(current)
                
                index = 0
                for _c in current:
                    index += 1
                    if _c == c:
                        break;
                current = current[index:] + c
        
        if maxCount > len(current):
            return maxCount
        else:
            return len(current)