import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;

class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        Map<String, Integer> counts = new HashMap<>();
        
        for (int i = 0; i < words.length; ++i) {
            if (counts.containsKey(words[i])) {
                counts.put(words[i], counts.get(words[i]) + 1);
            } else {
                counts.put(words[i], 1);
            }
        }
        
        PriorityQueue<Map.Entry<String, Integer>> pQueue = new PriorityQueue<>(
        (l, r) -> l.getValue() == r.getValue() ? r.getKey().compareTo(l.getKey()) : l.getValue() - r.getValue());
        
        for (Map.Entry<String, Integer> entry : counts.entrySet()) {
            pQueue.offer(entry);
            if (pQueue.size() > k) {
                pQueue.poll();
            }
        }
        
        List<String> result = new ArrayList<>();
        while (pQueue.size() > 0) {
            result.add(0, pQueue.poll().getKey());
        }
        return result;
    }
}