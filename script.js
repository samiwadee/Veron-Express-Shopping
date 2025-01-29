// تهيئة مكتبة AOS للتأثيرات
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// تحريك GSAP لشريط التنقل
gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});

// فتح/إغلاق نموذج الاتصال
const modal = document.getElementById('contactModal');
document.querySelector('.nav-links li:last-child a').addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "block";
});

document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = "none";
});

// تأثير التمرير اللانهائي
window.addEventListener('scroll', () => {
    document.querySelectorAll('.product-card').forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        if (cardPosition < window.innerHeight * 0.75) {
            card.classList.add('active');
        }
    });
});
