from typing import List


class Solution:

    letter_map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    def letterCombinations(self, digits: str) -> List[str]:
        if len(digits) == 0:
            return [] 
        if len(digits) == 1:
            return [ c for c in self.letter_map[digits[0]]]

        sub_letters = self.letterCombinations(digits[1:])
        return [c + sub for c in self.letter_map[digits[0]] for sub in sub_letters]
    
    # simpler
    def letterCombinationsV2(self, digits: str) -> List[str]:

        result = [''] if digits else []

        for digit in digits:
            result = [c + s for c in result for s in self.letter_map[digit]]
        
        return result

                

sol = Solution()
result = sol.letterCombinationsV2("234") 
print(result);
"""
2 3 4
'abc', 'def', 'ghi'

"""