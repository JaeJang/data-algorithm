/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderListV2 = function(head) {
    let slow = fast = head;
    
    while(fast.next?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let reverseHead = null;
    let cur = slow.next
    slow.next = null;
    
    while (cur) {
        const tmp = cur.next;
        cur.next = reverseHead;
        reverseHead = cur
        cur = tmp;
    }
    
    cur = head;
    
    while (cur.next) {
        const tmp = cur.next;
        cur.next = reverseHead;
        reverseHead = reverseHead.next;
        cur.next.next = tmp;
        cur = cur.next.next;
    }
    if (reverseHead) cur.next = reverseHead;
    
};

 var reorderList = function(head) {
    const nodes = [];
    
    let cur = head;
    while(cur) {
        nodes.push(cur);
        cur = cur.next;
    }
    
    cur = head;
    while (cur.next?.next) {
        const tmp = cur.next;
        const lastNode = nodes.pop();
        nodes[nodes.length-1].next = null;
        cur.next = lastNode;
        lastNode.next = tmp;
        cur = cur.next.next;
    
    }
    return head;
};