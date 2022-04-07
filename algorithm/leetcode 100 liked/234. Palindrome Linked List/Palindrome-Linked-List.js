/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let slow = fast = head;
    let reversedHead = null;
    // reverse whild finding mid
    while(fast?.next) {
        fast = fast.next.next;
        let slowNext = slow.next;
        slow.next = reversedHead;
        reversedHead = slow;
        slow = slowNext;
    }
    
    if (fast) slow = slow.next;

    while(reversedHead && slow) {
        if (reversedHead.val !== slow.val) return false;
        reversedHead = reversedHead.next;
        slow = slow.next;
    }
    return true;
};
    
/*
1 2 2 1
    <- 1 <- 2 2 -> 1 ->

1 2 3 3 3 2 1
    <- 1 <- 2 <- 3  3 -> 3 -> 2 -> 1 ->

*/