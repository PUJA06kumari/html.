const mainDiv=document.getElementById('products')
fetch('https://fakestoreapi.com/products').then(function(res)
{
    console.log("res");
    return res.json()
})
.then(function(data)
{
console.log("data")
displayData(data)
})
function displayData(data)
{
    data.forEach(function(pro)
    {
        const product=document.createElement('div')
        const image=document.createElement('img')
        const title=document.createElement('h3')
        const price=document.createElement('h2')
        const btn=document.createElement('button')
        image.src=pro.image;
        image.alt="this is the image";
        title.textContent=pro.title;
        price.textContent=pro.price;
        btn.textContent="ADD TO CART";
        product.append(image,title,price,btn)
        mainDiv.appendChild(product)
        product.classList.add('product')
        image.height="300"
        image.width="300"
        image.classList.add('image')
        btn.classList.add('btn')
    }
    
    )
    
}
