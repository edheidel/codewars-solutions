//6 kyu - IPv4 to int32: https://www.codewars.com/kata/52ea928a1ef5cfec800003ee

function ipToInt32(ip){
    return parseInt(
        ip.split(".")
        .map(x => parseInt(x).toString(2).padStart(8, "0"))
        .join(""), 2);
}