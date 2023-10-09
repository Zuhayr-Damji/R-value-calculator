function calculateSum(arr: number[]): number {
    return arr.reduce((sum, current) => sum + current, 0);
}
  
function calculateSumOfPowers(arr: number[],exponent = 2): number {
    return arr.reduce((sum, current) => sum + current ** exponent, 0);
}

function calculateR(xvals:number[],yvals:number[]):number{
    
    // forumla:
    // (nExy - ExEy) 
    // --------------------------------------------------------
    // ((nEx2 - (Ex)**2)*(nEy**2 - (Ey)**2))**0.5
    
    if(xvals.length != yvals.length){
        //throw error: invalid number of inputs, need to be symmetrical
    }

    let Exy: number = 0;

    for(let index=0;index<xvals.length;index++){
        Exy += xvals[index]*yvals[index];
    }
    
    let n = xvals.length;

    let Ex = calculateSum(xvals);
    let Ex2 = calculateSumOfPowers(xvals);
    let Ey = calculateSum(yvals);
    let Ey2 = calculateSumOfPowers(yvals);
    

    let topHalf =  (Exy - Ex*Ey);
    let bottomHalf = ((n*Ex2 - (Ex)**2)*((n*Ey2 - (Ey)**2)));
    // try catch throw invalid coeffieicnt
    let bottomHalfSqrt = bottomHalf**0.5;
    
    return topHalf / bottomHalfSqrt;
}