var dado = [];
let form = document.createElement("form");

// cria um elemento input para o campo nome
let nome = document.createElement("input");
nome.setAttribute("type", "text");
nome.setAttribute("name", "nome");
nome.setAttribute("placeholder", "Name");

// cria um elemento input para o campo login
let login = document.createElement("input");
login.setAttribute("type", "text");
login.setAttribute("name", "login");
login.setAttribute("placeholder", "Login");

// cria um elemento select para o campo sexo
let sexo = document.createElement("select");
sexo.setAttribute("name", "sexo");
let masculino = document.createElement("option");
masculino.setAttribute("value", "M");
masculino.innerHTML = "Male";
let feminino = document.createElement("option");
feminino.setAttribute("value", "F");
feminino.innerHTML = "Female";

fetch('http://localhost:5000/')
  .then(response => response.json())
  .then(data => {
    dado = data;
    if (dado.length > 1) {
      console.log(dado[1].nome);
      console.log(dado.length);
    } else {
      console.log("O array 'dado' não possui elementos suficientes.");
    }

    // Criação do dropdown (select)
    var country = document.createElement('select');
    // Atribuição das opções ao dropdown
    for (let i = 0; i < dado.length; i++) {
      var optionElement = document.createElement('option');
      optionElement.value = dado[i].nome;
      optionElement.text = dado[i].nome;
      optionElement.innerHTML = `${dado[i].nome}`;
      country.appendChild(optionElement);
    }
    
    // adiciona todos os elementos criados ao form
    form.appendChild(nome);
    form.appendChild(login);
    form.appendChild(sexo);
    form.appendChild(country);
    // adiciona o form à página
    document.body.appendChild(form);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });




    

//dropdown.appendChild(dCountry)
// adiciona as opções ao select sexo
sexo.appendChild(masculino);
sexo.appendChild(feminino);

// adiciona todos os elementos criados ao form
form.appendChild(nome);
form.appendChild(login);
form.appendChild(sexo);
form.appendChild(country)
// adiciona o form à página
document.body.appendChild(form);
