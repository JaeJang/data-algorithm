
var TimeMap = function() {
    this.keyTimeMap = {}
    this.timeValueMap = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.keyTimeMap[key]) this.keyTimeMap[key] = [timestamp];
    else this.keyTimeMap[key].push(timestamp);
    
    this.timeValueMap[timestamp] = value;
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const timestamps = this.keyTimeMap[key];
    if (!timestamps?.length) return "";
    
    let start = 0;
    let end = timestamps.length - 1;
    let mid = 0;
    while (start <= end) {
        mid = parseInt((start + end) / 2);
        if (timestamps[mid] === timestamp) return this.timeValueMap[timestamps[mid]];
        
        if (timestamps[mid] > timestamp) end = mid - 1;
        else start = mid + 1;
    }
    //if (timestamps[mid] < timestamp) return "";
    if (timestamps[mid] > timestamp) {
        if (mid - 1 >= 0) return this.timeValueMap[timestamps[mid-1]];
        return "";                       
    }
    return this.timeValueMap[timestamps[mid]];
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

/*
{foo:[0,4], boo:[1]}
[bar,bar,zoo]
{0: bar, 1: bar, 4: zoo}



*/