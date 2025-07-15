let a = [1,2,3,4,4,5,5,6,6,7,7,8,4,2,3,1,3,4,5,6,7];
console.log("Original array:", a);

let uniquearray = [...new Set(a)];
console.log("Unique array:", uniquearray);
