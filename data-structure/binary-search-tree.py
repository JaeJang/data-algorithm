class Node:
    def __init__(self, value):
        self.value = value;
        self.leftNode = None;
        self.rightNode = None;
    
    def getValue(self):
        return self.value;
    
    def insert(self, newValue):
        if self.value > newValue:
            if self.leftNode:
                self.leftNode.insert(newValue);
            else:
                self.leftNode = Node(newValue);
        else:
            if self.rightNode:
                self.rightNode.insert(newValue);
            else:
                self.rightNode = Node(newValue);
    
    def printInOrder(self):
        if self.leftNode:
            self.leftNode.printInOrder();

        print(self.value);

        if self.rightNode:
            self.rightNode.printInOrder();

    def hasChildrun(self):
        return self.leftNode is not None or self.rightNode is not None;
    
    def hasLeftNode(self):
        return self.leftNode is not None;

    def hasRightNode(self):
        return self.rightNode is not None;

    def deleteChild(self, node):
        if self.rightNode == node:
            self.rightNode = None;
        elif self.leftNode == node:
            self.leftNode = None;

    def replaceChild(self, old, new):
        if self.rightNode == old:
            self.rightNode = new;
        elif self.leftNode == old:
            self.leftNode = new;


class BinarySearchTree:
    def __init__(self):
        self.head = None;
        self.size = 0;
    
    def __len__(self):
        return self.size;
    
    def insert(self, value):
        self.size += 1;

        if not self.head:
            self.head = Node(value);    
            return;
        
        self.head.insert(value);
    
    def printInOrder(self):
        if self.head:
            self.head.printInOrder();

    def delete(self, value):
        if not self.head:
            return;
        
        self.size -= 1;
        self.searchAndRemove(value, self.head, None);

    def searchAndRemove(self, value, currentNode:Node, parentNode:Node) -> bool:
        if not currentNode:
            return False;
        
        if value == currentNode.getValue():
            if currentNode.hasLeftNode() and not currentNode.hasRightNode():
                currentNode.replaceChild(currentNode, currentNode.leftNode);
                currentNode = None;
            elif not currentNode.hasLeftNode() and currentNode.hasRightNode():
                parentNode.replaceChild(currentNode, currentNode.rightNode);
                currentNode = None;
            elif not currentNode.hasChildrun():
                parentNode.deleteChild(currentNode);
                currentNode = None;
            else:
                succssor = None;
                succssorParent = currentNode;
                currentChild = currentNode.leftNode;
                while currentChild:
                    if currentChild.hasRightNode():
                        succssorParent = currentChild;
                        currentChild = currentChild.rightNode;
                        succssor = currentChild;
                    else:
                        break;

                if succssor:
                    if succssor.hasLeftNode():
                        succssorParent.rightNode = succssor.leftNode;
                    succssor.leftNode = currentNode.leftNode;
                    succssor.rightNode = currentNode.rightNode;
                    succssorParent.rightNode = None;
                    if not parentNode:
                        self.head = succssor;
                    else:
                        parentNode.leftNode = succssor;
                    
                else:
                    if not parentNode:
                        self.head = succssor;
                    else:
                        parentNode.leftNode = currentNode.leftNode;
                        parentNode.leftNode.rightNode = currentNode.rightNode;
            return True;
        else:
            return self.searchAndRemove(value, currentNode.leftNode, currentNode) or self.searchAndRemove(value, currentNode.rightNode, currentNode);

        
tree = BinarySearchTree()

tree.insert(7);
tree.insert(2);
tree.insert(3);
tree.insert(1);
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(16);
tree.insert(12);

tree.delete(10)
tree.delete(7)

tree.printInOrder()
