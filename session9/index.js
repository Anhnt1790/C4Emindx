// function tinhTong(a, b) {
//     let tong = a + b;
//     return tong;
// }
// let a = 10;
// let b = 5;
// let sum = tinhTong(a, b);
// console.log('sum = '+ sum);

// let str1 = "ab";
// let str2 = "cd";
// //add and upper ABCD

// function addAndUpper(str1, str2){
//     let strResult = str1 + str2;
//     strResult = strResult.toUpperCase();
//     return strResult;
// }

// let result = addAndUpper(str1,str2);
// console.log(result);

// async function getAPI() {
//     let response = await fetch('https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json?fbclid=IwAR3BQnAZ3fbvzKQlUphv0xWHVu7jZYR3U6sAGyOWCxFl5TE25sb9L9hPM7s');
//     // HTTPS GET response
//     console.log(response);
//     // parse response
//     //chuyen response thanh mang
//     // cac json object
//     let data = await response.json();
//     console.log(data);

//     //data array of object
//     // hien ra danh sach ul
//     // lay tung item o trong mang ra
//     // lay cau trich dan them vao ul
//     let ul = document.getElementById("ul");
//     for (let i = 0; i < data.length; i++) {
//         //lay item o index i
//         let item = data[i];
//         console.log(item);
//         //document.createElement
//         let quoteText = item.quoteText;
//         // them 1 li moi vao ul
//         ul.innerHTML += `<li>${quoteText}</li>`;
//     }
//     console.log(ul);
// }
// getAPI();


async function getUserAPI() {
    let response = await fetch('https://reqres.in/api/users?fbclid=IwAR2OBj8BhlZ8Sme7ENA3UeJcq-oBHbK_VcBCdE3Dgsyv6DJqSecYKnPHerE');
    let parseRes = await response.json();
    // console.log(parseRes);

    let user = parseRes.data;
    for (let i = 0; i < user.length; i++) {
        console.log(user[i]);
        // console.log(user)
    }
}
getUserAPI()

// async function postUserAPI() {
//     let option = {
//         method: "POST",
//         headers: {
//             Accept: "application/jason",
//             "Content-Type": "application/json",
//         },
//         // noi dung request
//         body: JSON.stringify({
//             name: "Quan",
//             job: "Massage for dev",
//         }),
//     };

//     const res = await fetch("https://reqres.in/api/user", option);
//     console.log(await res.json());
// }
// postUserAPI();

// async function getUserAPI(){
//     let promise = fetch("https://reqres.in/api/user");
//     console.log(promise);
//     promise
//     .then(function(response){
//         console.log(response);
//         return response.json();
//     })
//     .then(function(parseResult){
//         console.log(parseResult);
//         let user = parseResult.data;
//         for(let i = 0; i< user.length;i++){
//             console.log(user[i]);
//             console.log(user[i].first_name);
//         }
//     })
// }
getUserAPI();