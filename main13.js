//Fetch Products from the API Using Fetch and Promises
const productsContainer = document.getElementById('products-container');

fetch('https://www.course-api.com/javascript-store-products')
.then(response => response.json())
.then(products => {
    const productsHTML = products.map(product =>
        `
        <article class = "product-card">
            <div class="product-image">
        <img src ="${product.fields.image[0].url}"alt="${product.fields.name}">
           <div class="product-info">
        <h3 class= "product-name">${product.fields.name}</h3>
        <p class="company">${product.fields.company}</p>
            <p class="price>$${product.fields.price.toFixed(2)}</p>
        
            </div>
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
    
    