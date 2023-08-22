//Preentrega 1 - ecommerce de productos de madera

let compraTotal = 0;

function sumarCompraTotal(precioarticulo){
    compraTotal = compraTotal + precioarticulo;
    console.log('Subtotal hasta el momento $' + compraTotal);
}

let idProducto=parseInt(prompt('Todoro\n1-Plato de madera ... $400\n2-Cuenco de madera ... $500\n3-Mate de madera ... $800\n4-Tabla de madera ... $1200\n0-PARA FINALIZAR'));

while(idProducto != 0){
    switch(idProducto){
        case 1:
        alert('Agregaste Plato de madera ... $ 400 al carro');
        sumarCompraTotal(400);
        break;
        case 2:
        alert('Agregaste Cuenco de madera ... $ 500 al carro');
        sumarCompraTotal(500);
        break;
        case 3:
        alert('Agregaste Mate de madera ... $ 800 al carro');
        sumarCompraTotal(800);
        break;
        case 4:
        alert('Agregaste Tabla de madera ... $ 1200 al carro');
        sumarCompraTotal(1200);
        break;
        default:
        alert('Error de producto');
        break;
     }
     idProducto=parseInt(prompt('Todoro\n1-Plato de madera ... $400\n2-Cuenco de madera ... $500\n3-Mate de madera ... $800\n4-Tabla de madera ... $1200\n0-PARA FINALIZAR'));
}

alert('El total de tu compra es $'+ compraTotal);




