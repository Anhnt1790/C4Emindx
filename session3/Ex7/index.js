let arr = [3, 4, 6, -9, 10, -88, 2];
let input = Number(prompt('Nhap so'))
// input = input.split(', ')
for(let i = 0; i < arr.length; i++){
    if(input != arr[i]){
        alert(`${input} is not found`);
    }
    if(input == arr[i]){
        alert(`${input} found ${i}`)
    }break;
}