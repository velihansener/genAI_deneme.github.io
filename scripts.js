// Ürünlerin bilgilerini içeren bir dizi oluşturuyoruz
var products = [
    {
        id: 1,
        name: "Batman Funko Pop",
        price: 29.99
    },
    {
        id: 2,
        name: "Superman Funko Pop",
        price: 24.99
    },
    {
        id: 3,
        name: "Wonder Woman Funko Pop",
        price: 27.99
    }
];

// Sepetimizi temsil eden bir dizi oluşturuyoruz
var cart = [];

// Ürünleri ekleme fonksiyonu
function addToCart(productId) {
    // productId ile products dizisinde ürünü buluyoruz
    var product = products.find(item => item.id === productId);

    if (product) {
        // Sepete eklenen ürünün bir kopyasını oluşturuyoruz
        var cartItem = Object.assign({}, product);
        // Sepette kaç adet olduğunu takip etmek için quantity özelliğini ekliyoruz
        cartItem.quantity = 1;

        // Eğer ürün zaten sepette varsa, miktarını artırıyoruz
        var existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            // Sepete yeni bir ürün ekliyoruz
            cart.push(cartItem);
        }

        // Sepeti güncelleyen fonksiyonu çağırıyoruz
        updateCart();
    }
}

// Sepeti güncelleme fonksiyonu
function updateCart() {
    var cartTotal = 0;
    var cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";

    // Her ürün için sepet listesi oluşturuyoruz
    cart.forEach(item => {
        var itemTotal = item.price * item.quantity;
        cartTotal += itemTotal;

        var itemHTML = `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>${item.price.toFixed(2)}$ x ${item.quantity}</span>
                <span>Total: ${(itemTotal).toFixed(2)}$</span>
            </div>
        `;
        cartContainer.innerHTML += itemHTML;
    });

    // Sepet toplamını güncelliyoruz
    document.getElementById("cart-total").innerText = "Total: " + cartTotal.toFixed(2) + "$";
}

// Sayfa yüklendiğinde sepeti güncelliyoruz
document.addEventListener("DOMContentLoaded", function() {
    updateCart();
});
