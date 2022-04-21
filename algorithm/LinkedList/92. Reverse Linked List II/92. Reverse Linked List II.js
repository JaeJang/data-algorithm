/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetweenV2 = function(head, left, right) {
    const tmpHead = new ListNode();
    tmpHead.next = head;
    let prevLeftNode;
    let leftNode;
    let cur = tmpHead;
    let counter = 0;
    let reversedHead = null;
    while (cur) {
        if (counter + 1 === left) {
            prevLeftNode = cur;
            leftNode = cur.next;
        } 
        if (counter >= left && counter <= right) {
            const next = cur.next;
            cur.next = reversedHead;
            reversedHead = cur;
            cur = next;
        } else {
            cur = cur.next;
        }
        if (counter === right) {
            break;
        }
        ++counter;
    }
    prevLeftNode.next = reversedHead;
    leftNode.next = cur;
    
    return tmpHead.next;
};

 var reverseBetween = function(head, left, right) {
    const tmpHead = new ListNode();
    tmpHead.next = head;
    let prevLeftNode;
    let postRightNode;
    let rightNode;
    let leftNode;
    let cur = tmpHead;
    let counter = 0;
    while (cur) {
        if (counter + 1 === left) {
            prevLeftNode = cur;
            leftNode = cur.next;
        } else if (counter == right) {
            rightNode = cur;
            postRightNode = cur.next;
            rightNode.next = null;
            break;
        }
        cur = cur.next;
        ++counter;
    }
    
    let reversedHead = null;
    cur = leftNode;
    while (cur) {
        const next = cur.next;
        cur.next = reversedHead;
        reversedHead = cur;
        cur = next;
    }
    prevLeftNode.next = rightNode;
    leftNode.next = postRightNode;
    
    return tmpHead.next;
    
};