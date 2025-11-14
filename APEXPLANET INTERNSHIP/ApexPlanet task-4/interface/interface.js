const products = [
  { name: "Men's T-Shirt", category: "Men", price: 750, rating: 4.5, image: "https://www.mydesignation.com/cdn/shop/files/zodiac-oversized-t-shirt-848145.jpg?v=1729223680&width=1500" },
  { name: "Women's Jeans", category: "Women", price: 1200, rating: 4.1, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRp8dS0YLWPk0hKQ4xhMyNILndTsi1UJKJsMzzxc83l1gtLAhOeRUPrJkKPewd-FFTiAe8YzJXdD_xo_cgJU1rVYAod2JlPybL8iEG4UGfjvSBJCWizsksayLU62Z0upx2Tt750vDU&usqp=CAc" },
  { name: "Smartphone", category: "Electronics", price: 15000, rating: 4.8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT04jiiq1lLkHUbKqK9uALbKznP7FxfvejnQ&s" },
  { name: "Bluetooth Earbuds", category: "Gadgets", price: 999, rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVEwDI5OSzVZcVHgGtLw_Gp5iX00HIucZPgw&s" },
  { name: "Men's Shoes", category: "Men", price: 2000, rating: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGifi1IAvm6b96wk0TcQ-RBJvCN5I45mxOw&s" },
  { name: "Women's Dress", category: "Women", price: 1800, rating: 4.4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPBU9ZUQJHymZE2HJsmnC35tpG5MLZT7CXg&s" },
  { name: "Smartwatch", category: "Gadgets", price: 2500, rating: 4.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjYlC9X7tm56oGbUspjBdJKHJ1MqrwY-h7Ng&s" },
  { name: "Laptop", category: "Electronics", price: 45000, rating: 4.9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwfpGfS0knB3d9BikykO7ucGbFFZkQ1GG8g&s" },
    { name: "Women's chappals", category: "Women", price: 1600, rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52tky-gawq3ATPi4-nzMJbIxC1JVqsVCbMA&s" },

    { name: "womens Accesories", category: "women", price: 300, rating: 4.2, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_976tL9NO1unIDi-xQEe5_s17bLWBB23We9xVfZ3HFs9GB2TK7MV0qH3ovGW8Q_qLtMYgXvL_xRGp-LMjJTeb0wd-42A-uAiArhl5xnwiA6ZeaaUASCKOlA&usqp=CAc" },

  { name: "Men's Jacket", category: "Men", price: 1700, rating: 4.2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4UTXTyi02HvI6TF3KxLArjIKciJuZg66qA&s" },
  { name: "Women's Handbag", category: "Women", price: 950, rating: 4.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_bGMG-COGEW42ss1vZtQYM7ZbV5CdxLahpg&s" },
  { name: "Tablet", category: "Electronics", price: 12000, rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSqOCSX0k2Ls9T_ojQvWez4IHuKoafhPHXQ&s" },
    { name: "Women's Earrings", category: "Women", price: 500, rating: 4.0, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRsNUV9en1sP9IvOiV0TKgDfYQ2UEFb5FwHtEx_QcvGjJU5ybnu7_O2AB4iD-DPaMPwRiMpLpBt0XcyI92lEVyxhicyGw9bAiAq3_UYbzhDqayQLTQxvfB_Wg" },

  { name: "Men's Watch", category: "Men", price: 1300, rating: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95ItUkbbbIhicGey2Wm5ZxeMd2bR35wBKZg&s" },
  { name: "Women's Kurti", category: "Women", price: 700, rating: 4.4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQScgM2pWvT1GZHaTfVnUp3ExpV7uuj7QdbEw&s" },
  { name: "Women's Top", category: "Women", price: 850, rating: 4.3, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQtp93edTiXPI0vsl2rs-sy01QaPLeOwp34aQrYGGauWX0gRNy633rUIu76JJ8CjITBeacmKz34eLY0Qr-S2lNHgKqMa78wR7ql5e57pP-bnAUYz5mgfwJ6&usqp=CAc" },
  { name: "VR Headset", category: "Gadgets", price: 3500, rating: 4.4, image: "https://images.meesho.com/images/products/467844658/ipzra_1200.jpg" },
  { name: "Desktop PC", category: "Electronics", price: 60000, rating: 4.9, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR-reOzndHtGNyhhaBvipjs_ys3QbryqsElDAzLtACxVtI39CA1X4edRXNUbR7FUWGbp-wMvVGAim8vtZ7paHnr2yyljdgvDJRqI6N5j2dFxBvkUuCt_KlmzaHfG-q1qaQoIG9jzg_iRA&usqp=CAc" },
    { name: "Women's Heels", category: "Women", price: 1600, rating: 4.3, image: "https://images.meesho.com/images/products/371498911/ash5x_1200.jpg" },
      { name: "Bluetooth Speaker", category: "Gadgets", price: 2200, rating: 4.6, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTFK6KcvNK1zRewqVsV8HuEv9_7GwmomHF4ES7aGJdV2GEIiVIG-q7VheGXTdT_sKj820dw3QVzN2-t4ThvybT1oStwIu65r2eUO_8MY0RT33vlwgz9F7gAHd0" },
  { name: "Gaming Console", category: "Electronics", price: 30000, rating: 4.7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroxV1m3Y-T3kwCX5xraPTso88imfK996tCw&s" },
  { name: "LED TV", category: "Electronics", price: 28000, rating: 4.8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWajI2dn-IN052nqGN39kbRRGA2ILnL0RudA&s" },
  { name: "Women's Scarf", category: "Women", price: 300, rating: 4.1, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTtqPVKcSyjy29JDSbvJmDZNh5ylzyNzUf2Mv0ClHj5x4JBQVYxS9dP9du9yIgU0AsrfmjL_9QAbP6nLx85q0hrgg6gwCrkZmfLljkTyoR2BklqemNQD0v68YQ&usqp=CAc" },


];


function renderProducts(list) {
  const container = document.getElementById('product-container');
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <p>⭐ ${p.rating}</p>
      </div>
    `;
  });
}

function filterAndSort() {
  let filtered = [...products];

  const checkedCategories = Array.from(document.querySelectorAll('.filters input[type="checkbox"]:checked'))
    .map(cb => cb.value);
  if (checkedCategories.length > 0) {
    filtered = filtered.filter(p => checkedCategories.includes(p.category));
  }

  const priceFilter = document.querySelector('input[name="price"]:checked')?.value;
  if (priceFilter === "under1000") {
    filtered = filtered.filter(p => p.price < 1000);
  } else if (priceFilter === "above1000") {
    filtered = filtered.filter(p => p.price >= 1000);
  }

  const sortValue = document.getElementById("sort").value;
  if (sortValue === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortValue === "priceLowHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "priceHighLow") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

document.querySelectorAll('.filters input, #sort').forEach(el => {
  el.addEventListener("change", filterAndSort);
});

renderProducts(products);
function observeCards() {
  const cards = document.querySelectorAll(".product-card");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => observer.observe(card));
}
function renderProducts(list) {
  const container = document.getElementById('product-container');
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <p>⭐ ${p.rating}</p>
      </div>
    `;
  });

  observeCards(); 
}

