document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "منتج 1", price: "50$", link: "https://example.com/product1", images: ["product1-1.jpg", "product1-2.jpg", "product1-3.jpg"] },
        { name: "منتج 2", price: "70$", link: "https://example.com/product2", images: ["product2-1.jpg", "product2-2.jpg", "product2-3.jpg"] },
        { name: "منتج 3", price: "30$", link: "https://example.com/product3", images: ["product3-1.jpg", "product3-2.jpg", "product3-3.jpg"] },
        { name: "منتج 4", price: "90$", link: "https://example.com/product4", images: ["product4-1.jpg", "product4-2.jpg", "product4-3.jpg"] },
        { name: "منتج 5", price: "60$", link: "https://example.com/product5", images: ["product5-1.jpg", "product5-2.jpg", "product5-3.jpg"] },
    ];

    const productGrid = document.querySelector(".product-grid");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        const img = document.createElement("img");
        img.src = product.images[0];  
        img.onclick = () => openGallery(product.images);
        
        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.textContent = السعر: ${product.price};

        // زر الشراء يؤدي إلى الموقع المحدد
        const buyButton = document.createElement("button");
        buyButton.textContent = "شراء المنتج";
        buyButton.classList.add("buy-button");
        buyButton.onclick = () => {
            window.location.href = product.link;
        };

        productElement.appendChild(img);
        productElement.appendChild(name);
        productElement.appendChild(price);
        productElement.appendChild(buyButton);

        productGrid.appendChild(productElement);
    });

});

// دالة لفتح معرض الصور عند الضغط على صورة المنتج
function openGallery(images) {
    let galleryWindow = window.open("", "_blank", "width=600,height=400");
    galleryWindow.document.write("<html><head><title>معرض الصور</title></head><body>");
    images.forEach(img => {
        galleryWindow.document.write(<img src="${img}" style="width:100%; margin-bottom:10px;">);
    });
    galleryWindow.document.write("</body></html>");
}