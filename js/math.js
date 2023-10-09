function calculateSum(arr) {
    return arr.reduce(function (sum, current) { return sum + current; }, 0);
}
function calculateSumOfPowers(arr, exponent) {
    if (exponent === void 0) { exponent = 2; }
    return arr.reduce(function (sum, current) { return sum + Math.pow(current, exponent); }, 0);
}
function calculateR(xvals, yvals) {
    // forumla:
    // (nExy - ExEy) 
    // --------------------------------------------------------
    // ((nEx2 - (Ex)**2)*(nEy**2 - (Ey)**2))**0.5
    if (xvals.length != yvals.length) {
        //throw error: invalid number of inputs, need to be symmetrical
    }
    var Exy = 0;
    for (var index = 0; index < xvals.length; index++) {
        Exy += xvals[index] * yvals[index];
    }
    var n = xvals.length;
    var Ex = calculateSum(xvals);
    var Ex2 = calculateSumOfPowers(xvals);
    var Ey = calculateSum(yvals);
    var Ey2 = calculateSumOfPowers(yvals);
    var topHalf = (Exy - Ex * Ey);
    var bottomHalf = ((n * Ex2 - Math.pow((Ex), 2)) * ((n * Ey2 - Math.pow((Ey), 2))));
    // try catch throw invalid coeffieicnt
    var bottomHalfSqrt = Math.pow(bottomHalf, 0.5);
    return topHalf / bottomHalfSqrt;
}
