def dfs(graph, start):
    visited, stack = set(), [start]

    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            visited.add(vertex)
            print(vertex)
            stack.extend(graph[vertex] - visited)
    return visited

def dfs_path(graph, start, dest):
    stack = [(start, [start])]

    while stack:
        vertex, path = stack.pop()
        for next in graph[vertex] - set(path):
            if next == dest:
                yield path + [next]
            else:
                stack.append((next, path + [next]))

graph = {'A': set(['B', 'C']),
         'B': set(['A', 'D', 'E']),
         'C': set(['A', 'F']),
         'D': set(['B']),
         'E': set(['B', 'F']),
         'F': set(['C', 'E'])}

print(dfs(graph, 'A'))
print(list(dfs_path(graph, 'A', 'F')))