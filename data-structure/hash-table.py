class HashTable:
    def __init__(self, size = 10):
        self.size = size;
        self.keys = [None] * size;
        self.data = [None] * size;
        
    def put(self, key, value):
        hashValue = self.hashFunction(key);

        if self.keys[hashValue] == None:
            self.keys[hashValue] = key;
            self.data[hashValue] = value;
            self.size += 1;
            return;
        
        if self.keys[hashValue] == key:
            self.data[hashValue] = value;
            return;

        hashValue = self.reHashFunction(hashValue);

        while self.keys[hashValue] != None and self.keys[hashValue] != key:
            hashValue = self.reHashFunction(hashValue);
        
        if self.keys[hashValue] == None:
            self.keys[hashValue] = key;
            self.data[hashValue] = value;
            self.size += 1;
        else:
            self.data[hashValue] = value;
    
    def get(self, key):
        hashValue = self.hashFunction(key);
        startHash = hashValue;
        while self.keys[hashValue] != None:
            if self.keys[hashValue] == key:
                return self.data[hashValue];
            
            hashValue = self.reHashFunction(hashValue);

            if hashValue == startHash:
                return None;

    def remove(self, key):
        hashValue = self.hashFunction(key);
        startHash = hashValue;
        while self.keys[hashValue] != None:
            if self.keys[hashValue] == key:
                self.keys[hashValue] = None;
                self.data[hashValue] = None;
                return True;
            
            hashValue = self.reHashFunction(hashValue);

            if hashValue == startHash:
                return False;
            
    
    def hashFunction(self, key):
        return key % len(self.keys);
    
    def reHashFunction(self, oldHash):
        return (oldHash + 1) % len(self.keys);


hashTable = HashTable(10);

hashTable.put(10, "Hello");
hashTable.put(20, "Whole");
hashTable.put(30, "New");
hashTable.put(1, "World");
hashTable.remove(30);

print(hashTable.get(10));
print(hashTable.get(20));
print(hashTable.get(30));
hashTable.put(30, "New");
print(hashTable.get(30));
print(hashTable.keys)
print(hashTable.data)