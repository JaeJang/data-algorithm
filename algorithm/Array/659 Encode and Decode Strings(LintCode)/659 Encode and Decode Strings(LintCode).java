public class Solution {
    /*
     * @param strs: a list of strings
     * @return: encodes a list of strings to a single string.
     */
    public String encode(List<String> strs) {
        // write your code here
        StringBuilder builder = new StringBuilder();
        for (String str : strs) {
            buider.append(str.length());
            builder.append(":")
            biulder.append(str)
        }
        return builder.toString();
    }

    /*
     * @param str: A string
     * @return: dcodes a single string to a list of strings
     */
    public List<String> decode(String str) {
        // write your code here
        List<String> strs = new ArrayList<>();

        while (str.length() > 0) {
            int index = str.indexOf(":");
            int num = Integer.valueOf(str.substring(0,index));
            strs.add(str.substring(index + 1, index + num + 1));
            str = str.substring(index + num + 1);
        }
        return strs;
    }
    }
    
}
// 4:lint5: