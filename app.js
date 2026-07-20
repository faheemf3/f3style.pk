// ╔══════════════════════════════════════════════════════════════════╗
// ║  EASY PRODUCT SETUP — Just update the numbers below!           ║
// ║  Add images as 1.png, 2.png, 3.png in the folders:            ║
// ║    images/boys/    images/girls/    images/jewelry/            ║
// ║  Then update the count here to match.                         ║
// ╚══════════════════════════════════════════════════════════════════╝
const BOYS_COUNT = 3;   // Number of images in images/boys/
const GIRLS_COUNT = 3;   // Number of images in images/girls/
const JEWELRY_COUNT = 3;   // Number of images in images/jewelry/
const MEN_COUNT = 4;     // Number of images in images/men/
const WOMENS_COUNT = 3;  // Number of images in images/womens/

// Default names & prices (used when no custom override exists)
const DEFAULTS = {
    "boys-shirts": { namePrefix: "Boys Shirt", price: 2499, sizes: ["S", "M", "L", "XL"] },
    "girls-shirts": { namePrefix: "Girls Shirt", price: 2199, sizes: ["XS", "S", "M", "L"] },
    "jewelry": { namePrefix: "Jewelry", price: 3499, sizes: [] },
    "men-shirts": { namePrefix: "Men Shirt", price: 2999, sizes: ["S", "M", "L", "XL"] },
    "womens-shirts": { namePrefix: "Womens Shirt", price: 2799, sizes: ["XS", "S", "M", "L"] }
};

// ★ CUSTOM OVERRIDES — Set name/price/description for specific products
// Key format: "boys-1", "girls-2", "jewelry-3" etc.
const CUSTOM = {
    "boys-1": { name: "Navy Blue Polo Shirt", price: 2499, originalPrice: 3200, badge: "sale", rating: 4.5, reviews: 128, description: "Premium navy blue polo with subtle logo embroidery. Made from 100% cotton for all-day comfort." },
    "boys-2": { name: "Black Graphic Tee", price: 1899, originalPrice: null, badge: "new", rating: 4.8, reviews: 89, description: "Bold streetwear graphic tee in black. Perfect for casual outings and everyday style." },
    "boys-3": { name: "Light Blue Button-Down", price: 3199, originalPrice: 4000, badge: "sale", rating: 4.6, reviews: 67, description: "Classic light blue button-down with slim fit. Perfect for semi-formal occasions." },
    "girls-1": { name: "Blush Pink Casual Top", price: 2199, originalPrice: 2800, badge: "sale", rating: 4.7, reviews: 156, description: "Soft blush pink top with modern design. Lightweight and perfect for summer." },
    "girls-2": { name: "White Gold Print Top", price: 1999, originalPrice: null, badge: "new", rating: 4.4, reviews: 94, description: "Elegant white top with gold foil print. A chic addition to any wardrobe." },
    "girls-3": { name: "Burgundy Elegant Blouse", price: 2899, originalPrice: 3500, badge: "sale", rating: 4.9, reviews: 203, description: "Rich burgundy blouse with subtle pattern. Premium fabric with a luxurious feel." },
    "jewelry-1": { name: "Gold Necklace & Earring Set", price: 4599, originalPrice: 5800, badge: "sale", rating: 4.8, reviews: 312, description: "Exquisite gold necklace and earring set with delicate gemstones. Perfect for special occasions." },
    "jewelry-2": { name: "Crystal Charm Bracelet", price: 2299, originalPrice: null, badge: "new", rating: 4.6, reviews: 178, description: "Stunning silver bracelet with crystal stones and charm details. A sparkling statement piece." },
    "jewelry-3": { name: "Pearl Drop Earrings", price: 1799, originalPrice: 2200, badge: "sale", rating: 4.7, reviews: 145, description: "Beautiful pearl and gold drop earrings. Elegant, lightweight and perfect for everyday wear." },
    "men-1": { name: "Classic White Men Shirt", price: 2999, originalPrice: 3500, badge: "new", rating: 4.8, reviews: 110, description: "Classic white shirt for men. Perfect for formal wear." },
    "men-2": { name: "Casual Check Shirt", price: 2499, originalPrice: null, badge: "sale", rating: 4.5, reviews: 85, description: "Comfortable check shirt for casual outings." },
    "men-3": { name: "Black Denim Shirt", price: 3499, originalPrice: 4200, badge: "new", rating: 4.9, reviews: 200, description: "Stylish black denim shirt." },
    "men-4": { name: "Blue Striped Shirt", price: 2799, originalPrice: null, badge: null, rating: 4.6, reviews: 95, description: "Blue striped shirt for everyday wear." },
    "womens-1": { name: "Floral Print Top", price: 2799, originalPrice: 3200, badge: "sale", rating: 4.7, reviews: 150, description: "Beautiful floral print top for women." },
    "womens-2": { name: "Solid Red Blouse", price: 2499, originalPrice: null, badge: "new", rating: 4.6, reviews: 120, description: "Elegant solid red blouse." },
    "womens-3": { name: "White Chiffon Shirt", price: 3199, originalPrice: 3800, badge: "sale", rating: 4.8, reviews: 180, description: "Premium white chiffon shirt." }
};

// Auto-generate products from folder images
function generateProducts() {
    const products = [];
    let id = 1;
    const categories = [
        { key: "boys-shirts", folder: "images/boys", count: BOYS_COUNT },
        { key: "girls-shirts", folder: "images/girls", count: GIRLS_COUNT },
        { key: "jewelry", folder: "images/jewelry", count: JEWELRY_COUNT },
        { key: "men-shirts", folder: "images/men", count: MEN_COUNT },
        { key: "womens-shirts", folder: "images/womens", count: WOMENS_COUNT },
    ];
    categories.forEach(cat => {
        const def = DEFAULTS[cat.key];
        const shortKey = cat.key.replace("-shirts", "");
        for (let i = 1; i <= cat.count; i++) {
            const customKey = shortKey + "-" + i;
            const custom = CUSTOM[customKey] || {};
            products.push({
                id: id++,
                name: custom.name || def.namePrefix + " #" + i,
                category: cat.key,
                price: custom.price || def.price,
                originalPrice: custom.originalPrice !== undefined ? custom.originalPrice : null,
                image: cat.folder + "/" + i + ".png",
                badge: custom.badge || null,
                rating: custom.rating || 4.5,
                reviews: custom.reviews || 50,
                sizes: def.sizes,
                description: custom.description || "Premium quality " + def.namePrefix.toLowerCase() + ". Crafted with care for the best experience.",
            });
        }
    });
    return products;
}

const PRODUCTS = generateProducts();

const CATEGORY_LABELS = {
    "boys-shirts": "Boys Shirts",
    "girls-shirts": "Girls Shirts",
    "jewelry": "Jewelry",
    "men-shirts": "Men Shirts",
    "womens-shirts": "Womens Shirts"
};

// ========== Cart ==========
let cart = JSON.parse(localStorage.getItem("f3cart")) || [];

function saveCart() {
    localStorage.setItem("f3cart", JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(i => i.id === productId);
    if (existing) { existing.qty += qty; }
    else { cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty }); }
    saveCart();
    showToast(product.name + " added to cart!");
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
}

function updateCartQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) { removeFromCart(productId); return; }
    saveCart();
}

function getCartTotal() {
    return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
    return cart.reduce((sum, i) => sum + i.qty, 0);
}

function updateCartUI() {
    // Cart count badge
    const countEls = document.querySelectorAll("#cartCount");
    countEls.forEach(el => {
        const count = getCartCount();
        el.textContent = count;
        el.classList.toggle("hidden", count === 0);
    });

    // Cart drawer items
    const drawerItems = document.getElementById("cartDrawerItems");
    if (drawerItems) {
        if (cart.length === 0) {
            drawerItems.innerHTML = '<div class="cart-empty" id="cartEmpty"><div class="icon"><i class="fas fa-shopping-bag"></i></div><p>Your bag is empty</p></div>';
        } else {
            drawerItems.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-img"><img src="${item.image}" alt="${item.name}"></div>
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <div class="price">Rs. ${item.price.toLocaleString()}</div>
            <div class="cart-item-qty">
              <button onclick="updateCartQty(${item.id}, -1)">−</button>
              <span>${item.qty}</span>
              <button onclick="updateCartQty(${item.id}, 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
        </div>
      `).join("");
        }
    }

    // Cart total
    const totalEl = document.getElementById("cartTotal");
    if (totalEl) totalEl.textContent = "Rs. " + getCartTotal().toLocaleString();

    // Cart page
    renderCartPage();
}

// ========== Cart Page Rendering ==========
function renderCartPage() {
    const cartPageItems = document.getElementById("cartPageItems");
    const orderSubtotal = document.getElementById("orderSubtotal");
    const orderTotal = document.getElementById("orderTotal");
    const cartPageEmpty = document.getElementById("cartPageEmpty");
    const cartPageContent = document.getElementById("cartPageContent");

    if (!cartPageItems) return;

    if (cart.length === 0) {
        if (cartPageEmpty) cartPageEmpty.style.display = "block";
        if (cartPageContent) cartPageContent.style.display = "none";
        return;
    }

    if (cartPageEmpty) cartPageEmpty.style.display = "none";
    if (cartPageContent) cartPageContent.style.display = "grid";

    cartPageItems.innerHTML = cart.map(item => `
    <div class="cart-table-row">
      <div class="cart-table-product">
        <img src="${item.image}" alt="${item.name}">
        <div><h4>${item.name}</h4><p>Premium Quality</p></div>
      </div>
      <div>Rs. ${item.price.toLocaleString()}</div>
      <div class="cart-item-qty">
        <button onclick="updateCartQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="updateCartQty(${item.id}, 1)">+</button>
      </div>
      <div style="font-weight:600;color:var(--accent);">Rs. ${(item.price * item.qty).toLocaleString()}</div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
    </div>
  `).join("");

    const total = getCartTotal();
    if (orderSubtotal) orderSubtotal.textContent = "Rs. " + total.toLocaleString();
    if (orderTotal) orderTotal.textContent = "Rs. " + total.toLocaleString();
}

// ========== Product Rendering ==========
function renderProductCard(product) {
    const badgeHTML = product.badge === "sale" ? '<span class="badge badge-sale">Sale</span>'
        : product.badge === "new" ? '<span class="badge badge-new">New</span>' : '';
    const originalHTML = product.originalPrice ? '<span class="original">Rs. ' + product.originalPrice.toLocaleString() + '</span>' : '';
    const stars = "\u2605".repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? "\u00BD" : "");

    return `
    <div class="product-card fade-up">
      <div class="product-image">
        <a href="product-detail.html?id=${product.id}"><img src="${product.image}" alt="${product.name}" loading="lazy"></a>
        <div class="product-badges">${badgeHTML}</div>
        <div class="product-actions">
          <button class="product-action-btn" title="Quick View" onclick="window.location.href='product-detail.html?id=${product.id}'"><i class="fas fa-eye"></i></button>
          <button class="product-action-btn" title="Wishlist"><i class="fas fa-heart"></i></button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${CATEGORY_LABELS[product.category] || product.category}</div>
        <h3 class="product-name"><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span class="count">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="current">Rs. ${product.price.toLocaleString()}</span>
          ${originalHTML}
        </div>
        <button class="product-add-btn" onclick="addToCart(${product.id})">
          <i class="fas fa-shopping-bag"></i> Add to Cart
        </button>
      </div>
    </div>`;
}

function renderFeaturedProducts() {
    const container = document.getElementById("featuredProducts");
    if (!container) return;
    const featured = PRODUCTS.slice(0, 8);
    container.innerHTML = featured.map(renderProductCard).join("");
    initScrollAnimations();
}

function renderShopProducts() {
    const container = document.getElementById("shopProducts");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const catFilter = params.get("cat");
    let filtered = PRODUCTS;

    if (catFilter) {
        filtered = PRODUCTS.filter(p => p.category === catFilter);
        document.querySelectorAll(".filter-group input[type='checkbox']").forEach(cb => {
            if (cb.value === catFilter) cb.checked = true;
        });
    }

    // Listen for filter changes
    document.querySelectorAll(".filter-group input[type='checkbox']").forEach(cb => {
        cb.addEventListener("change", () => {
            const checked = [...document.querySelectorAll(".filter-group input[type='checkbox']:checked")].map(c => c.value);
            let result = checked.length > 0 ? PRODUCTS.filter(p => checked.includes(p.category)) : PRODUCTS;
            container.innerHTML = result.map(renderProductCard).join("");
            const resultsEl = document.querySelector(".shop-toolbar .results");
            if (resultsEl) resultsEl.textContent = "Showing " + result.length + " products";
            initScrollAnimations();
        });
    });

    // Sort
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", () => {
            const val = sortSelect.value;
            let sorted = [...filtered];
            if (val === "price-low") sorted.sort((a, b) => a.price - b.price);
            else if (val === "price-high") sorted.sort((a, b) => b.price - a.price);
            else if (val === "rating") sorted.sort((a, b) => b.rating - a.rating);
            else if (val === "newest") sorted.sort((a, b) => b.id - a.id);
            container.innerHTML = sorted.map(renderProductCard).join("");
            initScrollAnimations();
        });
    }

    container.innerHTML = filtered.map(renderProductCard).join("");
    const resultsEl = document.querySelector(".shop-toolbar .results");
    if (resultsEl) resultsEl.textContent = "Showing " + filtered.length + " products";
    initScrollAnimations();
}

function renderProductDetail() {
    const container = document.getElementById("productDetailContainer");
    if (!container) return;
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) { container.innerHTML = '<p style="text-align:center;padding:60px;">Product not found.</p>'; return; }

    document.title = product.name + " \u2014 F3Style.pk";
    const originalHTML = product.originalPrice ? '<span class="old">Rs. ' + product.originalPrice.toLocaleString() + '</span>' : '';
    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    const sizesHTML = product.sizes.length > 0 ? `
    <div class="size-selector">
      <h4>Size</h4>
      <div class="size-options">${product.sizes.map((s, i) => '<button class="size-btn ' + (i === 0 ? 'active' : '') + '" onclick="this.parentElement.querySelectorAll(\'.size-btn\').forEach(b=>b.classList.remove(\'active\'));this.classList.add(\'active\');">' + s + '</button>').join("")}</div>
    </div>` : '';

    container.innerHTML = `
    <div class="product-detail">
      <div class="product-gallery">
        <div class="main-image"><img src="${product.image}" alt="${product.name}"></div>
      </div>
      <div class="product-detail-info">
        <div class="product-category" style="margin-bottom:8px;">${CATEGORY_LABELS[product.category]}</div>
        <h1>${product.name}</h1>
        <div class="product-rating" style="margin-bottom:16px;">
          <span class="stars" style="color:var(--accent);">${"\u2605".repeat(Math.floor(product.rating))}</span>
          <span class="count">(${product.reviews} reviews)</span>
        </div>
        <div class="product-detail-price">
          Rs. ${product.price.toLocaleString()} ${originalHTML}
          ${discount > 0 ? '<span class="badge badge-sale">' + discount + '% OFF</span>' : ''}
        </div>
        <p class="product-detail-desc">${product.description}</p>
        ${sizesHTML}
        <div class="qty-selector">
          <h4>Quantity</h4>
          <div class="qty-controls">
            <button id="qtyMinus">\u2212</button>
            <span id="qtyValue">1</span>
            <button id="qtyPlus">+</button>
          </div>
        </div>
        <div class="add-to-cart-actions">
          <button class="btn btn-primary" id="addToCartDetail"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
          <button class="btn btn-outline"><i class="fas fa-heart"></i></button>
        </div>
      </div>
    </div>
    <section class="section"><h2 class="section-title">Related <span>Products</span></h2><p class="section-subtitle">You might also like</p><div class="products-grid" id="relatedProducts"></div></section>`;

    // Qty controls
    let qty = 1;
    document.getElementById("qtyMinus").onclick = () => { if (qty > 1) { qty--; document.getElementById("qtyValue").textContent = qty; } };
    document.getElementById("qtyPlus").onclick = () => { qty++; document.getElementById("qtyValue").textContent = qty; };
    document.getElementById("addToCartDetail").onclick = () => addToCart(product.id, qty);

    // Related products
    const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    document.getElementById("relatedProducts").innerHTML = related.map(renderProductCard).join("");
    initScrollAnimations();
}

// ========== Contact Form Email ==========
function sendContactEmail(e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value || 'Inquiry from F3Style.pk';
    const message = document.getElementById('contactMessage').value;
    const body = "Name: " + name + "%0AEmail: " + email + "%0A%0A" + encodeURIComponent(message);
    window.location.href = "mailto:faheemf3f@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + body;
    showToast('Opening your email app...');
}

// ========== Toast ==========
function showToast(msg) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toastMsg");
    if (!toast) return;
    toastMsg.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

// ========== Navbar Scroll ==========
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ========== Mobile Menu ==========
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");
if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => mobileNav.classList.toggle("open"));
}

// ========== Search ==========
const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const searchClose = document.getElementById("searchClose");
if (searchBtn && searchOverlay) {
    searchBtn.addEventListener("click", () => { searchOverlay.classList.add("open"); document.getElementById("searchInput").focus(); });
    searchClose.addEventListener("click", () => searchOverlay.classList.remove("open"));
    searchOverlay.addEventListener("click", (e) => { if (e.target === searchOverlay) searchOverlay.classList.remove("open"); });
    document.getElementById("searchInput").addEventListener("keydown", (e) => {
        if (e.key === "Enter") { window.location.href = "products.html?search=" + e.target.value; }
    });
}

// ========== Cart Drawer ==========
const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartCloseBtn = document.getElementById("cartClose");
function openCart() { cartDrawer.classList.add("open"); cartOverlay.classList.add("open"); }
function closeCart() { cartDrawer.classList.remove("open"); cartOverlay.classList.remove("open"); }
if (cartBtn) cartBtn.addEventListener("click", openCart);
if (cartCloseBtn) cartCloseBtn.addEventListener("click", closeCart);
if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

// ========== Scroll Animations ==========
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll(".fade-up:not(.visible)").forEach(el => observer.observe(el));
}

// ========== Testimonials Auto-Scroll ==========
function initTestimonialsSlider() {
    const slider = document.querySelector(".testimonials-slider");
    if (!slider) return;
    let scrollAmount = 0;
    const cardWidth = 230; // card width + gap

    setInterval(() => {
        scrollAmount += cardWidth;
        if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
            scrollAmount = 0;
        }
        slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 1500);

    // Pause on hover
    slider.addEventListener("mouseenter", () => slider.dataset.paused = "true");
    slider.addEventListener("mouseleave", () => slider.dataset.paused = "false");
}

// ========== Init ==========
document.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
    renderFeaturedProducts();
    renderShopProducts();
    renderProductDetail();
    initScrollAnimations();
    initTestimonialsSlider();
});
