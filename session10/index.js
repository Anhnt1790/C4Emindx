async function getData() {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php?fbclid=IwAR0smk8-EV1OdLYt6B_bXhOZpJkc9Mz7CVZpCkDvPSZBxjgjsz2xaMGJ49c');
    let parseRes = await response.json();
    console.log(parseRes.meals);

    let user = parseRes.meals;
    for (let i = 0; i < user.length; i++) {
        console.log(user[i]);

    }
}
getData();

let myFirst = document.getElementsByClassName('first');
let myButton = document.getElementsByClassName('button');
let mySecond = document.getElementsByClassName('second');

button.addEventListener('click', function (event) {
    user.innerHTML += 
};