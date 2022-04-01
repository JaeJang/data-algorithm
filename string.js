function isRoating(str, target) {
    // if length are different, no way to be the same
	if (str.length !== target.length) return false;

	let i = 0;
	for (; i < target.length; ++i) {
		if (target[i] === str[0]) break;
	}
    // the first char in the original string not found in the target
	if (i === target.length) return false;

	return str === target.substring(i, target.length) + target.substring(0, i);
}

function hasDuplicate(str) {
    const set = new Set();
    for (let c of str) {
        if (set.has(c)) return true;
        set.add(c);
    } 
    return false;
}
