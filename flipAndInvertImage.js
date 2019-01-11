/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    return A.map(item => item.reverse()).map(arr => arr.map(e => e ? 0 : 1))
};