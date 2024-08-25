document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItems = document.getElementById('cart-items');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pizzaId = button.parentElement.dataset.id;
            addToCart(pizzaId);
        });
    });
    
    function addToCart(id) {
        cart.push(id);
        updateCartDisplay();
    }

    function updateCartDisplay() {
        cartItems.innerHTML = '';
        cart.forEach(id => {
            const listItem = document.createElement('li');
            listItem.textContent = `Pizza ID: ${id}`;
            cartItems.appendChild(listItem);
        });
    }

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Thank you for your order!');
        cart.length = 0; // Clear the cart
        updateCartDisplay();
    });
});
