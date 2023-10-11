const body = document.getElementById("body");

function inicializar() {
  var Tipos = [
    (Comida = []),
    (Bebida = []),
    (Talher = []),
    (Louca = []),
    (Decoracao = []),
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

  let products = [];
  const chartCanvas = document.getElementById("myChart");
  const data = {
    labels: ["Comida", "Bebida", "Talher", "Louça", "Decoração"],
    datasets: [
      {
        data: [0, 0, 0, 0, 0],
        backgroundColor: ["blue", "pink", "red", "green", "purple"],
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
    totalPrice.textContent = `Total a Pagar: R$ ${totalPriceValue.toFixed(2)}`;
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
          alert(Tipos[1]);
        } else {
          if (product.tipo == "Talher") {
            Tipos[2].push(product);
          } else {
            if (product.tipo == "Louca") {
              Tipos[3].push(product);
            } else {
              Tipos[4].push(product);
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
      }

      myChart.update();
      products.push(product);
      tabela.push(product);
      updateTotalPrice();

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

inicializar();
