class Solution:
    def isValid(self, s: str) -> bool:
        parenthese_mapping = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        
        stack = []
        
        for c in s:
            if c in parenthese_mapping.values():
                stack.append(c)
            elif stack == [] or stack.pop() != parenthese_mapping[c]:
                return False
        
        return stack == []
                