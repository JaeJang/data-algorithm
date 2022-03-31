/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

 var copyRandomListV2 = function(head) {
    const map = new WeakMap();
    let curOrg = head;
    const tmpHead = new Node(0)
    let curNew = tmpHead;
    
    while (curOrg) {
        map.set(curOrg, new Node(curOrg.val));
        curOrg = curOrg.next;
    }
    
    curOrg = head;
    while (curOrg) {
        curNew.next = map.get(curOrg)
        curNew.next.random = map.get(curOrg.random);
        curNew = curNew.next;
        curOrg = curOrg.next;
    }

    return tmpHead.next;
};

 var copyRandomList = function(head) {
    const map = new WeakMap();
    const randomPointers = [];
    const newList = [];
    let curOrg = head;
    const tmpHead = new Node(0)
    let curNew = tmpHead;
    let index = 0;
    
    while (curOrg) {
        curNew.next = new Node(curOrg.val);
        curNew = curNew.next;
        newList.push(curNew);
        map.set(curOrg, index)
        curOrg = curOrg.next;
        ++index;
    }
    curOrg = head;
    while (curOrg) {
        if (!curOrg.random) randomPointers.push(null);
        else randomPointers.push(map.get(curOrg.random))
        curOrg = curOrg.next;
    }
    
    for (let i = 0; i < randomPointers.length; ++i) {
        if (randomPointers[i] === null) newList[i].random = null;
        else newList[i].random = newList[randomPointers[i]]
        
    }
    
    return tmpHead.next;
};