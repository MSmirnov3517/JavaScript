var catalog = [
    tovar = { name: 'tovar', price: 100, quantity: 1 },
    tovar_2 = { name: 'tovar2', price: 200, quantity: 1 },
];

//попробовал решить функцией reduce, но как объеденить подсчёт суммы с подсчётом количества товаров?
function countCartPrice(cart) {
    var initialValue = 0;
    var sum = cart.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity),
        initialValue
    );
    return sum;
};

var cart = [];



function createCatalog() {
    var bask = document.getElementById('catal')
    for (let item of catalog) {
        var div = document.createElement('div');
        div.id = 'top' + item.name;
        div.innerText = item.name + ' цена: ' + item.price;
        bask.appendChild(div);
        var bttn = document.createElement('button');
        bttn.id = catalog.indexOf(item);
        bttn.onclick = addToCart;
        bttn.innerHTML = 'купить';
        div.appendChild(bttn);

    }
}


function addToCart() {
    cart.push(catalog[this.id]);
    let total_quntity = 0;
    let total_sum = 0;
    for (let item of cart) {
        total_quntity += item.quantity;
        total_sum += item.quantity * item.price
    }
    var content2 = document.getElementById('basket');
    content2.innerHTML = 'в корзине ' + total_quntity + ' товара(-ов), на сумму ' + total_sum + ' рублей';
    console.log(cart);
}

window.addEventListener('load', createCatalog);
