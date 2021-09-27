# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Optional


class Solution:
    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root is None:
            return root;
            
        self.sumInReverseOrder(root, 0);
        return root;
        
    def sumInReverseOrder(self, node, sumFromGreater):
        if node is None:
            return sumFromGreater;
        
        sumFromRight = self.sumInReverseOrder(node.right, sumFromGreater);
        node.val +=  sumFromRight;
        return self.sumInReverseOrder(node.left, node.val)
        
        