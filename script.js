// وظائف إدارة الاتصال
document.querySelector('.contact-btn').addEventListener('click', () => {
    const contactBox = document.getElementById('contactBox');
    contactBox.style.display = contactBox.style.display === 'block' ? 'none' : 'block';
});

// وظيفة البحث
document.querySelector('.search-btn').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        product.style.display = productName.includes(searchTerm) ? 'block' : 'none';
    });
});

// نسخ المعلومات
document.querySelectorAll('.copyable').forEach(item => {
    item.addEventListener('click', (e) => {
        const text = e.currentTarget.dataset.text;
        navigator.clipboard.writeText(text).then(() => {
            alert(تم نسخ: ${text});
        });
    });
});

// تحميل المنتجات الديناميكي
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            window.location.href = card.dataset.productLink;
        });
    });
});

// تأثيرات التمرير
window.addEventListener('scroll', () => {
    document.querySelectorAll('.product-card').forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight * 0.9) {
            card.style.opacity = '1';
        }
    });
});
