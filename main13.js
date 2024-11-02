//Fetch Products from the API Using Fetch and Promises
const productsContainer = document.getElementById('products-container');

//loading
productsContainer.innerHTML =`
<div class="loading">
    <h2>Loading...</h2>
</div>
`;
fetch('https://www.course-api.com/javascript-store-products')
.then(response=>{
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
})
.then(products => {
    const productsHTML = products.map(product =>
        `
        <article class = "product-card">
            <div class="product-image">
        <img src ="${product.fields.image[0].url}"alt="${product.fields.name}">
           </div>
        <div class="product-info">
        <h3 class= "product-name">${product.fields.name}</h3>
        <p class="company">${product.fields.company}</p>
            <p class="price">$${product.fields.price.toFixed(2)}"</p>
        
            </div>
            </article>
        
        `).join('');
        productsContainer.innerHTML = productsHTML;
    })
    .catch(error=>{
        productsContainer.innerHTML=`
        
        <div class="error">
            <h2>Failed to load products</h2>
            <p>try again later</p>
            <button class="retry-btn" onclick="location.reload()">Try Again</button>
        </div>
        `;
    });
    
    