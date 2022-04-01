/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    const tmpHead = new ListNode();
    let ahead = current = tmpHead;
    tmpHead.next = head;
    
    for (let i = 0; i <= n; ++i) {
        ahead = ahead.next;
    }
 
    while (ahead) {
        ahead = ahead.next;
        current = current.next;
    }
    current.next = current.next.next;
    return tmpHead.next;
};