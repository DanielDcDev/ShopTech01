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
sexo.appendChild(masculino);
sexo.appendChild(feminino);



 //Dados alocados pelo banco de dados 
fetch('http://localhost:5000/')
  .then(response => response.json())
  .then(data => {
    dado = data;
    var container = document.createElement('div');
    // Criação do dropdown (select)
    var country = document.createElement('select');
    // Atribuição das opções ao dropdown
    

    for (let i = 0; i < dado.length; i++) {
      var optionElement = document.createElement('option');
      optionElement.value = dado[i].nome;
      optionElement.text = dado[i].nome;
      optionElement.innerHTML = `${dado[i].nome}`;
      var flag = document.createElement('img');
      flag.src = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${dado[i].sigla}.svg`;


      optionElement.appendChild(flag);
      country.appendChild(optionElement);
      
    }
    flag.style.backgroundRepeat = 'no-repeat';
    flag.style.backgroundPosition = 'left center';
    flag.style.display = 'flex';
    container.style.display = "flex";
    container.style.verticalAlign = "top"; 
    flag.style.paddingLeft = '20px';
    flag.style.width = '20px';
    container.appendChild(country);
    container.appendChild(flag);
    form.appendChild(container);
    
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });

  // adiciona todos os elementos criados ao form
form.appendChild(nome);
form.appendChild(login);
form.appendChild(sexo);

  // adiciona o form à página
document.body.appendChild(form);



// <![CDATA[ <-- For SVG support
(function () {
  function refreshCSS() {
    var sheets = [].slice.call(document.getElementsByTagName("link"));
    var head = document.getElementsByTagName("head")[0];
    for (var i = 0; i < sheets.length; ++i) {
      var elem = sheets[i];
      var parent = elem.parentElement || head;
      parent.removeChild(elem);
      var rel = elem.rel;
      if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
        var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
        elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
      }
      parent.appendChild(elem);
    }
  }

  refreshCSS();
})();
// ]]>
