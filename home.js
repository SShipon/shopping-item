const addProduct = () =>{
const nameField = document.getElementById('product-name');
const name = nameField.value ;
displayProduct(name)
addProductToCart(name)

nameField.value = '';
};
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);

};

const getCard = () =>{
   const cart = localStorage.getItem('cart');
   let cartObj;
    if(cart){
        cartObj = JSON.parse(cart); 
    }
    else{
        cartObj ={};
    }
    return cartObj;
}
const addProductToCart = name =>{
    const cart = getCard();
    cart[name] = 1;
    const carsStringify = JSON.stringify(cart);
    localStorage.setItem('cart',carsStringify);
}