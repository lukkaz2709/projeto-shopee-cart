//-> Adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//-> Calcular o total do carrinho
async function calculateItem(userCart){
    // Verifica se o carrinho está vazio
    console.log("\nShopee cart total is: ");

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🎉Total:  ${result}`);
}

//-> Deletar item do carrinho 
async function deleteItem(userCart, name){
    // Verifica se o item existe no carrinho
    const index = userCart.findIndex(item => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    } else {
        console.log(`Item ${name} not found in the cart.`);
    }
}

//-> Remover item do carrinho - diminui um item
async function removeItem(userCart, item){
    // Verifica se o item existe no carrinho
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    // Se o item não for encontrado, exibe mensagem
    if(indexFound == -1){
        console.log(`Item ${item.name} not found in the cart.`);
        return;
    }

    //3 item > substrair um item 
    if (userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    //4 item = 1 deletar o item
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }





}

async function displayCart(userCart) {
    // Verifica se o carrinho está vazio
    console.log("\nShopee cart list: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$: ${item.price} | , 
             ${item.quantity}x | subtotal =  ${item.subtotal()}`);
    });
}


export { addItem, calculateItem, deleteItem, removeItem, displayCart };