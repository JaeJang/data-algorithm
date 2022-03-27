class Vertex:

    def __init__(self, key):
        self.id = key
        self.connectedTo = {}
    
    def addNeighbor(self, key, weight):
        self.connectedTo[key] = weight
    
    def getConnections(self):
        return self.connectedTo.keys()

    def getId(self):
        return self.id
    
    def getWeight(self, key):
        return self.connectedTo[key]

    def __str__(self):
        return str(self.id) + ' connectedTo: ' + str([x.id for x in self.connectedTo])

class Graph:

    def __init__(self):
        self.vertices = {}
        self.size = 0
        
    def addVertex(self, key):
        self.vertices[key] = Vertex(key)
        self.size += 1

    def addEdge(self, fr, to, weight):
        if fr not in self.vertices:
            self.addVertex(fr)
        if to not in self.vertices:
            self.addEdge(to)
        
        self.vertices[fr].addNeighbor(self.vertices[to], weight)
    
    def getVertex(self, key):
        if key not in self.vertices:
            return None
        return self.vertices[key]
    
    def __contains__(self, key):
        return key in self.vertices
    
    def getVertices(self):
        return self.vertices.keys()

    def __iter__(self):
        return iter(self.vertices.values())


g = Graph()
for i in range(6):
    g.addVertex(i)

print(g.getVertices())

g.addEdge(0,1,2)

for vertex in g:
    print (vertex)
    print (vertex.getConnections())
    print ('\n')