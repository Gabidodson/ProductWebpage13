const productsContainer = document.getElementById('products-container');

fetch('https://www.course-api.com/javascript-store-products')
.then(response => response.json())
.then(products => {
    const productsHTML = products.map(product =>
        `
        <article class = "product-card">
            <img src ="${product.fields.image[0].url}"alt="${product.fields.name}">
            <h3>${product.fields.name}</h3>
            <p>$${product.fields.price}</p>
        </article>
        `
        ).join('');
        productsContainer.innerHTML = productsHTML;
    })
    .catch(error=>{
        productsContainer.innerHTML=
        `
        <div class="error">
            <h2>Failed to load products</h2>
            <p>${error.message}</p>
        </div>
        `;
    });