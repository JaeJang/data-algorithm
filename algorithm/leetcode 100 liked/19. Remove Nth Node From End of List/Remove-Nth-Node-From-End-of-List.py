# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        nodeList = []
        nextNode = head;
        while nextNode:
            nodeList.append(nextNode)
            nextNode = nextNode.next
            
        targetIndex = len(nodeList) - n
        
        #only
        if len(nodeList) == 1:
            return None
        #head
        elif targetIndex == 0:
            return head.next
        #tail
        elif not nodeList[targetIndex].next:
            nodeList[targetIndex - 1].next = None
        #middle
        else:
            nodeList[targetIndex - 1].next = nodeList[targetIndex + 1]
        
        return head
