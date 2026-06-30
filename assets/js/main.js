/* 
   ملف الجافاسكريبت المحسن - متجر عَبق الفخامة
   تم تحسين الرسائل لتصبح أكثر رقياً وجاذبية وتجاوباً
*/

// مصفوفة المنتجات (تم الحفاظ على الأسماء والروابط كما هي)
const products = [
    // عطور رجالية (10)
    { id: 1, name: "عطر رويال بلو", category: "men", price: 450, image: "assets/images/men/men_1.jpg", description: "عطر خشبي فواح للمناسبات الرسمية" },
    { id: 2, name: "عطر الصحراء الذهبي", category: "men", price: 520, image: "assets/images/men/men_2.jpg", description: "مزيج من العود والزعفران الأصيل" },
    { id: 3, name: "عطر بلاك أونيكس", category: "men", price: 380, image: "assets/images/men/men_3.webp", description: "عطر ليلي غامض وجذاب" },
    { id: 4, name: "عطر نسيم البحر", category: "men", price: 290, image: "assets/images/men/men_4.jpg", description: "عطر صيفي منعش برائحة الحمضيات" },
    { id: 5, name: "عطر ليذر بريميوم", category: "men", price: 600, image: "assets/images/men/men_5.webp", description: "عطر جلود فاخر وقوي الثبات" },
    { id: 6, name: "عطر عود ملكي", category: "men", price: 750, image: "assets/images/men/men_6.webp",description: "أفخر أنواع العود الهندي" },
    { id: 7, name: "عطر فيكتوريا", category: "men", price: 410, image: "assets/images/men/men_7.jpg", description: "عطر كلاسيكي للرجل العصري" },
    { id: 8, name: "عطر سبورت لايف", category: "men", price: 250, image: "assets/images/men/men_8.jpg", description: "عطر رياضي مفعم بالحيوية" },
    { id: 9, name: "عطر توباكو بليند", category: "men", price: 480, image: "assets/images/men/men_9.jpg", description: "مزيج التبغ والعسل الدافئ" },
    { id: 10, name: "عطر مسك الغزال", category: "men", price: 350, image: "assets/images/men/men_10.jpg", description: "رائحة المسك النقي والأنيق" },
    { id: 11, name: "عطر رويال بلو", category: "men", price: 450, image: "assets/images/men/men_11.jpg", description: "عطر خشبي فواح للمناسبات الرسمية" },
    { id: 12, name: "عطر الصحراء الذهبي", category: "men", price: 520, image: "assets/images/men/men_12.jpg", description: "مزيج من العود والزعفران الأصيل" },
    { id: 13, name: "عطر بلاك أونيكس", category: "men", price: 380, image: "assets/images/men/men_13.jpg", description: "عطر ليلي غامض وجذاب" },
    { id: 14, name: "عطر نسيم البحر", category: "men", price: 290, image: "assets/images/men/men_14.jpg", description: "عطر صيفي منعش برائحة الحمضيات" },
    { id: 15, name: "عطر ليذر بريميوم", category: "men", price: 600, image: "assets/images/men/men_15.png", description: "عطر جلود فاخر وقوي الثبات" },
    { id: 16, name: "عطر عود ملكي", category: "men", price: 750, image: "assets/images/men/men_16.jpg",description: "أفخر أنواع العود الهندي" },
    { id: 17, name: "عطر فيكتوريا", category: "men", price: 410, image: "assets/images/men/men_17.jpeg", description: "عطر كلاسيكي للرجل العصري" },
    { id: 18, name: "عطر سبورت لايف", category: "men", price: 250, image: "assets/images/men/men_18.jpg", description: "عطر رياضي مفعم بالحيوية" },
    { id: 19, name: "عطر توباكو بليند", category: "men", price: 480, image: "assets/images/men/men_19.jpg", description: "مزيج التبغ والعسل الدافئ" },
    { id: 20, name: "عطر مسك الغزال", category: "men", price: 350, image: "assets/images/men/men_20.png", description: "رائحة المسك النقي والأنيق" },
    { id: 21, name: "عطر الصحراء الذهبي", category: "men", price: 520, image: "assets/images/men/men_12.jpg", description: "مزيج من العود والزعفران الأصيل" },

    // عطور نسائية (10)
    { id: 22, name: "عطر روز فيلفت", category: "women", price: 430, image: "assets/images/women/women_1.jpg", description: "رائحة الورد الجوري والياسمين" },
    { id: 23, name: "عطر ليدي جولد", category: "women", price: 550, image: "assets/images/women/women_2.jpg", description: "عطر شرقي بلمسة عصرية" },
    { id: 34, name: "عطر بيلا فيور", category: "women", price: 390, image: "assets/images/women/women_3.jpg", description: "باقة من الزهور البيضاء المنعشة" },
    { id: 25, name: "عطر سويت فانيلا", category: "women", price: 320, image: "assets/images/women/women_4.webp", description: "رائحة الفانيلا الدافئة والكراميل" },
    { id: 26, name: "عطر نايت دريم", category: "women", price: 470, image: "assets/images/women/women_5.jpg", description: "عطر ساحر للسهرات والمناسبات" },
    { id: 27, name: "عطر أوركيد سيكرت", category: "women", price: 580, image: "assets/images/women/women_6.jpg", description: "رائحة الأوركيد النادرة والفاخرة" },
    { id: 28, name: "عطر بينك دايموند", category: "women", price: 420, image: "assets/images/women/women_7.jpg", description: "عطر أنثوي ناعم ورقيق" },
    { id: 29, name: "عطر عنبر روز", category: "women", price: 510, image: "assets/images/women/women_8.jpg", description: "مزيج العنبر والورد الدمشقي" },
    { id: 30, name: "عطر جاسمين بريز", category: "women", price: 360, image: "assets/images/women/women_9.jpg", description: "رائحة الياسمين الصباحية المنعشة" },
    { id: 31, name: "عطر رويال كوين", category: "women", price: 650, image: "assets/images/women/women_10.jpg", description: "عطر ملكي يفيض بالفخامة" },
    { id: 32, name: "عطر روز فيلفت", category: "women", price: 430, image: "assets/images/women/women_11.jpg", description: "رائحة الورد الجوري والياسمين" },
    { id: 33, name: "عطر ليدي جولد", category: "women", price: 550, image: "assets/images/women/women_12.jpg", description: "عطر شرقي بلمسة عصرية" },
    { id: 34, name: "عطر بيلا فيور", category: "women", price: 390, image: "assets/images/women/women_13.jpg", description: "باقة من الزهور البيضاء المنعشة" },
    { id: 35, name: "عطر سويت فانيلا", category: "women", price: 320, image: "assets/images/women/women_14.jpg", description: "رائحة الفانيلا الدافئة والكراميل" },
    { id: 36, name: "عطر نايت دريم", category: "women", price: 470, image: "assets/images/women/women_15.jpg", description: "عطر ساحر للسهرات والمناسبات" },
    { id: 37, name: "عطر أوركيد سيكرت", category: "women", price: 580, image: "assets/images/women/women_16.png", description: "رائحة الأوركيد النادرة والفاخرة" },
    { id: 38, name: "عطر بينك دايموند", category: "women", price: 420, image: "assets/images/women/women_17.jpeg", description: "عطر أنثوي ناعم ورقيق" },
    { id: 39, name: "عطر عنبر روز", category: "women", price: 510, image: "assets/images/women/women_18.jpg", description: "مزيج العنبر والورد الدمشقي" },
    { id: 40, name: "عطر جاسمين بريز", category: "women", price: 360, image: "assets/images/women/women_19.png", description: "رائحة الياسمين الصباحية المنعشة" },
    { id: 41, name: "عطر رويال كوين", category: "women", price: 650, image: "assets/images/women/women_20.jpg", description: "عطر ملكي يفيض بالفخامة" },
    { id: 42, name: "عطر سويت فانيلا", category: "women", price: 320, image: "assets/images/women/women_6.jpg", description: "رائحة الفانيلا الدافئة والكراميل" },

];

// تهيئة سلة المشتريات من التخزين المحلي
let cart = JSON.parse(localStorage.getItem('perfume_cart')) || [];

// نظام الرسائل المخصصة (Custom Notification System)
function showCustomMessage({ title, message, icon = '✨', type = 'alert', onConfirm = null }) {
    // إزالة أي رسالة سابقة إذا وجدت
    const existingOverlay = document.querySelector('.custom-alert-overlay');
    if (existingOverlay) existingOverlay.remove();

    const overlay = document.createElement('div');
    overlay.className = 'custom-alert-overlay';
    
    const isConfirm = type === 'confirm';
    
    overlay.innerHTML = `
        <div class="custom-alert-box">
            <div class="custom-alert-icon">${icon}</div>
            <div class="custom-alert-title">${title}</div>
            <div class="custom-alert-message">${message}</div>
            <div class="custom-alert-buttons">
                <button class="custom-alert-btn btn-confirm">${isConfirm ? 'تأكيد' : 'حسناً'}</button>
                ${isConfirm ? '<button class="custom-alert-btn btn-cancel">إلغاء</button>' : ''}
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    
    // تفعيل الظهور مع أنيميشن
    setTimeout(() => overlay.classList.add('active'), 10);

    const closeMessage = () => {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 400);
    };

    overlay.querySelector('.btn-confirm').onclick = () => {
        closeMessage();
        if (onConfirm) onConfirm();
    };

    if (isConfirm) {
        overlay.querySelector('.btn-cancel').onclick = closeMessage;
    }
}

// تحديث عدد العناصر في أيقونة السلة
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.innerText = totalItems;
    }
}

// إضافة منتج للسلة مع رسالة محسنة
function addToCart(productId, quantityInputId) {
    const quantityInput = document.getElementById(quantityInputId);
    const quantity = parseInt(quantityInput.value);

    if (!quantity || quantity <= 0) {
        showCustomMessage({
            title: "تنبيه",
            message: "لطفاً، قم بتحديد الكمية التي ترغب باقتنائها.",
            icon: "ℹ️"
        });
        return;
    }

    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    localStorage.setItem('perfume_cart', JSON.stringify(cart));
    updateCartCount();
    
    // الرسالة المحسنة 1: إضافة منتج للسلة
    showCustomMessage({
        title: "اختيار رائع!",
        message: `لقد أضفت ${quantity} من "<strong>${product.name}</strong>" إلى سلتك بنجاح. عطرٌ استثنائي يكتمل بحضورك!`,
        icon: "🛍️"
    });
}

// عند تحميل أي صفحة
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    if (document.getElementById('products-container')) {
        renderProducts(products);
    }
});

// دالة عرض المنتجات
function renderProducts(productsToDisplay) {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = '';
    
    if (productsToDisplay.length === 0) {
        container.innerHTML = '<div class="no-results">نعتذر، لم نجد عطوراً تطابق بحثك الحالي. جرب كلمات أخرى!</div>';
        return;
    }

    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">${product.price} ر.س</div>
                <div class="add-to-cart-controls">
                    <input type="number" id="qty-${product.id}" value="1" min="1">
                    <button class="btn" onclick="addToCart(${product.id}, 'qty-${product.id}')">أضف للسلة</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// خوارزمية البحث والفلترة
function filterProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;

    let filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                             product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
        
        let matchesPrice = true;
        if (priceFilter === 'low') matchesPrice = product.price < 400;
        else if (priceFilter === 'mid') matchesPrice = product.price >= 400 && product.price <= 600;
        else if (priceFilter === 'high') matchesPrice = product.price > 600;

        return matchesSearch && matchesCategory && matchesPrice;
    });

    renderProducts(filtered);
}
