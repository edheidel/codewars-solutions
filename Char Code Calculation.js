function calc(x){
    let sum = []; 
    let arr = x.split("");
    
    for (i = 0; i < arr.length; i++) {
      sum.push(arr[i].charCodeAt());
  }
    
    const total1 = sum.join('');
    const total2 = total1.split("7").join("1");
    
    const total1Arr = total1.split("");
    const total2Arr = total2.split("");
    
    let sumDifference = [];
    
    for (i = 0; i < total1Arr.length; i++) {
      sumDifference.push(total1Arr[i] - total2Arr[i]);
    }
    
    return sumDifference.reduce((a, b) => a + b);
  }
  //change