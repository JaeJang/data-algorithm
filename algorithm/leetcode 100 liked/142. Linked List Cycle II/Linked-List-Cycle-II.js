/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let slow = faster = head;
    
    while(faster?.next?.next) {
        slow = slow.next;
        faster = faster.next.next;
        if (slow === faster) {
            let slow2 = head;
            while (slow !== slow2) {
                slow2 = slow2.next; 
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;
};