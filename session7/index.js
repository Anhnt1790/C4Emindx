// let input = prompt('nhap tu');
// alert(input);
// inputAlert();

// console.log('Hello')

// inputAlert();
// inputAlert();

// function inputAlert() {
//     let input = prompt("nhap input");
//     alert(input);
// }

// function abcn() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }

// abcn();
// abcn();
// abcn();

// function checkSo(x) {
// if(x % 2 === 0){
//     alert("so chan")
// }else{
//     alert("so le")
// };
// };
// checkSo(5);
// checkSo(10);

// function tinhTong(x, y) {
// let sum = x +y;
// alert('tinh tong cua x va y la:' + sum);
// }
// tinhTong(5,10);
// tinhTong('5','10');

// function checkTong(a, b, c) {
//     alert(`${a}, ${b}, ${c}`);
//     if (a === b + c) {
//         alert('a la tong cua b va c');
//     } else {
//         alert('a khong phai la tong cua b va c');
//     }
// }

// checkTong(3, 2, 1);
// checkTong(4, 2, 1);

// function goiAlert() {
//     alert('hello');
// }

// function callBackFunction() {
//     console.log('di ngu')
// }
// function functionB() {
//     console.log('di choi');
// }

// function functionMe(callback) {
//     console.log('da hoc bai');
//     callback();
// }

// setTimeout(functionB, 1000);
// functionMe(callBackFunction);
// functionMe(functionB);


let heading = document.getElementById('hd');
// console.log(heading);

// console.dir(heading);

// heading.innerHTML = 'DOM';

// let resultArray = document.getElementsByClassName("hd-class");
// console.dir(resultArray);
// resultArray[0].innerHTML = 'new heading';

// document.getElementsByTagName('h1');

// let ul = document.getElementById('list');
// console.log(ul.innerHTML);

// ul.innerHTML += `<li>capuchino<li>`;
// console.log(ul.innerHTML);

// let link = document.getElementById('link');
// link.href = 'https://facebook.com';
// link.remove();

function callBackFunc() {
    heading.innerHTML = 'da click'
}

// heading.addEventListener('click', callBackFunc);
heading.addEventListener('click', function () {
    alert('da click');
})

//tao 1 button o trang HTML
//khi nguoi dung click
//them 1 item vao list

//buoc 1: lay button, lay ra list
let button = document.getElementById('button');
let list = document.getElementById('list');
//buoc 2 : add event listener cho button
//buoc 3 : thay doi list o trong callback function
button.addEventListener('click', function (event) {
    list.innerHTML += `<li>aaaaaaa<li>`
});
let input = document.getElementById('input');
input.addEventListener('keypress', function (event) {
    console.log(event);
    //khi user bam phim enter
    if (event.keyCode === 13) {
        // lay ra value cua input
        let inputValue = input.value;
        list.innerHTML += `<li>${inputValue}</li>`
    }
})