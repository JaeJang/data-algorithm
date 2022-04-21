/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    // less than x
    let tmpHead1 = cur1 = new ListNode();
    // others
    let tmpHead2 = cur2 = new ListNode();
    
    while (head) {
        if (head.val < x) {
            cur1.next = head;
            cur1 = cur1.next;
        } else {
            cur2.next = head;
            cur2 = cur2.next;
        }
        head = head.next;
    }
    cur2.next = null;
    cur1.next = tmpHead2.next;
    
    return tmpHead1.next;
};

/*
[1,4,3,2,5,2]

[1,2,2]
[4,3,5]

[1,2,2,4,3,5]

*/