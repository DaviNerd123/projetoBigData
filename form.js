const body = document.getElementById("body");
var Final = 0
function inicializar() {

  var Tipos = [
    (Comida = []),
    (Bebida = []),
    (Talher = []),
    (Louca = []),
    (Decoracao = []),
    (Entretenimento = []),
  ];
  const productList = document.getElementById("product-list");
  const totalPrice = document.getElementById("total-price");
  const productForm = document.getElementById("product-form");
  const tabela = [];
  const tabelaE = document.getElementById("corpoTabela");
  var PrecoC = 0;
  var PrecoB = 0;
  var PrecoT = 0;
  var PrecoL = 0;
  var PrecoD = 0;
  var PrecoE = 0;

  let products = [];
  const chartCanvas = document.getElementById("myChart");
  const data = {
    labels: [
      "Comida",
      "Bebida",
      "Talher",
      "Louça",
      "Decoração",
      "Entretenimento",
    ],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: ["blue", "pink", "red", "green", "purple", "yellow"],
      },
    ],
  };

  const ctx = chartCanvas.getContext("2d");
  const myChart = new Chart(ctx, {
    type: "pie",
    data: data,
  });

  productForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  function updateTotalPrice() {
    const totalPriceValue = products.reduce(
      (acc, product) => acc + product.total,
      0
    );
    PrecoC = 0;
    PrecoB = 0;
    PrecoT = 0;
    PrecoL = 0;
    PrecoD = 0;
    Tipos[0].forEach((x) => {
      PrecoC = PrecoC + x.price;
    });
    Tipos[1].forEach((x) => {
      PrecoB = PrecoB + x.price;
    });
    Tipos[2].forEach((x) => {
      PrecoT = PrecoT + x.price;
    });
    Tipos[3].forEach((x) => {
      PrecoL = PrecoL + x.price;
    });
    Tipos[4].forEach((x) => {
      PrecoD = PrecoD + x.price;
    });
    Tipos[5].forEach((x) => {
      PrecoE = PrecoE + x.price;
    });
    totalPrice.textContent = `Total a Pagar: R$ ${totalPriceValue.toFixed(2)}`;
    Final = Final + totalPriceValue


  }

  document.getElementById("add-product").addEventListener("click", function () {
    const productName = document.getElementById("product-name").value;
    const productType = document.getElementById("Tipo").value;
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
        tipo: productType,
        price: productPrice,
        quantity: productQuantity,
        total: productTotal,
      };
      if (product.tipo == "Comida") {
        Tipos[0].push(product);
      } else {
        if (product.tipo == "Bebida") {
          Tipos[1].push(product);
        } else {
          if (product.tipo == "Talher") {
            Tipos[2].push(product);
          } else {
            if (product.tipo == "Louca") {
              Tipos[3].push(product);
            } else if (product.tipo == "Decoração") {
              Tipos[4].push(product);
            } else if (product.tipo == "Entretenimento") {
              Tipos[5].push(product);
            }
          }
        }
      }
      if (product.tipo === "Comida") {
        data.datasets[0].data[0] = product.total + data.datasets[0].data[0];
      } else if (product.tipo === "Bebida") {
        data.datasets[0].data[1] = product.total + data.datasets[0].data[1];
      } else if (product.tipo === "Talher") {
        data.datasets[0].data[2] = product.total + data.datasets[0].data[2];
      } else if (product.tipo === "Louça") {
        data.datasets[0].data[3] = product.total + data.datasets[0].data[3];
      } else if (product.tipo === "Decoração") {
        data.datasets[0].data[4] = product.total + data.datasets[0].data[4];
      } else {
        data.datasets[0].data[5] = product.total + data.datasets[0].data[5];
      }

      myChart.update();
      products.push(product);
      tabela.push(product);
      updateTotalPrice();

      var t = document.querySelector("table");
      t.style.display = "table";
      var ultimo = tabela.length - 1;

      tabelaE.innerHTML = "";

      document.getElementById("product-name").value = "";
      document.getElementById("product-price").value = "";
      document.getElementById("product-quantity").value = "";
      tabela.forEach(function (produto) {
        tabelaE.innerHTML =
          tabelaE.innerHTML +
          `<tr><td>${produto.name}</td><td>${produto.tipo}</td><td>${produto.quantity}</td><td>${produto.price}</td><td>${produto.total}</td></tr>`;

      });
    }
  });

}
const Finalizar = function () {
  Final = Final
  var pFinal =  Final.toFixed(2)
  body.innerHTML = `    <menu>
  <div id="bmenu">
    <div>
      <a href="index.html">Lobby</a>

      <a href="convites.html">Convites</a>
    </div>

  </div>
</menu>
<header>
  <div>
    <h1>Festa:Beneficente</h1>
  </div>
</header>
<h1>Finalização do Pedido</h2>
<form id="Final">
  <div id='label'> <label for='locacao' id='locacao' style="">Locação</label><br><select id="Locação" name="Locação">

    
    <option value="50m²">50m²</option>
    <option value="100m²">100m²</option>
    <option value="120m²">120m²</option>
    <option value="150m²">Louça</option>    
  </select></div><br>
  <div id="label"><label for="orcamento">Orçamento Disponivel</label><input type="number" name="orcamento" id="orcamento"></div><br>   <div id='label'><br><br> <label for='FormadePagamento' id='FormadePagamento' style="">Forma de Pagamento</label><select id="Forma-de-Pagamento" name="FormadePagamento">
    <option value="débito">débito</option>
    <option value="crédito">crédito</option>
    <option value="boleto">boleto</option>
    <option value="pix">pix</option>    
  </select></div><br>
  <p id="ValorFinal">Valor a se pagar: R$</p>
  <input id="pagar"
  type="submit"
  value="Pagar"
  style="
    height: 40px;
    text-decoration: none;
    background-color: rgb(4, 150, 4);
    color: white;
    border: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
  "
/>

</form>
<script src="../form.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>`;
var totalApagar = document.getElementById("ValorFinal")
totalApagar.innerText = totalApagar.innerText + `${pFinal}`
const product = document.getElementById("pagar");
var orcamento = document.getElementById("orcamento").value
var form = document.querySelector("form")
product.addEventListener("click", function (event) {
  var orcamento = document.getElementById("orcamento").value
  if(orcamento< Final){
    var emprestimo = Final - orcamento
    body.innerHTML = `    <menu>
    <div id="bmenu">
      <div>
        <a href="index.html">Lobby</a>

        <a href="convites.html">Convites</a>
      </div>

    </div>
  </menu>
  <header>
    <div>
      <h1>Festa:Beneficente</h1>
    </div>
  </header>
  <h1>Finalização do Pedido</h2>
  <form id="Final">

    <div id="label"><label for="juros">juros</label>
      <select id="tipoj" name="Tipoj">
        <option value="Simples">Simples: 5%</option>
        <option value="Composto">Composto: 2%</option>  
      </select></div><br>   <div id='label'><br><br> <label for='FormadePagamento' id='FormadePagamento' style="">Forma de Pagamento</label><select id="Forma-de-Pagamento" name="FormadePagamento">
      <option value="débito">débito</option>
      <option value="crédito">crédito</option>
      <option value="boleto">boleto</option>
      <option value="pix">pix</option>    
    </select></div><br>
    <div id="label"><label for="Tempo">Parcelas</label>
      <select id="meses" name="meses">
      </select></div>
    <p id="ValorEmprestimo">Valor do Empréstimo: R$</p>
    <p id="ValorASerPago">Valor a ser pago: R$</p>
    <input
    type="submit"
    value="Pagar"
    style="
      height: 40px;
      text-decoration: none;
      background-color: rgb(4, 150, 4);
      color: white;
      border: 0px;
      padding-top: 10px;
      padding-bottom: 10px;
    "
  />

  </form>
  <script src="../form.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>`
    var inputI = document.getElementById("meses")
    var valorE = document.getElementById("ValorEmprestimo")
    valorE.innerText = valorE.innerText +emprestimo
    var n =1
    while(n<13){
      inputI.innerHTML = `${inputI.innerHTML}<option value="${n}">${n} meses</option>`
      if (n == 1){
        inputI.innerHTML = inputI.innerHTML - `<option value="${n}">${n} meses</option>` + `<option value="${n}">${n} mês</option>`
      }
      n++
    }

  }
  alert("oi")
  body.innerHTML = body.innerHTML

})


};


