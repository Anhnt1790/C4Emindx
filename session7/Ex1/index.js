// const container = document.getElementById('list');
// for (let i = 0; i < 3; i++) {
//     container.insertAdjacentHTML('<position>', `<li>${i}</li>`);
// }
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
console.log(d1);

