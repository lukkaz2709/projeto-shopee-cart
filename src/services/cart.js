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
async function removeItem(userCart, index){
    //transformando o index para o padrão do array
    const deleteIndex = index -1;

    //verificando se o index é válido
    if (index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
        
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