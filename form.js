const body = document.getElementById("body");

function inicializar() {
  const productList = document.getElementById("product-list");
  const totalPrice = document.getElementById("total-price");
  const productForm = document.getElementById("product-form");
  const tabela = [];
  const tabelaE = document.getElementById("corpoTabela");

  let products = [];

  productForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  function updateTotalPrice() {
    const totalPriceValue = products.reduce(
      (acc, product) => acc + product.total,
      0
    );
    totalPrice.textContent = `Total a Pagar: R$ ${totalPriceValue.toFixed(2)}`;
  }

  function createListItem(product) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<p style"margin-right:10px;">${product.name}</p>`;
    listItem.style.marginRight = "10px";
    listItem.style.display = "flex";
    listItem.style.justifyContent = "center";
    listItem.style.alignContent = "center";

    const editButton = document.createElement("button");
    editButton.style.height = "20px";
    editButton;
    editButton.textContent = "Editar";
    editButton.addEventListener("click", function () {
      document.getElementById("product-name").value = product.name;
      document.getElementById("product-price").value = product.price;
      document.getElementById("product-quantity").value = product.quantity;

      // Remove o produto da lista ao editar

      const index = products.indexOf(product);
      tabela.splice(index, 1);
      tabelaE.innerHTML = "";
      tabela.forEach(function (produto) {
        alert(produto.name);
        tabelaE.innerHTML =
          tabelaE.innerHTML +
          `<tr><td>${produto.name}</td><td>${produto.quantity}</td><td>${produto.price}</td><td>${produto.total}</td></tr>`;
      });
      if (index !== -1) {
        products.splice(index, 1);
        productList.removeChild(listItem);

        updateTotalPrice();
      }
    });

    listItem.appendChild(editButton);
    productList.appendChild(listItem);
  }

  document.getElementById("add-product").addEventListener("click", function () {
    const productName = document.getElementById("product-name").value;
    const productPrice = parseFloat(
      document.getElementById("product-price").value
    );
    const productQuantity = parseInt(
      document.getElementById("product-quantity").value
    );

    if (
      productName &&
      !isNaN(productPrice) &&
      !isNaN(productQuantity) &&
      productQuantity > 0
    ) {
      const productTotal = productPrice * productQuantity;
      const product = {
        name: productName,
        price: productPrice,
        quantity: productQuantity,
        total: productTotal,
      };

      products.push(product);
      tabela.push(product);
      createListItem(product);
      updateTotalPrice();

      var ultimo = tabela.length - 1;

      tabelaE.innerHTML = "";

      document.getElementById("product-name").value = "";
      document.getElementById("product-price").value = "";
      document.getElementById("product-quantity").value = "";
      tabela.forEach(function (produto) {
        tabelaE.innerHTML =
          tabelaE.innerHTML +
          `<tr><td>${produto.name}</td><td>${produto.quantity}</td><td>${produto.price}</td><td>${produto.total}</td></tr>`;
      });
    }
  });
}
const Finalizar = function () {
  body = ``
};

const debutante = function () {
  var ListadeConvidados = convidados;
  body.innerHTML = `<body>
<menu>
    <div id='bmenu'>
        <div>
            <a href='index.html'>Lobby</a>
            
            <a href='convites.html'>Convites</a>
        </div>
        <div id='login'>
            <div>
                <a href='''></a>
            </div>
        </div>
    </div>
</menu>
<header>
    <div>
         <h1>Festa: Debutante</h1>
    </div>
</header>
<h1>Calculadora de Preço Total</h1>
<p>Adicione todos os produtos a serem usados na festa (pratos, copos, guardanapos e etc)</p>
<form id='product-form'>
    <div id='label'><label for='product-name' id='name'>Nome do Produto:</label>
    <input type='text' id='product-name' name='product-name' required></div>
    <div id='label'><label for='product-price'>Preço por Unidade:</label>
    <input type='number' id='product-price' name='product-price' required></div>
    <div id='label'><label for='product-quantity' id='quantidade'>Quantidade:</label>
    <input type='number' id='product-quantity' name='product-quantity' required></div>
    
    <button type='button' id='add-product'>Adicionar Produto</button>
</form>

<h2>Lista de Produtos</h2>
<ul id='product-list'></ul>

<h2>Total a Pagar:</h2>
<p id='total-price'>R$ 0.00</p>
<div id="t">
    <table border='1'>
            <thead><tr><th>Produto</th><th>Quantidade</th><th>preço</th><th>Total</th></tr></thead>
            <tbody id='corpoTabela'>
            </tbody>
        </table>
        </div>
        <button onclick='Finalizar'>Finalizar</button>
<script src='../form.js'></script>
</body>`;
  inicializar();
};
const casamento = function () {
  var ListadeConvidados = convidados;
  body.innerHTML = `<body>
<menu>
    <div id='bmenu'>
        <div>
            <a href='index.html'>Lobby</a>
            
            <a href='convites.html'>Convites</a>
        </div>
        <div id='login'>
            <div>
                <a href='''></a>
            </div>
        </div>
    </div>
</menu>
<header>
    <div>
         <h1>Festa: Casamento</h1>
    </div>
</header>
<h1>Calculadora de Preço Total</h1>
<p>Adicione todos os produtos a serem usados na festa (pratos, copos, guardanapos e etc)</p>
<form id='product-form'>
    <div id='label'><label for='product-name' id='name'>Nome do Produto:</label>
    <input type='text' id='product-name' name='product-name' required></div>
    <div id='label'><label for='product-price'>Preço por Unidade:</label>
    <input type='number' id='product-price' name='product-price' required></div>
    <div id='label'><label for='product-quantity' id='quantidade'>Quantidade:</label>
    <input type='number' id='product-quantity' name='product-quantity' required></div>
    
    <button type='button' id='add-product'>Adicionar Produto</button>
</form>

<h2>Lista de Produtos</h2>
<ul id='product-list'></ul>

<h2>Total a Pagar:</h2>
<p id='total-price'>R$ 0.00</p>
<div id="t">
    <table border='1'>
            <thead><tr><th>Produto</th><th>Quantidade</th><th>preço</th><th>Total</th></tr></thead>
            <tbody id='corpoTabela'>
            </tbody>
        </table>
        </div>
        <button onclick='Finalizar'>Finalizar</button>
<script src='../form.js'></script>
</body>`;
  inicializar();
};
const empresarial = function () {
  var ListadeConvidados = convidados;
  body.innerHTML = `<body>
<menu>
    <div id='bmenu'>
        <div>
            <a href='index.html'>Lobby</a>
            
            <a href='convites.html'>Convites</a>
        </div>
        <div id='login'>
            <div>
                <a href='''></a>
            </div>
        </div>
    </div>
</menu>
<header>
    <div>
         <h1>Festa: Empresarial</h1>
    </div>
</header>
<h1>Calculadora de Preço Total</h1>
<p>Adicione todos os produtos a serem usados na festa (pratos, copos, guardanapos e etc)</p>
<form id='product-form'>
    <div id='label'><label for='product-name' id='name'>Nome do Produto:</label>
    <input type='text' id='product-name' name='product-name' required></div>
    <div id='label'><label for='product-price'>Preço por Unidade:</label>
    <input type='number' id='product-price' name='product-price' required></div>
    <div id='label'><label for='product-quantity' id='quantidade'>Quantidade:</label>
    <input type='number' id='product-quantity' name='product-quantity' required></div>
    
    <button type='button' id='add-product'>Adicionar Produto</button>
</form>

<h2>Lista de Produtos</h2>
<ul id='product-list'></ul>

<h2>Total a Pagar:</h2>
<p id='total-price'>R$ 0.00</p>
<div id="t">
    <table border='1'>
            <thead><tr><th>Produto</th><th>Quantidade</th><th>preço</th><th>Total</th></tr></thead>
            <tbody id='corpoTabela'>
            </tbody>
        </table>
        </div>
        <button onclick='Finalizar'>Finalizar</button>
<script src='../form.js'></script>
</body>`;
  inicializar();
};
const infantil = function () {
  var ListadeConvidados = convidados;
  body.innerHTML = `<body>
<menu>
    <div id='bmenu'>
        <div>
            <a href='index.html'>Lobby</a>
            
            <a href='convites.html'>Convites</a>
        </div>
        <div id='login'>
            <div>
                <a href='''></a>
            </div>
        </div>
    </div>
</menu>
<header>
    <div>
         <h1>Festa: Infantil</h1>
    </div>
</header>
<h1>Calculadora de Preço Total</h1>
<p>Adicione todos os produtos a serem usados na festa (pratos, copos, guardanapos e etc)</p>
<form id='product-form'>
    <div id='label'><label for='product-name' id='name'>Nome do Produto:</label>
    <input type='text' id='product-name' name='product-name' required></div>
    <div id='label'><label for='product-price'>Preço por Unidade:</label>
    <input type='number' id='product-price' name='product-price' required></div>
    <div id='label'><label for='product-quantity' id='quantidade'>Quantidade:</label>
    <input type='number' id='product-quantity' name='product-quantity' required></div>
    
    <button type='button' id='add-product'>Adicionar Produto</button>
</form>

<h2>Lista de Produtos</h2>
<ul id='product-list'></ul>

<h2>Total a Pagar:</h2>
<p id='total-price'>R$ 0.00</p>
<div id="t">
    <table border='1'>
            <thead><tr><th>Produto</th><th>Quantidade</th><th>preço</th><th>Total</th></tr></thead>
            <tbody id='corpoTabela'>
            </tbody>
        </table>
        </div>
        <button onclick='Finalizar'>Finalizar</button>
<script src='../form.js'></script>
</body>`;
  inicializar();
};
const beneficente = function () {
  var ListadeConvidados = convidados;

  body.innerHTML = `<body>
<menu>
    <div id='bmenu'>
        <div>
            <a href='index.html'>Lobby</a>
            
            <a href='convites.html'>Convites</a>
        </div>
        <div id='login'>
            <div>
                <a href='''></a>
            </div>
        </div>
    </div>
</menu>
<header>
    <div>
         <h1>Festa: Beneficente</h1>
    </div>
</header>
<h1>Calculadora de Preço Total</h1>
<p>Adicione todos os produtos a serem usados na festa (pratos, copos, guardanapos e etc)</p>
<form id='product-form'>
    <div id='label'><label for='product-name' id='name'>Nome do Produto:</label>
    <input type='text' id='product-name' name='product-name' required></div>
    <div id='label'><label for='product-price'>Preço por Unidade:</label>
    <input type='number' id='product-price' name='product-price' required></div>
    <div id='label'><label for='product-quantity' id='quantidade'>Quantidade:</label>
    <input type='number' id='product-quantity' name='product-quantity' required></div>
    
    <button type='button' id='add-product'>Adicionar Produto</button>
</form>

<h2>Lista de Produtos</h2>
<ul id='product-list'></ul>

<h2>Total a Pagar:</h2>
<p id='total-price'>R$ 0.00</p>
<div id="t">
    <table border='1'>
            <thead><tr><th>Produto</th><th>Quantidade</th><th>preço</th><th>Total</th></tr></thead>
            <tbody id='corpoTabela'>
            </tbody>
        </table>
        </div>
        <button onclick='Finalizar'>Finalizar</button>
<script src='../form.js'></script>
</body>`;
  inicializar();
};

inicializar();
