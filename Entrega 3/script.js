document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Lente Ray-Ban', price: 150, img: 'rayban.jpg' },
        { id: 2, name: 'Lente Oakley', price: 120, img: 'oakley.jpg' },
        { id: 3, name: 'Lente Gucci', price: 200, img: 'gucci.jpg' }
    ];

    const cart = [];
    const cartButton = document.getElementById('viewCart');
    const cartModal = document.getElementById('cart');
    const closeModal = document.querySelector('.close');
    const cartItems = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const checkoutButton = document.getElementById('checkout');

    function renderProducts() {
        const productsSection = document.getElementById('products');
        productsSection.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button data-id="${product.id}">Añadir al Carrito</button>
            `;
            productsSection.appendChild(productDiv);
        });
    }

    function updateCart() {
        cartItems.innerHTML = '';
        let totalPrice = 0;
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(listItem);
            totalPrice += item.price;
        });
        totalPriceElement.textContent = `Total: $${totalPrice}`;
    }

    function openCart() {
        cartModal.style.display = 'block';
    }

    function closeCart() {
        cartModal.style.display = 'none';
    }

    document.addEventListener('click', event => {
        if (event.target.matches('.product button')) {
            const id = parseInt(event.target.getAttribute('data-id'));
            const product = products.find(p => p.id === id);
            cart.push(product);
            updateCart();
            cartButton.textContent = `Ver Carrito (${cart.length})`;
        }

        if (event.target === cartButton) {
            openCart();
        }

        if (event.target === closeModal) {
            closeCart();
        }

        if (event.target === checkoutButton) {
            alert('Compra realizada con éxito!');
            cart.length = 0;
            updateCart();
            cartButton.textContent = `Ver Carrito (${cart.length})`;
            closeCart();
        }
    });

    renderProducts();
});
