//recebendo as variaveis.
var body = document.querySelector("body");
//recebendo as variaveis.
// var welcome = document.createElement("h2");
// welcome.style.textAlign = "center";
// welcome.setAttribut = ("id", "welcome");
// welcome.innerHTML = "Welcome to Kobe Shop";
// body.appendChild(welcome);

// criar um novo elemento de lista
var item = document.createElement("li");

// adicionar texto hipotético ao elemento
var texto = document.createTextNode("If you don't have a account ");
item.appendChild(texto);

// criar um elemento de link e adicioná-lo ao elemento
var link = document.createElement("a");
link.href = "/html/login.html";
link.textContent = "click here";
link.style.color = "rgba(253,184,39)"
link.style.textDecoration = "none"
item.appendChild(link);

// criar um elemento de imagem e adicioná-lo ao elemento
var img = document.createElement("img");
img.src = "/image/x.png";
img.alt = "Imagem X";
img.style.width = "20px";
img.style.paddingTop = "5px";
item.appendChild(img);

// adicionar um manipulador de eventos ao link
link.addEventListener("click", function() {
  item.style.display = "none";
});

// adicionar um manipulador de eventos à imagem
img.addEventListener("click", function() {
  item.style.display = "none";
  lista.style.backgroundColor= "rgba(84,37,131)";
});

// adicionar o elemento à lista existente na página
var lista = document.querySelector("ul");
lista.style.width = "99.2%";
lista.style.height = "35px";
lista.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
lista.style.padding = "5px";
lista.style.textAlign = "center";
lista.appendChild(item);


lista.style,zIndex = "0";
//welcome.style,zIndex = "1";


//criacao do corpo da pagina

var main = document.getElementById("main");
main.style.textAlign = "center";
var title = document.createElement("h1");
title.innerHTML = "Kobe Shop";
var image = document.createElement("img");
image.src = "/image/mamba.png";
image.style.width = "25px";

main.appendChild(image);
main.appendChild(title);


var text = document.createElement("h4");
text.innerHTML = "Navigate through the website and find Kobe sneakers."

text.style.textAlign = "center";

main.appendChild(text);