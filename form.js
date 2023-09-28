document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const totalPrice = document.getElementById('total-price');
    const productForm = document.getElementById('product-form');
    const tabela = []
    const tabelaE = document.getElementById("corpoTabela")
    
    
    let products = [];
    
    productForm.addEventListener('submit', function(event) {
        event.preventDefault();
    });
    
    function updateTotalPrice() {
        const totalPriceValue = products.reduce((acc, product) => acc + product.total, 0);
        totalPrice.textContent = `Total a Pagar: R$ ${totalPriceValue.toFixed(2)}`;
    }
    
    function createListItem(product) {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - R$ ${product.price.toFixed(2)} x ${product.quantity} = R$ ${product.total.toFixed(2)}`;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', function() {
            document.getElementById('product-name').value = product.name;
            document.getElementById('product-price').value = product.price;
            document.getElementById('product-quantity').value = product.quantity;
            
            
                
            // Remove o produto da lista ao editar
            
            const index = products.indexOf(product);
            tabela.splice(index, 1)
            tabelaE.innerHTML = ''
                tabela.forEach(function (produto){
                    alert(produto.name)
                    tabelaE.innerHTML = tabelaE.innerHTML + `<tr><td>${produto.name}</td><td>${produto.quantity}</td><td>${produto.price}</td><td>${produto.total}</td></tr>`
                })
            if (index !== -1) {
                products.splice(index, 1);
                productList.removeChild(listItem);
    
               
                updateTotalPrice();
            }
        });
        
        listItem.appendChild(editButton);
        productList.appendChild(listItem);
    }
    
    document.getElementById('add-product').addEventListener('click', function() {
        const productName = document.getElementById('product-name').value;
        const productPrice = parseFloat(document.getElementById('product-price').value);
        const productQuantity = parseInt(document.getElementById('product-quantity').value);
        
        
        if (productName && !isNaN(productPrice) && !isNaN(productQuantity) && productQuantity > 0) {
            const productTotal = productPrice * productQuantity;
            const product = { name: productName, price: productPrice, quantity: productQuantity, total: productTotal };
            
                       products.push(product);
            tabela.push(product)
            createListItem(product);
            updateTotalPrice();

            var ultimo = tabela.length - 1
            
            tabelaE.innerHTML = ""
            
            document.getElementById('product-name').value = '';
            document.getElementById('product-price').value = '';
            document.getElementById('product-quantity').value = '';
            tabela.forEach(function (produto){
                alert(produto.name)
                tabelaE.innerHTML = tabelaE.innerHTML + `<tr><td>${produto.name}</td><td>${produto.quantity}</td><td>${produto.price}</td><td>${produto.total}</td>
                </tr>`
               
                
            })


           
            
        }
    });
});
