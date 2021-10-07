def bfs(graph, start):
    visited, queue = set(), [start]
    while queue:
        currentV = queue.pop(0)
        
        if currentV not in visited:
            visited.add(currentV)
            queue.extend(graph[currentV] - visited)
    
    return visited

def bfs_path(graph, start, dest):
    queue = [(start, [start])]

    while queue:
        vertex, path = queue.pop(0)
        for next in graph[vertex] - set(path):
            if next == dest:
                yield path + [next]
            else:
                queue.append((next, path + [next]))

def shortest_path(graph, start, dest):
    try:
        return next(bfs_path(graph, start, dest))
    except  StopIteration:
        return None


graph = {'A': set(['B', 'C']),
         'B': set(['A', 'D', 'E']),
         'C': set(['A', 'F']),
         'D': set(['B']),
         'E': set(['B', 'F']),
         'F': set(['C', 'E'])}

print(bfs(graph, 'A'))
print(list(bfs_path(graph, 'A', 'F')))
print(list(shortest_path(graph, 'A', 'F')))