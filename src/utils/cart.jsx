export function loadCart(){
    let cart = localStorage.getItem("cart");//firstly we checked cart is have on the localstorage
    if(cart == null){//if the cart do not have in the local storage we make a cart
        cart ={
            orderedItems : [],
            days : 1,
            startingDate : formatDate(new Date()),
            endingDate : formatDate(new Date())
        }

        const cartString = JSON.stringify(cart)//always we save the cart as string and using stringify we can change cart to string format from json
        localStorage.setItem("cart", cartString)//now cart is string so we can easily save cart
        return cart;
    }
    cart = JSON.parse(cart);//string change to json
    return cart;
}

export function addToCart(key, qty) {
  const cart = loadCart();
  let found = false;

  console.log("Cart Items:", cart.orderedItems);


  for (let i = 0; i < cart.orderedItems.length; i++) {
    if (cart.orderedItems[i].key === key) {
      cart.orderedItems[i].qty += qty;
      found = true;
    }
  }

  if (!found) {
    cart.orderedItems.push({key , qty});

  }
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
}



export function removeFromCart(key){
    const cart = loadCart();//load the cart , we can use filter any of the array in javascript
    const newCart = cart.orderedItems.filter((item)=>item.key != key);//not same keys are filerting
    cart.orderedItems = newCart;//filter array equal to new cart
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
}

export function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}