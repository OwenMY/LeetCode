/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    return dp(n-1);
};

function dp(n, memo=[1,2,3]) {
    let i = 3;
    while (i <= n) {
        memo[i] = memo[i-1] + memo[i-2];
        i+=1;
    }
    return memo[n];
}