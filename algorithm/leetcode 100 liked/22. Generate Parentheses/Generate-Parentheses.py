class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        def helper(lst, s , opening, closing, maxNum):
            if len(s) == maxNum * 2:
                lst.append(s)
                return;
            
            if opening < maxNum:
                helper(lst, s + '(' ,opening + 1, closing, maxNum)
            if closing < opening:
                helper(lst, s + ')' , opening, closing + 1, maxNum)
                
        lst = [];
        
        helper(lst, '', 0, 0, n)
        return lst;
        