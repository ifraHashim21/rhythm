// Update Cart Count
let cartCount = 0;
document.getElementById('add-to-cart').addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert('Album added to cart!');
});

// Simulate Buy Now (redirect to payment)
document.getElementById('buy-now').addEventListener('click', () => {
    alert('Proceeding to payment...');
    // window.location.href = "payment.html";
});

// Form Submissions
document.getElementById('billing-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
});

document.getElementById('review-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your review!');
});


function buyAlbum(albumName, artist, price) {
    // Redirect to checkout.html with album data
    window.location.href = `checkout.html?album=${albumName}&artist=${artist}&price=${price}`;
}