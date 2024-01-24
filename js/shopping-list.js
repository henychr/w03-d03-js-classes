const shoppingList = [];

const addToList = (itemName) => {
    shoppingList.push(itemName);
    renderTheShoppingCart();
}


const removeFromList = (position) => {


}

const renderTheShoppingCart = () => {
    const ul = document.getElementById('cart');
    ul.innerHTML = '';

    shoppingList.forEach((itemName) => {
        ul.innerHTML += '<Li>' + itemName + '</Li>';
    })
}




