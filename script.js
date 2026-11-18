

const STORE = {
    products: "easyshop_products_v7",
    cart: "easyshop_cart",
    favorites: "easyshop_favorites",
    ratings: "easyshop_ratings",
    messages: "easyshop_messages",
    users: "easyshop_users",
    session: "easyshop_session",
    orders: "easyshop_orders",
    theme: "easyshop_theme",
    rememberedEmail: "easyshop_remember_email"
};



const defaultProducts = [
   
    {id:1, name:"Samsung Galaxy", category:"هواتف", price:799, oldPrice:899, image:"images/1.png", desc:"هاتف ذكي بتصميم عصري وشاشة واضحة للاستخدام اليومي.", featured:true},
    {id:2, name:"Samsung Galaxy A", category:"هواتف", price:899, oldPrice:999, image:"images/2.png", desc:"هاتف عملي بأداء متوازن وتصميم أنيق.", featured:true},
    {id:3, name:"Galaxy A Series", category:"هواتف", price:1099, oldPrice:1199, image:"images/3.jpg", desc:"هاتف مناسب للتصفح والتصوير والتطبيقات اليومية.", featured:false},
    {id:4, name:"Galaxy Note", category:"هواتف", price:1499, oldPrice:1699, image:"images/4.jpeg", desc:"هاتف بشاشة كبيرة وأداء سريع وتصميم أنيق.", featured:false},
    {id:5, name:"Samsung Galaxy S23 Ultra", category:"هواتف", price:3199, oldPrice:3499, image:"images/5.jpeg", desc:"هاتف متقدم بكاميرات متعددة وشاشة عالية الجودة.", featured:true},
    {id:6, name:"Samsung Galaxy S20 FE", category:"هواتف", price:1599, oldPrice:1799, image:"images/6.jpeg", desc:"هاتف سريع بشاشة ممتازة ومناسب للاستخدام اليومي.", featured:true},
    {id:7, name:"Smartphone Gold", category:"هواتف", price:749, oldPrice:849, image:"images/7.jpeg", desc:"هاتف اقتصادي بتصميم أنيق ومواصفات عملية.", featured:false},
    {id:8, name:"Smartphone Classic", category:"هواتف", price:799, oldPrice:899, image:"images/8.jpeg", desc:"هاتف عملي للمكالمات والتطبيقات والتصفح.", featured:false},
    {id:9, name:"iPhone", category:"هواتف", price:2299, oldPrice:2499, image:"images/9.jpeg", desc:"هاتف سريع بتصميم مميز وكاميرا مناسبة للتصوير.", featured:false},
    {id:10, name:"Smartphone Pro", category:"هواتف", price:1199, oldPrice:1349, image:"images/10.jpg", desc:"هاتف حديث مناسب للعمل والترفيه.", featured:false},
    {id:11, name:"Smartphone Outdoor", category:"هواتف", price:999, oldPrice:1099, image:"images/11.jpeg", desc:"هاتف عملي مناسب للاستخدام اليومي.", featured:false},

    
    {id:12, name:"Smart Watch Orange", category:"ساعات", price:249, oldPrice:299, image:"images/12.jpg", desc:"ساعة ذكية لمتابعة النشاط واستقبال التنبيهات.", featured:true},
    {id:13, name:"Sport Watch Orange", category:"ساعات", price:279, oldPrice:329, image:"images/13.jpeg", desc:"ساعة رياضية بتصميم مميز للاستخدام اليومي.", featured:false},
    {id:14, name:"Smart Band", category:"ساعات", price:99, oldPrice:129, image:"images/14.jpeg", desc:"سوار ذكي خفيف لمتابعة النشاط والوقت.", featured:false},
    {id:15, name:"Smart Watch Classic", category:"ساعات", price:229, oldPrice:279, image:"images/15.jpeg", desc:"ساعة ذكية بتصميم كلاسيكي وحزام مريح.", featured:false},
    {id:16, name:"Smart Watch Black", category:"ساعات", price:199, oldPrice:239, image:"images/16.jpeg", desc:"ساعة ذكية باللون الأسود وشاشة واضحة.", featured:false},
    {id:17, name:"Smart Watch Rose", category:"ساعات", price:219, oldPrice:269, image:"images/17.jpeg", desc:"ساعة ذكية خفيفة بتصميم أنيق.", featured:false},
    {id:18, name:"Sport Watch Pro", category:"ساعات", price:299, oldPrice:349, image:"images/18.jpeg", desc:"ساعة مناسبة للتمارين ومتابعة النشاط اليومي.", featured:false},
    {id:19, name:"Fitness Watch", category:"ساعات", price:319, oldPrice:369, image:"images/19.jpeg", desc:"ساعة رياضية بشاشة دائرية وعدة أوضاع للنشاط.", featured:false},
    {id:20, name:"Smart Watch White", category:"ساعات", price:289, oldPrice:329, image:"images/20.jpeg", desc:"ساعة ذكية بتصميم فاتح وشاشة واضحة.", featured:false},
    {id:21, name:"Multi Sport Watch", category:"ساعات", price:349, oldPrice:399, image:"images/21.jpeg", desc:"ساعة متعددة الاستخدامات للعمل والرياضة.", featured:true},

    
    {id:22, name:"Wireless Headphones", category:"سماعات", price:229, oldPrice:279, image:"images/22.jpeg", desc:"سماعة رأس لاسلكية مريحة بصوت واضح.", featured:true},
    {id:23, name:"Bluetooth Neckband", category:"سماعات", price:89, oldPrice:119, image:"images/23.jpeg", desc:"سماعة بلوتوث خفيفة للمكالمات والموسيقى.", featured:false},
    {id:24, name:"Sport Bluetooth", category:"سماعات", price:109, oldPrice:139, image:"images/24.jpeg", desc:"سماعة لاسلكية مناسبة للحركة والرياضة.", featured:false},
    {id:25, name:"Wireless Headset Black", category:"سماعات", price:179, oldPrice:219, image:"images/25.jpeg", desc:"سماعة رأس لاسلكية بتصميم مريح.", featured:false},
    {id:26, name:"TWS Earbuds", category:"سماعات", price:159, oldPrice:199, image:"images/26.jpeg", desc:"سماعات أذن لاسلكية مع علبة للشحن.", featured:true},
    {id:27, name:"Wireless Headphones White", category:"سماعات", price:219, oldPrice:259, image:"images/27.jpeg", desc:"سماعة رأس لاسلكية بتصميم أنيق.", featured:false},
    {id:28, name:"Premium Headphones", category:"سماعات", price:269, oldPrice:319, image:"images/28.jpeg", desc:"سماعة رأس بجودة صوت واضحة ومريحة.", featured:false},
    {id:29, name:"Black Headphones", category:"سماعات", price:149, oldPrice:189, image:"images/29.jpeg", desc:"سماعة لاسلكية للموسيقى والمكالمات.", featured:false},
    {id:30, name:"Wireless Headset", category:"سماعات", price:139, oldPrice:169, image:"images/30.jpeg", desc:"سماعة عملية وخفيفة للاستخدام اليومي.", featured:false},
    {id:31, name:"Mini Earbuds", category:"سماعات", price:129, oldPrice:159, image:"images/31.jpeg", desc:"سماعات أذن صغيرة مع علبة للشحن.", featured:false},
    {id:32, name:"Air Earbuds", category:"سماعات", price:169, oldPrice:209, image:"images/32.jpeg", desc:"سماعات لاسلكية خفيفة وسهلة الاستخدام.", featured:false},
    {id:33, name:"Gaming Earbuds", category:"سماعات", price:189, oldPrice:229, image:"images/33.jpeg", desc:"سماعات لاسلكية مناسبة للألعاب والموسيقى.", featured:true},

    
    {id:34, name:"HP Laptop Silver", category:"حواسيب", price:2099, oldPrice:2299, image:"images/34.jpeg", desc:"حاسوب محمول مناسب للدراسة والعمل.", featured:true},
    {id:35, name:"Gaming Laptop", category:"حواسيب", price:3899, oldPrice:4299, image:"images/35.jpeg", desc:"حاسوب محمول بأداء قوي للألعاب والبرامج الثقيلة.", featured:true},
    {id:36, name:"HP Laptop Red", category:"حواسيب", price:2299, oldPrice:2499, image:"images/36.jpeg", desc:"حاسوب محمول بتصميم مميز للاستخدام اليومي.", featured:false},
    {id:37, name:"Business Laptop", category:"حواسيب", price:2699, oldPrice:2949, image:"images/37.jpeg", desc:"حاسوب مناسب للعمل والبرامج المكتبية.", featured:false},
    {id:38, name:"Performance Laptop", category:"حواسيب", price:3199, oldPrice:3499, image:"images/38.jpeg", desc:"حاسوب سريع للمهام المتعددة والعمل.", featured:false},
    {id:39, name:"Silver Laptop Pro", category:"حواسيب", price:2899, oldPrice:3199, image:"images/39.jpeg", desc:"حاسوب محمول بتصميم بسيط وأداء جيد.", featured:false},
    {id:40, name:"HP Laptop Gold", category:"حواسيب", price:2599, oldPrice:2849, image:"images/40.jpeg", desc:"حاسوب أنيق مناسب للعمل والدراسة.", featured:false},
    {id:41, name:"Modern Laptop", category:"حواسيب", price:2399, oldPrice:2699, image:"images/41.jpeg", desc:"حاسوب عملي للاستخدام اليومي والدراسة.", featured:false},
    {id:42, name:"Gaming Laptop Red", category:"حواسيب", price:3999, oldPrice:4399, image:"images/42.jpeg", desc:"حاسوب ألعاب بأداء قوي وتصميم رياضي.", featured:false},
    {id:43, name:"ROG Gaming Laptop", category:"حواسيب", price:4499, oldPrice:4899, image:"images/43.jpeg", desc:"حاسوب ألعاب عالي الأداء للمهام الثقيلة.", featured:true},
    {id:44, name:"Classic Laptop", category:"حواسيب", price:1899, oldPrice:2099, image:"images/44.jpeg", desc:"حاسوب اقتصادي مناسب للدراسة والتصفح.", featured:false},
    {id:45, name:"Laptop Rose Edition", category:"حواسيب", price:2199, oldPrice:2449, image:"images/45.jpeg", desc:"حاسوب محمول بتصميم أنيق وخفيف.", featured:false}
];

function read(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : JSON.parse(value);
    } catch (error) {
        return fallback;
    }
}

function write(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Storage write error:", error);
    }
}

function getProducts() {
    let products = read(STORE.products, null);
    if (!Array.isArray(products) || products.length === 0) {
        products = defaultProducts;
        write(STORE.products, products);
    }
    return products;
}


function qs(selector) { return document.querySelector(selector); }
function qsa(selector) { return document.querySelectorAll(selector); }
function money(value) { return Number(value).toFixed(2) + " ر.س"; }

function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    })[char]);
}

function toast(message) {
    const element = qs("#toast");
    if (!element) return;
    element.textContent = message;
    element.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => { element.classList.remove("show"); }, 2200);
}



function getSession() { return read(STORE.session, null); }

function currentUser() {
    const session = getSession();
    if (!session || !session.userId) return null;
    const users = read(STORE.users, []);
    return users.find(user => user && user.id === session.userId) || null;
}

function logout() {
    localStorage.removeItem(STORE.session);
    location.href = "index.html";
}


function initNavigation() {
    const menu = qs("#menuBtn");
    const links = qs("#navLinks");
    if (!menu || !links) return;
    menu.addEventListener("click", () => { links.classList.toggle("open"); });
}

function initTheme() {
    const saved = localStorage.getItem(STORE.theme);
    if (saved === "dark") document.body.classList.add("dark");
    const button = qs("#themeBtn");
    if (!button) return;

    function updateIcon() {
        button.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    }
    updateIcon();

    button.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const dark = document.body.classList.contains("dark");
        localStorage.setItem(STORE.theme, dark ? "dark" : "light");
        updateIcon();
    });
}

function initClock() {
    const clock = qs("#clock");
    if (!clock) return;
    function update() {
        const date = new Date();
        clock.textContent = date.toLocaleDateString("ar-SA") + " | " + date.toLocaleTimeString("ar-SA");
    }
    update();
    setInterval(update, 1000);
}

function initBackTop() {
    const button = qs("#backTop");
    if (!button) return;
    window.addEventListener("scroll", () => {
        button.classList.toggle("show", window.scrollY > 300);
    });
    button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}



function getCart() { return read(STORE.cart, []); }
function setCart(cart) { write(STORE.cart, cart); }

function addToCart(productId, quantity = 1) {
    const product = getProducts().find(p => p.id === productId);
    if (!product) {
        toast("المنتج غير موجود");
        return;
    }
    const cart = getCart();
    const item = cart.find(i => i.productId === productId);
    if (item) {
        item.qty += quantity;
    } else {
        cart.push({ productId: productId, qty: quantity });
    }
    setCart(cart);
    updateCartBadge();
    toast("تمت إضافة المنتج إلى السلة");
}

function updateCartBadge() {
    const badge = qs("#cartCount");
    if (!badge) return;
    badge.textContent = getCart().reduce((total, item) => total + (item.qty || 0), 0);
}

function cartDetailed() {
    const products = getProducts();
    return getCart().map(item => {
        const product = products.find(p => p.id === item.productId);
        if (!product) return null;
        return { ...product, qty: item.qty };
    }).filter(Boolean);
}



function getFavorites() { return read(STORE.favorites, []); }

function toggleFavorite(productId) {
    let favorites = getFavorites();
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
        toast("تم حذف المنتج من المفضلة");
    } else {
        favorites.push(productId);
        toast("تمت إضافة المنتج إلى المفضلة");
    }
    write(STORE.favorites, favorites);
    if (qs("#productsGrid")) renderProductsPage();
    if (qs("#featuredGrid")) initHome();
}


function getAverageRating(productId) {
    const ratings = read(STORE.ratings, {});
    const list = ratings[productId] || [];
    if (!list.length) return 0;
    return list.reduce((sum, value) => sum + value, 0) / list.length;
}

function stars(value) {
    const full = Math.round(value);
    return "★".repeat(full) + "☆".repeat(5 - full);
}

function rateProduct(productId, value) {
    const ratings = read(STORE.ratings, {});
    ratings[productId] = ratings[productId] || [];
    ratings[productId].push(value);
    write(STORE.ratings, ratings);
    closeModal();
    toast("تم تسجيل تقييمك");
    if (qs("#productsGrid")) renderProductsPage();
}



function productCard(product) {
    const rating = getAverageRating(product.id);
    const favorite = getFavorites().includes(product.id);
    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${esc(product.name)}" loading="lazy">
            ${product.oldPrice > product.price ? `<span class="discount">خصم</span>` : ""}
        </div>
        <div class="product-body">
            <span class="category">${esc(product.category)}</span>
            <h3>${esc(product.name)}</h3>
            <div class="product-rating">
                <span class="stars">${stars(rating)}</span>
                <small>${rating.toFixed(1)}</small>
            </div>
            <div class="price">
                ${money(product.price)}
                ${product.oldPrice ? `<span class="old-price">${money(product.oldPrice)}</span>` : ""}
            </div>
            <div class="card-actions">
                <button class="btn small" type="button" data-add="${product.id}">أضف للسلة</button>
                <button class="btn secondary small" type="button" data-view="${product.id}">التفاصيل</button>
            </div>
            <button class="favorite-btn ${favorite ? "active" : ""}" type="button" data-favorite="${product.id}">
                ${favorite ? "♥" : "♡"} المفضلة
            </button>
        </div>
    `;
    return card;
}

function renderProducts(products, container) {
    if (!container) return;
    container.innerHTML = "";
    if (!products.length) {
        container.innerHTML = `<div class="empty products-empty">لا توجد منتجات مطابقة.</div>`;
        return;
    }
    products.forEach(product => { container.appendChild(productCard(product)); });
    bindProductButtons(container);
}

function bindProductButtons(container) {
    container.querySelectorAll("[data-add]").forEach(button => {
        button.addEventListener("click", () => addToCart(Number(button.dataset.add)));
    });
    container.querySelectorAll("[data-view]").forEach(button => {
        button.addEventListener("click", () => openProductModal(Number(button.dataset.view)));
    });
    container.querySelectorAll("[data-favorite]").forEach(button => {
        button.addEventListener("click", () => toggleFavorite(Number(button.dataset.favorite)));
    });
}



function initHome() {
    const grid = qs("#featuredGrid");
    if (!grid) return;
    const products = getProducts().filter(product => product.featured).slice(0, 8);
    renderProducts(products, grid);
}

function initProductsPage() {
    const grid = qs("#productsGrid");
    if (!grid) return;

    const categoryFilter = qs("#categoryFilter");
    if (categoryFilter) {
        const categories = ["الكل", ...new Set(getProducts().map(p => p.category))];
        categoryFilter.innerHTML = "";
        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    qs("#searchInput")?.addEventListener("input", renderProductsPage);
    qs("#categoryFilter")?.addEventListener("change", renderProductsPage);
    qs("#sortSelect")?.addEventListener("change", renderProductsPage);
    renderProductsPage();
}

function renderProductsPage() {
    const grid = qs("#productsGrid");
    if (!grid) return;

    let products = [...getProducts()];
    const search = qs("#searchInput")?.value.trim().toLowerCase() || "";
    const category = qs("#categoryFilter")?.value || "الكل";
    const sort = qs("#sortSelect")?.value || "";

    if (search) {
        products = products.filter(p =>
            (p.name || "").toLowerCase().includes(search) ||
            (p.category || "").toLowerCase().includes(search) ||
            (p.desc || "").toLowerCase().includes(search)
        );
    }
    if (category !== "الكل") products = products.filter(p => p.category === category);
    if (sort === "low") products.sort((a, b) => a.price - b.price);
    if (sort === "high") products.sort((a, b) => b.price - a.price);
    if (sort === "name") products.sort((a, b) => (a.name || "").localeCompare(b.name || "", "ar"));

    renderProducts(products, grid);

    const count = qs("#resultCount");
    if (count) count.textContent = `${products.length} منتج`;
}



function openProductModal(productId) {
    const product = getProducts().find(p => p.id === productId);
    const modal = qs("#productModal");
    const content = qs("#modalContent");
    if (!product || !modal || !content) return;

    const rating = getAverageRating(product.id);
    content.innerHTML = `
        <div class="modal-product">
            <div class="modal-image">
                <img src="${product.image}" alt="${esc(product.name)}">
            </div>
            <div>
                <span class="category">${esc(product.category)}</span>
                <h2>${esc(product.name)}</h2>
                <p class="product-description">${esc(product.desc)}</p>
                <div class="price">${money(product.price)}</div>
                <div><span class="stars">${stars(rating)}</span> ${rating.toFixed(1)}</div>
                <div class="rating-buttons">
                    ${[1, 2, 3, 4, 5].map(num => `<button type="button" data-rate="${num}">★</button>`).join("")}
                </div>
                <button class="btn" type="button" id="modalAdd">أضف للسلة</button>
            </div>
        </div>
    `;

    modal.classList.add("open");
    content.querySelector("#modalAdd")?.addEventListener("click", () => addToCart(product.id));
    content.querySelectorAll("[data-rate]").forEach(button => {
        button.addEventListener("click", () => rateProduct(product.id, Number(button.dataset.rate)));
    });
}

function closeModal() { qs("#productModal")?.classList.remove("open"); }

function initModal() {
    qs("#closeModal")?.addEventListener("click", closeModal);
    qs("#productModal")?.addEventListener("click", event => {
        if (event.target.id === "productModal") closeModal();
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeModal();
    });
}


function initCartPage() {
    const list = qs("#cartList");
    if (!list) return;

    const empty = qs("#cartEmpty");
    const summary = qs("#cartSummary");

    function renderCart() {
        const items = cartDetailed();
        if (!items.length) {
            list.innerHTML = "";
            if (empty) empty.style.display = "block";
            if (summary) summary.style.display = "none";
            updateCartBadge();
            return;
        }

        if (empty) empty.style.display = "none";
        if (summary) summary.style.display = "block";

        list.innerHTML = `
            <div class="cart-table-wrapper">
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th>المنتج</th>
                            <th>السعر</th>
                            <th>الكمية</th>
                            <th>الإجمالي</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${items.map(item => `
                            <tr>
                                <td>
                                    <div class="cart-product">
                                        <img src="${item.image}" alt="${esc(item.name)}">
                                        <div>
                                            <strong>${esc(item.name)}</strong>
                                            <small>${esc(item.category)}</small>
                                        </div>
                                    </div>
                                </td>
                                <td>${money(item.price)}</td>
                                <td>
                                    <div class="qty">
                                        <button type="button" data-minus="${item.id}">−</button>
                                        <span>${item.qty}</span>
                                        <button type="button" data-plus="${item.id}">+</button>
                                    </div>
                                </td>
                                <td>${money(item.price * item.qty)}</td>
                                <td><button type="button" class="btn danger small" data-remove="${item.id}">حذف</button></td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `;

        const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
        const shipping = subtotal >= 500 ? 0 : 25;
        const total = subtotal + shipping;

        if (qs("#subTotal")) qs("#subTotal").textContent = money(subtotal);
        if (qs("#shipping")) qs("#shipping").textContent = shipping === 0 ? "مجاني" : money(shipping);
        if (qs("#grandTotal")) qs("#grandTotal").textContent = money(total);

        list.querySelectorAll("[data-plus]").forEach(b => b.addEventListener("click", () => changeQuantity(Number(b.dataset.plus), 1)));
        list.querySelectorAll("[data-minus]").forEach(b => b.addEventListener("click", () => changeQuantity(Number(b.dataset.minus), -1)));
        list.querySelectorAll("[data-remove]").forEach(b => b.addEventListener("click", () => removeItem(Number(b.dataset.remove))));

        updateCartBadge();
    }

    function changeQuantity(productId, amount) {
        let cart = getCart();
        const item = cart.find(i => i.productId === productId);
        if (!item) return;
        item.qty += amount;
        if (item.qty <= 0) cart = cart.filter(i => i.productId !== productId);
        setCart(cart);
        renderCart();
    }

    function removeItem(productId) {
        setCart(getCart().filter(item => item.productId !== productId));
        renderCart();
        toast("تم حذف المنتج من السلة");
    }

    qs("#clearCart")?.addEventListener("click", () => {
        setCart([]);
        renderCart();
        toast("تم تفريغ السلة");
    });

    qs("#checkoutBtn")?.addEventListener("click", () => {
        if (!getCart().length) {
            toast("السلة فارغة");
            return;
        }
        location.href = "checkout.html";
    });

    renderCart();
}


function initContact() {
    const form = qs("#contactForm");
    if (!form) return;
    const messageBox = qs("#formMessage");

    function message(text, success = false) {
        if (!messageBox) return;
        messageBox.textContent = text;
        messageBox.className = "form-message " + (success ? "ok" : "bad");
    }

    form.addEventListener("submit", event => {
        event.preventDefault();
        const name = qs("#contactName")?.value.trim() || "";
        const email = qs("#contactEmail")?.value.trim() || "";
        const phone = qs("#contactPhone")?.value.replace(/\s/g, "") || "";
        const subject = qs("#contactSubject")?.value || "";
        const text = qs("#contactMessage")?.value.trim() || "";

        if (name.length < 3) return message("يرجى إدخال الاسم بشكل صحيح.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return message("البريد الإلكتروني غير صحيح.");
        if (phone.length < 7) return message("رقم الهاتف غير صحيح.");
        if (!subject) return message("يرجى اختيار موضوع الرسالة.");
        if (text.length < 10) return message("يرجى كتابة تفاصيل أكثر في الرسالة.");

        const messages = read(STORE.messages, []);
        messages.unshift({
            id: "MSG-" + Date.now().toString().slice(-8),
            name, email, phone, subject, message: text,
            createdAt: new Date().toISOString(), status: "جديدة"
        });

        write(STORE.messages, messages);
        form.reset();
        message("تم إرسال رسالتك بنجاح.", true);
        toast("تم إرسال الرسالة");
    });
}


function initLogin() {
    const form = qs("#loginForm");
    if (!form) return;

    const emailInput = qs("#loginEmail");
    const passwordInput = qs("#loginPassword");
    const toggle = qs("#toggleLoginPassword");
    const remember = qs("#rememberMe");
    const messageBox = qs("#formMessage");

    function message(text, success = false) {
        if (!messageBox) return;
        messageBox.textContent = text;
        messageBox.className = "form-message " + (success ? "ok" : "bad");
    }

    toggle?.addEventListener("click", () => {
        if (!passwordInput) return;
        const hidden = passwordInput.type === "password";
        passwordInput.type = hidden ? "text" : "password";
        toggle.textContent = hidden ? "🙈" : "👁";
    });

    const savedEmail = localStorage.getItem(STORE.rememberedEmail);
    if (savedEmail && emailInput) {
        emailInput.value = savedEmail;
        if (remember) remember.checked = true;
    }

    form.addEventListener("submit", event => {
        event.preventDefault();
        const email = emailInput?.value.trim().toLowerCase() || "";
        const password = passwordInput?.value || "";

        if (!email || !password) return message("أدخل البريد الإلكتروني وكلمة المرور.");

        const users = read(STORE.users, []);
        const user = users.find(u => u && (u.email || "").toLowerCase() === email && u.password === password);

        if (!user) return message("البريد الإلكتروني أو كلمة المرور غير صحيحة.");

        write(STORE.session, { userId: user.id });

        if (remember?.checked) {
            localStorage.setItem(STORE.rememberedEmail, email);
        } else {
            localStorage.removeItem(STORE.rememberedEmail);
        }

        message("تم تسجيل الدخول بنجاح.", true);
        toast("مرحباً " + user.name);
        setTimeout(() => { location.href = "index.html"; }, 700);
    });
}


function initRegister() {
    const form = qs("#registerForm");
    if (!form) return;

    const nameInput = qs("#regName");
    const emailInput = qs("#regEmail");
    const phoneInput = qs("#regPhone");
    const passwordInput = qs("#regPassword");
    const confirmInput = qs("#regConfirm");
    const agreeInput = qs("#regAgree");
    const messageBox = qs("#formMessage");

    const togglePass = qs("#toggleRegPassword");
    const toggleConfirm = qs("#toggleRegConfirm");

    function message(text, success = false) {
        if (!messageBox) return;
        messageBox.textContent = text;
        messageBox.className = "form-message " + (success ? "ok" : "bad");
    }

    togglePass?.addEventListener("click", () => {
        if (!passwordInput) return;
        const hidden = passwordInput.type === "password";
        passwordInput.type = hidden ? "text" : "password";
        togglePass.textContent = hidden ? "🙈" : "👁";
    });

    toggleConfirm?.addEventListener("click", () => {
        if (!confirmInput) return;
        const hidden = confirmInput.type === "password";
        confirmInput.type = hidden ? "text" : "password";
        toggleConfirm.textContent = hidden ? "🙈" : "👁";
    });

    form.addEventListener("submit", event => {
        event.preventDefault();

        const name = nameInput?.value.trim() || "";
        const email = emailInput?.value.trim().toLowerCase() || "";
        const phone = phoneInput?.value.replace(/\s/g, "") || "";
        const password = passwordInput?.value || "";
        const confirm = confirmInput?.value || "";

        if (name.length < 3) return message("يرجى إدخال الاسم الكامل بشكل صحيح.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return message("البريد الإلكتروني غير صحيح.");
        if (phone.length < 7) return message("يرجى إدخال رقم هاتف صحيح.");
        if (password.length < 6) return message("كلمة المرور يجب أن تكون 6 أحرف على الأقل.");
        if (password !== confirm) return message("كلمتا المرور غير متطابقتين.");
        if (agreeInput && !agreeInput.checked) return message("يجب الموافقة على الشروط والأحكام.");

        const users = read(STORE.users, []);
        if (users.some(u => u && (u.email || "").toLowerCase() === email)) {
            return message("البريد الإلكتروني مُسجّل بالفعل.");
        }

        const newUser = {
            id: "USR-" + Date.now().toString().slice(-8),
            name, email, phone, password,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        write(STORE.users, users);

        
        write(STORE.session, { userId: newUser.id });

        message("تم إنشاء الحساب بنجاح! جاري تحويلك...", true);
        toast("مرحباً بك " + name);

        setTimeout(() => { location.href = "index.html"; }, 800);
    });
}



function initUserUI() {
    const user = currentUser();
    const loginLink = qs("#loginNav");

    if (user && loginLink) {
        loginLink.textContent = user.name;
        loginLink.href = "index.html";
        loginLink.title = "أهلاً بك " + user.name;
    }

    qs("#logoutBtn")?.addEventListener("click", logout);
    updateCartBadge();
}


document.addEventListener("DOMContentLoaded", () => {
    getProducts();
    initNavigation();
    initTheme();
    initClock();
    initBackTop();
    initHome();
    initProductsPage();
    initCartPage();
    initContact();
    initLogin();
    initRegister(); 
    initUserUI();
    initModal();
    updateCartBadge();
});