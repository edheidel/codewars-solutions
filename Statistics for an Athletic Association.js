function stat(strg) {
  
  if (strg === "") {
    return ""
  }  
  
  let arr = strg.split(", ");
  let secondsArr = []

  for (i = 0; i < arr.length; i++) {
    secondsArr.push(Number(arr[i].split("|")[0]) * 60 * 60 + Number(arr[i].split("|")[1]) * 60 + Number(arr[i].split("|")[2]))
  }
    
  const range = Math.floor(Math.max(...secondsArr) - Math.min(...secondsArr))
  const average = Math.floor(secondsArr.reduce((a, b) => a + b) / secondsArr.length);
  
  const median = secondsArr => {
    const mid = Math.floor(secondsArr.length / 2),
      nums = [...secondsArr].sort((a, b) => a - b);
      return secondsArr.length % 2 !== 0 ? Math.floor(nums[mid]) : Math.floor((nums[mid - 1] + nums[mid]) / 2);
  }
    
  const formatter = (x) => x.toString().length === 2 ? x.toString() : "0" + x;
      
  const rangeFormatted = formatter(Math.floor(range / 3600)) 
                          + "|" 
                          + formatter(Math.floor((range % 3600) / 60)) 
                          + "|" 
                          + formatter((range - (Math.floor(range / 3600)*3600) 
                          - Math.floor((range % 3600) / 60) * 60));
    
  const averageFormatted = formatter(Math.floor(average / 3600)) 
                            + "|" 
                            + formatter(Math.floor((average % 3600) / 60)) 
                            + "|" 
                            + formatter((average - (Math.floor(average / 3600)*3600) 
                            - Math.floor((average % 3600) / 60) * 60))
    
  const medianFormatted = formatter(Math.floor(median(secondsArr) / 3600)) 
                          + "|" 
                          + formatter(Math.floor((median(secondsArr) % 3600) / 60)) 
                          + "|" 
                          + formatter((median(secondsArr) - (Math.floor(median(secondsArr) / 3600)*3600) - Math.floor((median(secondsArr) % 3600) / 60) * 60));
    
  return "Range: " + rangeFormatted + " Average: " + averageFormatted + " Median: " + medianFormatted
}