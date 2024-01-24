const shoppingList = [];

const addToList = (itemName) => {
    shoppingList.push(itemName);
    renderTheShoppingCart();
}


const removeFromList = (position) => {
    shoppingList.splice(position, 1);
    renderTheShoppingCart();
}

const renderTheShoppingCart = () => {
    const ul = document.getElementById('cart');
    ul.innerHTML = '';

    shoppingList.forEach((itemName, index) => {
        ul.innerHTML += '<Li id="' + itemName + index + '" onclick="removeFromList(' + index + ')">' + itemName + '</Li>';
    })
}

const removeAll = () => {
    console.log(shoppingList);
    shoppingList.splice(0, shoppingList.length);
    renderTheShoppingCart();
    console.log(shoppingList);
}




