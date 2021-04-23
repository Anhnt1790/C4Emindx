let div = document.getElementsByTagName('div');
console.log(div[2].innerHTML);
function checkPhantu(){
    for(let i = 0; i< div.length; i++){
        console.log(div[i].innerHTML);
    }
};
checkPhantu()