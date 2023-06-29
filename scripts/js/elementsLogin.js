var dado = [];
let Country = 0;
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

let dropdown = document.createElement("select");
dropdown.innerHTML = "Country";
// criando os paises


fetch('http://localhost:5000/')
  .then(response => response.json())
  .then(data => {
    //console.log(data); 
    var dado = data;
    if (dado.length > 1) {
      console.log(dado[1].nome); // Acessar a propriedade 'nome' se existir
      console.log(dado.length); // Acessar a propriedade 'nome' se existir
    } else {
      console.log("O array 'dado' não possui elementos suficientes.");
    }
    //atribuiçoes dos paises ao dropbox
      for (let i = 0; i < dado.length; i++) {
        let Country =
        Country.setAttribute("value",dado[i].nome);
        
      }
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
form.appendChild(dropdown)
// adiciona o form à página
document.body.appendChild(form);
