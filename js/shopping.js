// display local storage in ui alowes
const dispalyLocalStorageCart = () =>{
    const cart = getCart()
    for(const name in cart){
        displayProduct(name);
    }
};


//call additem click button and name field 
const addItem = () =>{
const nameField = document.getElementById('product-name');
const name = nameField.value;

//display in the ui
if(!name){
    return;
}
displayProduct(name);

//add to local storage
addProductToCart(name)

nameField.value = '';
}
//create dispaly product
const displayProduct = name =>{
    const ul = document.getElementById("products");
    const li = document.createElement("li");
    li.innerText = name;
    ul.appendChild(li);
}
//
const getCart = () =>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}
//
const addProductToCart = name =>{
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name]+1;
    }
    else{
        cart[name] = 1;
    }
    const cartStringifyField = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringifyField);
}
//placeorder button place item and clear display
const placeOrder = () =>{
    document.getElementById('products').textContent='';
    localStorage.removeItem('cart');
}
//call dispalyLocalStorageCart function
dispalyLocalStorageCart();