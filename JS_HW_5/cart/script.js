var cart = [
    {
        name: 'skirt',
        size: 'M',
        price: 100,
        number: 1
    },
    {
        name: 'Coat',
        size: 'L',
        price: 120,
        number: 1
    }

]

function addItemToCart(name, size, price, number) {
    cart.push({
        name: name,
        size: size,
        price, price,
        number, number
    });
}

function countCartPrice(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item.price * item.number
    }
    return sum;
}

function countCartNumber(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item.number
    }
    return sum;
}
console.log(cart)
console.log(countCartPrice(cart))

addItemToCart('boots', 'L', 500, 5)
console.log(countCartPrice(cart))
console.log(cart)

function basket() {
    var content2 = document.getElementById('basket');
    if (countCartPrice(cart) > 0) {
        content2.innerHTML = 'в корзине ' + countCartNumber(cart) + ' товаров, на сумму ' + countCartPrice(cart) + ' рублей';
    } else {
        content2.innerHTML = 'В корзине пусто';
    }
}
window.onload = basket;