let input = document.getElementById('input');
let button = document.getElementById('button');
let text = document.getElementById('text')
button.addEventListener('click',function(){
    let inputNew = input.value;
    text.innerHTML = inputNew.toUpperCase();
})