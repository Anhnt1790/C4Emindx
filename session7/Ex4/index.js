let ul = document.getElementsByTagName('ul');
let li = document.getElementsByTagName('li');
console.log(ul);
console.log(ul.length);
console.log(li[1].innerHTML);
function checkPhantu() {
    for (let i = 0; i < li.length; i++) {
        console.log(li[i].innerHTML);
    }
}
checkPhantu();