// let a = document.getElementById('web');
// console.log(a.innerHTML);
// a.href = 'https://facebook.com'


// let b = document.getElementsByClassName('a');

// console.dir(b);
// console.log(b[0]);

// let c = document.getElementsByTagName('h2');
// console.dir(c);

// let d = document.getElementsByTagName('href');
// console.dir(d)

// let a = document.getElementById('a');
// // let b = `<h2>bbbbbb</h2>`;
// // a.innerHTML += b;
// a.addEventListener('click',function(){
//     console.log('click')
// })
let a = document.getElementById('name');
let b = `<li>Kante</li>`;

a.addEventListener('button',function(){
        a.innerHTML += b;
})