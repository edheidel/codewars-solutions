//6 kyu - IPv4 to int32: https://www.codewars.com/kata/52ea928a1ef5cfec800003ee

function ipToInt32(ip){
    let octetsBinaryList = [];
    
    ip.split(".").forEach(element => {
        let octetBinary = parseInt(element).toString(2);
        while (octetBinary.length < 8){
            octetBinary = "0" + octetBinary;
        }
        octetsBinaryList.push(octetBinary);
    });
    
    return parseInt(octetsBinaryList.join(""), 2);
}