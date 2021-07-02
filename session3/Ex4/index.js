var input = prompt('Hi there, welcome to shop admin pannel, what do you want (C,R,U,D)?')
var clothesShop = ['Jeans', 'T-shirt', 'Socks'];
while (true) {
    // console.log('The current items are:')
    if (input == 'r') {
        console.log('The current items are:')
        for (let i = 0; i < clothesShop.length; i++) {
            console.log(i + 1 + '.' + clothesShop[i])
        }
    } else if (input == 'c') {
        let newItem = prompt('Enter the name of the new item');
        clothesShop.push(newItem);
        alert('Done')
        console.log(clothesShop)
    } else if (input == 'u') {
        let positionUpdate = prompt('Enter the position you want to update');
        let newName = prompt('Enter the new name')
        clothesShop[positionUpdate - 1] = newName;
        alert('Done');
        console.log(clothesShop)

    } else if (input == 'd') {
        let positionDelete = prompt('Enter the position you want to delete');
        clothesShop.splice(positionDelete, 1);
        alert('Done')
        console.log(clothesShop)

    } else {
        alert('This command is not support')
    }
    break;
}
