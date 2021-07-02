let input = prompt('Nhap so');
let num = input.split(",")
// console.log(num)
let sum = 0
for(let item of num){
    sum += Number(item)
};
alert(sum)
