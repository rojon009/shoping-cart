// Buttons
const cart = document.getElementById('cart');
const subTotal = document.getElementById('subtotal');
const tax = document.getElementById('tax');
const total = document.getElementById('total');

function updateTotal() {
    const sub = cart.querySelectorAll('.price');
        let subTotalAmount = 0;
        let taxAmount = parseFloat(tax.innerText);
        sub.forEach(el => {subTotalAmount = subTotalAmount + parseFloat(el.innerText)})
        let totalAmout = subTotalAmount + taxAmount;
        subTotal.innerText = subTotalAmount;
        total.innerText = totalAmout;
}

cart.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn')
    if(btn){
        const item = btn.closest('.cart-item')
        const input = item.querySelector('input');
        const price = item.querySelector('.price');
        let value = + input.value;
        if(btn.dataset.cl == 'inc') {
            price.innerText =+price.innerText +price.innerText / value;
            input.value = value + 1;
        } else if( btn.dataset.cl == 'dec' && input.value>1) {
            price.innerText =+price.innerText -price.innerText / value;
            input.value = value - 1;
        }
        updateTotal();
    } 
});
console.log(cart.querySelectorAll('input'))
cart.querySelectorAll('input').forEach(el => {
    el.addEventListener('change', function (e) {
        console.log('changeing')
    })
})



updateTotal();
