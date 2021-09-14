class MaxBinaryHeap:
  def __init__(self):
    self.list = [None];

  def insert(self, value):
    self.list.append(value);

    if (len(self.list) == 2):
      return;

    current = len(self.list) - 1;
    parent = current // 2;

    while parent > 0:
      if (self.list[parent] < self.list[current]):
        tmp = self.list[parent];
        self.list[parent] = self.list[current];
        self.list[current] = tmp;
        current = parent;
        parent = current // 2;
      else:
        break;
  
  def pop(self):
    if (len(self.list) == 1):
      return None;
    if (len(self.list) == 2):
      return self.list.pop();

    self.list[1] = self.list[len(self.list) - 1];
    self.list[len(self.list) - 1] = self.list[1];

    removeItem = self.list.pop();

    current = 1;
    hasChild = current * 2 < len(self.list);

    while hasChild:
      target = None;
      if (current * 2 + 1) < len(self.list):
        if (self.list[current * 2] < self.list[current * 2 + 1]):
          if (self.list[current] < self.list[current * 2 + 1]):
            target = current * 2 + 1;
        else:
          if (self.list[current] < self.list[current * 2]):
            target = current * 2;
      else:
        if (self.list[current] < self.list[current * 2]):
            target = current * 2;
      if target is not None:
        tmp = self.list[current];
        self.list[current] = self.list[target];
        self.list[target] = tmp;
        current = target;
        hasChild = current * 2 < len(self.list);
      else:
        break;
    
    return removeItem;


#Test
maxBinaryHeap = MaxBinaryHeap();

maxBinaryHeap.insert(11);
maxBinaryHeap.insert(3);
maxBinaryHeap.insert(2);
maxBinaryHeap.insert(5);
maxBinaryHeap.insert(4);
maxBinaryHeap.insert(10);
maxBinaryHeap.insert(8);
print(maxBinaryHeap.list);

maxBinaryHeap.pop()
print(maxBinaryHeap.list);