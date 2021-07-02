let input = prompt('Nhap so');
let num = input.split(",");
for(let item of num){
    var minInNumbers = Math.min.apply(Math, num);
}
console.log(minInNumbers);