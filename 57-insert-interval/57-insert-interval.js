/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */


var insert = function(intervals, newInterval) {
    const res = [];
    let [nl, nr] = newInterval;
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        const [l, r] = interval;
        if (nl > r) res.push(interval);
        else if (nr < l) {
            res.push([nl, nr]);
            res.push.apply(res, intervals.slice(i));
            return res;
        } else
            [nl, nr] = [Math.min(nl, l), Math.max(nr, r)];
    }
    res.push([nl, nr]);
    return res;
};