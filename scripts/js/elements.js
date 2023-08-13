//recebendo as variaveis.
var body = document.querySelector("body");
//recebendo as variaveis.
// var welcome = document.createElement("h2");
// welcome.style.textAlign = "center";
// welcome.setAttribut = ("id", "welcome");
// welcome.innerHTML = "Welcome to Kobe Shop";
// body.appendChild(welcome);
var carrosel = document.getElementById("carrousel");

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




//criacao das imagens
var kobe1 = document.createElement("img");
kobe1.src = "/image/shoes/Adidas-EQT-Elevation.jpg";
kobe1.className = "shoes";
var kobe1desc = document.createElement("p");
kobe1desc.className = "shoes";
kobe1desc.innerHTML = `<h3>Adidas EQT Elevation</h3>
Although he started his rookie season with the Adidas EQT Elevation, the Adidas KB8 was Kobe’s first true signature shoe. It was designed with Kobe Bryant’s style of play in mind.
Wearing the Adidas KB8, Kobe Bryant became the youngest All-Star at the time. Nearly 20 years later, fans are still rocking Kobe’s first signature shoe now renamed, “Crazy 8.”`
  var divSlide = document.createElement("div");
  divSlide.className = "slide";
  var link = document.createElement("button");
  link.innerHTML = "Buy";
  link.className = "link";
  divSlide.appendChild(kobe1);
  divSlide.appendChild(kobe1desc);
  divSlide.appendChild(link);
  link.addEventListener("click",() =>{
    window.location = "/html/shoes/EQTE.html";
  })


carrosel.appendChild(divSlide);

var kobe2 = document.createElement("img");
kobe2.src = "/image/shoes/Adidas-KB8-II.jpg";
kobe2.className = "shoes";
kobe2desc = document.createElement("p");
kobe2desc.className = "shoes";
kobe2desc.innerHTML = `<h3>Adidas KB8 II</h3>
Kobe Bryant had become a rising superstar during his third NBA season. During this time, the Adidas KB8 II. It featured the adiPRENE heel cushion support system.
While wearing this sneaker, Kobe Bryant continues to earn more praise, even being equated to Michael Jordan in a 1998 Rolling Stones article titled “Kobe Bryant: Teenager of the Year”. However, the NBA experienced a lockout season which was shortened to just 50 games.`
  const divSlide2 = document.createElement('div');
  divSlide2.className = "slide";
  var link2 = document.createElement("button");
  link2.innerHTML = "Buy";
  link2.className = "link";
  divSlide2.appendChild(kobe2);
  divSlide2.appendChild(kobe2desc);
  divSlide2.appendChild(link2);
  link2.addEventListener("click",() =>{
    window.location = "/html/shoes/KB82.html";
  })

  carrosel.appendChild(divSlide2);


var kobe3 = document.createElement("img");
kobe3.src = "/image/shoes/Adidas-KB8-III.jpg";
kobe3.className = "shoes";
kobe3desc = document.createElement("p");
kobe3desc.className = "shoes";
kobe3desc.innerHTML = `<h3>Adidas KB8 III </h3>
Released in 1999, the Adidas three stripes take on a new look on the side, while the wavy look we saw from the second Kobe shoe remains in the third installment. The Adidas KB8 III still has the adiPRENE cushioning and was the last in the Feet You Wear campaign.
While wearing the Adidas KB8 III, Kobe Bryant, along with Shaquille O’Neal and Phil Jackson, as the new coach of the Lakers, won an NBA championship, the first for Kobe Bryant.`;
  const divSlide3 = document.createElement('div');
  divSlide3.className = "slide";
  var link3 = document.createElement("button");
  link3.innerHTML = "Buy";
  link3.className = "link";
  divSlide3.appendChild(kobe3);
  divSlide3.appendChild(kobe3desc);
  divSlide3.appendChild(link3);
  link3.addEventListener("click",() =>{
    window.location = "/html/shoes/KB83.html";
  })

    carrosel.appendChild(divSlide3);  




var kobe4 = document.createElement("img");
kobe4.src = "/image/shoes/Adidas-The-Kobe.jpg";
kobe4.className = "shoes";
kobe4desc = document.createElement("p");
kobe4desc.className = "shoes";
kobe4desc.innerHTML = `<h3>Adidas The Kobe</h3>
With a unique molded upper that was designed to look like the Audi TT Roadster, many will remember the Adidas Kobe as the original space boots as they were released in 2000.
While wearing the Adidas The Kobe, Kobe Bryant and the Lakers continued their winning streak from the previous year with another NBA Championship win against the Philadelphia 76ers.`;	

  const divSlide4 = document.createElement('div');
  divSlide4.className = "slide";
  var link4 = document.createElement("button");
  link4.innerHTML = "Buy";
  link4.className = "link";
  divSlide4.appendChild(kobe4);
  divSlide4.appendChild(kobe4desc);
  divSlide4.appendChild(link4);
  link4.addEventListener("click",() =>{
    window.location = "/html/shoes/ADDKobe.html";
  })

    carrosel.appendChild(divSlide4);  

var kobe5 = document.createElement("img");
kobe5.src = "/image/shoes/Adidas-The-Kobe-2.jpg";
kobe5.className = "shoes";
kobe5desc = document.createElement("p");
kobe5desc.className = "shoes";
kobe5desc.innerHTML = `<h3>Adidas The Kobe II</h3>
Released in 2001, the Adidas Kobe 2 was the second installment of the space shoes. The shoes were not as sleek or as stylish as the previous pair of Adidas Kobe shoes.
After beating the New Jersey Nets, Kobe Bryant earns a three-peat after winning his third NBA Championship at the age of 23. Sadly, the Kobe 2 is the last time Kobe would wear Adidas shoes.`;

    const divSlide5 = document.createElement('div');
    divSlide5.className = "slide";
    var link5 = document.createElement("button");
    link5.innerHTML = "Buy";
    link5.className = "link";
    divSlide5.appendChild(kobe5);
    divSlide5.appendChild(kobe5desc);
    divSlide5.appendChild(link5);
    link5.addEventListener("click",() =>{
      window.location = "/html/shoes/ADDKobe2.html";
    })

      carrosel.appendChild(divSlide5);  


var kobe6 = document.createElement("img");
kobe6.src = "/image/shoes/Nike-Zoom-Air-Huarache-2K4.jpg";
kobe6.className = "shoes";
kobe6desc = document.createElement("p");
kobe6desc.className = "shoes";
kobe6desc.innerHTML = `<h3>Nike Zoom Air Huarache 2K4</h3>
As a result of his unhappiness with the Adidas The Kobe 2, Kobe Bryant left Adidas and became a “sneaker free agent”. He wore different sneakers including the player editions Jordans.
After spending one NBA season as a sneaker free agent between 2002-2003, Kobe joined Nike and wore the Nike Zoom Air Huarache 2K4 for the first time during the 2003-2004 NBA season.`;

const divSlide6 = document.createElement('div');
    divSlide6.className = "slide";
    var link6 = document.createElement("button");
    link6.innerHTML = "Buy";
    link6.className = "link";
    divSlide6.appendChild(kobe6);
    divSlide6.appendChild(kobe6desc);
    divSlide6.appendChild(link6);
    link6.addEventListener("click",() =>{
      window.location = "/html/shoes/Air2k4.html";
    })
      carrosel.appendChild(divSlide6); 


var kobe7 = document.createElement("img");
kobe7.src = "/image/shoes/Nike-Zoom-Air-Huarache-2K5.jpg";
kobe7.className = "shoes";
kobe7desc = document.createElement("p");
kobe7desc.className = "shoes";
kobe7desc.innerHTML = `<h3>Nike Zoom Air Huarache 2K5</h3>
Despite signing with Nike, Kobe Bryant had legal issues that kept the Swoosh from giving him his own signature shoe line. In 2004, Kobe Bryant started wearing the Nike Zoom Air Huarache 2K5.
The 2004-2005 NBA season was the time when Shaq got traded out of the Los Angeles Lakers and the start of the Kobe Bryant era. He would lead the 2004 -2005 NBA season in scoring.`;

    const divSlide7= document.createElement('div');
    divSlide7.className = "slide";
    var link7 = document.createElement("button");
    link7.innerHTML = "Buy";
    link7.className = "link";
    divSlide7.appendChild(kobe7);
    divSlide7.appendChild(kobe7desc);
    divSlide7.appendChild(link7);
    link7.addEventListener("click",() =>{
      window.location = "/html/shoes/Air2k5.html";
    })
      carrosel.appendChild(divSlide7);  

var kobe8 = document.createElement("img");
kobe8.src = "/image/shoes/Nike-Kobe-1.jpg";
kobe8.className = "shoes";
kobe8desc = document.createElement("p");
kobe8desc.className = "shoes";
kobe8desc.innerHTML = `<h3>Nike Kobe I</h3>
While the shoe did not sell particularly well, the Nike Kobe 1 is the start of the eagerly awaited Nike Kobe Bryant signature line. The shoe took design cues from the very popular Nike Huarache series, as designer Ken Link introduced the world to Mamba Mentality in 2005.
The Nike Kobe 1 is not the most popular, but it will also be remembered as the shoe that Kobe Bryant wore in some of his most iconic scoring moments, including the 62 points he dropped on the Dallas Mavericks and the legendary 81-point game against the Toronto Raptors.`;
    const divSlide8= document.createElement('div');
    divSlide8.className = "slide";
    var link8 = document.createElement("button");
    link8.innerHTML = "Buy";
    link8.className = "link";
    divSlide8.appendChild(kobe7);
    divSlide8.appendChild(kobe7desc);
    divSlide8.appendChild(link7);
    link8.addEventListener("click",() =>{
      window.location = "/html/shoes/Kobe1.html";
    })
      carrosel.appendChild(divSlide8); 

var kobe9 = document.createElement("img");
kobe9.src = "/image/shoes/Nike-Kobe-2.jpg";
kobe9.className = "shoes";
kobe9desc = document.createElement("p");
kobe9desc.className = "shoes";
kobe9desc.innerHTML = `<h3>Nike Kobe II</h3>
The Nike Kobe 2 marked the first time Kobe Bryant, known for paying very close attention to detail, was heavily involved in the basketball sneaker design process. The second Kobe signature shoe from Nike took on a bit more style, adding patterns and straps.
First introduced in 2006 on Christmas against the Miami Heat, Kobe Bryant would wear the Nike Kobe 2 in the FIBA Americas tournament, the birth of Team USA’s “Redeem Team.”`;

var kobe10 = document.createElement("img");
kobe10.src = "/image/shoes/Nike-Kobe-3.jpg";
kobe10.className = "shoes";
kobe10desc = document.createElement("p");
kobe10desc.className = "shoes";
kobe10desc.innerHTML = `<h3>Nike Kobe III</h3>
The Nike Kobe 3 is known for its glove-like fit on the upper that acts as a second skin on your feet. One famous moment of the Nike Kobe 3 is when Kobe Bryant did the double-clutch reverse dunk against Chris Paul of the New Orleans Hornets to seal the 2008 MVP award.
Released between 2007-2008, The Nike Kobe 3 is one of Kobe Bryant’s favorite sneakers of all time. It was his pain and misery associated with the shoe that made it so special in his eyes.`;

var kobe11 = document.createElement("img");
kobe11.src = "/image/shoes/Nike-Kobe-4.jpg";
kobe11.className = "shoes";
kobe11desc = document.createElement("p");
kobe11desc.className = "shoes";
kobe11desc.innerHTML = `<h3>Nike Kobe IV</h3>
The Nike Kobe 4 made its debut in 2008. It was the shoe Kobe wore to win his first ring without Shaq. The design was unique because it is the first basketball shoe inspired by soccer cleats.
Kobe Bryant and Nike did commercials for ankle insurance, subverting critics who said low-top sneakers didn’t have a place on basketball courts. In fact, Kobe Bryant said it himself that his fourth signature sneaker was the boldest move that he and Nike have ever done together.
The gamble paid off, as it dismissed the myth that wearing low-top basketball shoes would get you injured. If it weren’t for the Nike Kobe 4, we may not have seen low-cut basketball shoes.`;

var kobe12 = document.createElement("img");
kobe12.src = "/image/shoes/Nike-Kobe-5.jpg";
kobe12.className = "shoes";
kobe12desc = document.createElement("p");
kobe12desc.className = "shoes";
kobe12desc.innerHTML = `<h3>Nike Kobe V</h3>
The Nike Kobe 5 is the iconic sneaker that Kobe Bryant wore as he celebrated his fifth ring after defeating the Boston Celtics in Game 7 of the 2010 NBA Playoffs in Staples Center, Los Angeles.
Compared to its predecessor, the Nike Kobe 5 was even lighter and lower, pushing the boundaries of basketball shoe technology as Kobe Bryant pushed the boundaries of the game.
One unique aspect of the shoe is the glass/carbon fiber plate in the mid-foot that helps with control and rigidity. The Nike Kobe 5 had its fair share of memorable releases in colorways like the Bruce Lee and the Chaos. It was first introduced somewhere between 2009 and 2010.`;

var kobe13 = document.createElement("img");
kobe13.src = "/image/shoes/Nike-Kobe-6.jpg";
kobe13.className = "shoes";
kobe13desc = document.createElement("p");
kobe13desc.className = "shoes";
kobe13desc.innerHTML = `<h3>Nike Kobe VI</h3>
The Nike Kobe 6 is unique because the shoe has the Black Mamba-inspired pieces of snakeskin that increase or decrease in size to protect the durability of the shoe. Nike calls them “islands”.
While the Kobe 4 popularized low bball shoes, it was the Kobe 6 that brought mass adaptation. From the hardwood to the streets, the Kobe 6 was everywhere due to its popularity at the time.
The Grinch Kobe 6, was perhaps one of Kobe’s most iconic sneakers ever to grace a basketball court. He introduced the shoe to the world in a Christmas Day matchup with the Miami Heat’s newly formed Big 3 of LeBron James, Dwyane Wade, and Chris Bosh in December 2010.`;

var kobe14 = document.createElement("img");
kobe14.src = "/image/shoes/Nike-Kobe-7.jpg";
kobe14.className = "shoes";
kobe14desc = document.createElement("p");
kobe14desc.className = "shoes";
kobe14desc.innerHTML = `<h3>Nike Kobe VII</h3>
As more basketball players were encouraged to switch back and forth, Nike created the Kobe 7 with cushioned inserts. The goal was to combine a lightweight feel and comfortable padding.
Debuted in late 2011, the Nike Kobe 7 is the shoe Kobe Bryant wore as he won his second gold medal in the 2012 London Olympics. The shoe was also given a star-studded ad campaign that included commercials from Kanye West, Serena Williams, Aziz Ansari, and Richard Branson.`;

var kobe15 = document.createElement("img");
kobe15.src = "/image/shoes/Nike-Kobe-8.jpg";
kobe15.className = "shoes";
kobe15desc = document.createElement("p");
kobe15desc.className = "shoes";
kobe15desc.innerHTML = `<h3>Nike Kobe VIII</h3>
In December 2012, Nike created a Kobe shoe lighter than ever before, using engineered mesh for the first time. This allowed the shoe to weigh just 9.6 ounces. To date, the Nike Kobe 8 remains one of the most comfortable basketball shoes out there due to the Lunarlon midsole.Unfortunately, the Nike Kobe 8 is the shoe Kobe wore on the night he tore his Achilles tendon. The Mamba, however, would walk to the free-throw line and calmly hit two clutch free throws on one leg. That moment will forever signify what it means to have the Mamba Mentality.`;

var kobe16 = document.createElement("img");
kobe16.src = "/image/shoes/Nike-Kobe-9.jpg";
kobe16.className = "shoes"
kobe16desc = document.createElement("p");
kobe16desc.className = "shoes";
kobe16desc.innerHTML = `<h3>Nike Kobe IX</h3>
The Nike Kobe 9 is Kobe Bryant’s ninth signature shoe with Nike. The sneakers were first officially unveiled at a Nike event at the MOCA in Los Angeles on December 4th, 2013. This is the sneaker that Kobe Bryant wore as he passed Michael Jordan on the all-time scoring list.
Pushing the boundaries of basketball innovation, the Nike Kobe 9 introduced a high-top design and flexible Flyknit upper that supported Kobe’s needs post-Achilles tear. The goal was to make the shoe an extension of the player’s body that flowed naturally onto the basketball court.`;

var kobe17 = document.createElement("img");
kobe17.src = "/image/shoes/Nike-Kobe-10.jpg";
kobe17.className = "shoes";
kobe17desc = document.createElement("p");
kobe17desc.className = "shoes";
kobe17desc.innerHTML = `<h3>Nike Kobe X</h3>
The Nike Kobe 10 is Kobe Bryant’s tenth signature shoe with Nike.
The first model debuted on February 7th, 2015. It features a lightweight mesh base combined with Nike Free-like cushioning for added traction and support. At the time, it was considered the most effective traction system in the history of Nike’s basketball shoes.
One famous moment of the Nike Kobe 10 was when Kobe Bryan hit the clutch three-pointer over Paul George after announcing his retirement. Sadly, many people would see the Nike Kobe 10 as the sneaker Kobe would wear as he announced his retirement to the world.`;


var kobe18 = document.createElement("img");
kobe18.src = "/image/shoes/Nike-Kobe-11.jpg";
kobe18.className = "shoes";
kobe18desc = document.createElement("p");
kobe18desc.className = "shoes";
kobe18desc.innerHTML = `<h3>Nike Kobe XI</h3>
Released on January 9th, 2016, the Nike Kobe 11 is the eleventh and final Kobe Bryant signature on-court shoe from Nike. The shoe was designed by Eric Avar who says the Nike Kobe 11 design represents the sum being greater than the totality of the parts.
The Nike Kobe 11 is the shoe that Kobe wore in his final NBA game. In what was arguably the most legendary final game of a player, Kobe Bryant scored 60 points, hit the game-winning shot, and ended his retirement speech with a simple statement—”Mamba Out.”`;

var kobe19 = document.createElement("img");
kobe19.src = "/image/shoes/Nike-Kobe-A.D.jpg";
kobe19.className = "shoes";
kobe19desc = document.createElement("p");
kobe19desc.className = "shoes";
kobe19desc.innerHTML = `<h3>Nike Kobe A.D</h3>
The Nike Kobe A.D. is Kobe Bryant’s twelfth signature shoe. It is the first shoe released after Kobe’s retirement from the NBA. The shoe features a mix of Flywire, mesh, Lunarlon, and Zoom Air.
Released on November 22nd, 2016, the Nike Kobe A.D. is a continuation of the spirit and legacy of the Black Mamba. In one of the most emotional moments of the 2016-2017 NBA season, Isiah Thomas showed his resolve as he wore a pair to pay tribute to his younger sister.`;

var kobe20 = document.createElement("img");
kobe20.src = "/image/shoes/Nike-Kobe-A.D.-NXT.jpg";
kobe20.className = "shoes";
kobe20desc = document.createElement("p");
kobe20desc.className = "shoes";
kobe20desc.innerHTML = `<h3>Nike Kobe A.D NXT</h3>
The second sneaker to be released after Kobe Bryant’s retirement, the Nike Kobe A.D. NXT continues the tradition of being lightweight and low while pushing the boundaries of innovation.
The shoe features a quick and intuitive laceless system, which is not well-received by many basketball enthusiasts, but it does feature improved traction and base breathability.`;

var kobe20 = document.createElement("img");
kobe20.src = "/image/shoes/Nike-Kobe-A.D.-Mid.jpg";
kobe20.className = "shoes";
kobe20desc = document.createElement("p");
kobe20desc.className = "shoes";
kobe20desc.innerHTML = `<h3>Nike Kobe A.D Mid</h3>
The revamped Kobe A.D. Mid features a mid-top design based on Kobe Bryant’s interest in color psychology and the external factors that inform the technology within his sneakers. 
Offering an ultra-thin feel, the Nike Kobe A.D. Mid is also supportive thanks to the multilayer upper. The shoe is a favorite among NBA stars including Devin Booker and DeMar DeRozan.`;

var kobe21 = document.createElement("img");
kobe21.src = "/image/shoes/Nike-Kobe-A.D.-NXT-360.jpg";
kobe21.className = "shoes";
kobe21desc = document.createElement("p");
kobe21desc.className = "shoes";
kobe21desc.innerHTML = `<h3>Nike Kobe A.D NXT 360</h3>
Introducing the 360-degree Flyknit to the basketball category after its debut on soccer cleats, the Kobe A.D. NXT 360 features a next-generation Nike Flyknit upper that wraps the foot for a secure, second-skin fit. It is very low, similar to soccer cleats, unlike most basketball shoes.
The addition of Nike’s Lunarlon technology is widely considered by many people as the best cushioning ever featured on any Nike Kobe signature shoe since the Nike Kobe 9.`;

var kobe22 = document.createElement("img");
kobe22.src = "/image/shoes/Nike-Kobe-A.D.-Exodus.jpg";
kobe22.className = "shoes";
kobe22desc = document.createElement("p");
kobe22desc.className = "shoes";
kobe22desc.innerHTML = `<h3>Nike Kobe A.D Exodus</h3>
The Nike Kobe A.D. Exodus is the fifth shoe in the A.D. line. Kobe’s signature logo is plastered throughout the sneaker including the tongue, insole, heel counter, and the medial mid-foot.
It was released on August 24, 2018. To date, the Nike Kobe A.D. Exodus remains one of the most popular Kobe shoes, with plenty of NBA players, even superstars, still wearing it on the court.
According to Baller Shoes DB, NBA superstars like Giannis Antetokounmpo and Jayson Tatum consistently wore the Nike Kobe A.D. Exodus before having their own signature shoes. Anthony Davis and Demar DeRozan were also seen wearing the shoes multiple times in their career.`;

var kobe23 = document.createElement("img");
kobe23.src = "/image/shoes/Nike-Kobe-A.D.-NXT-FastFit.jpg";
kobe23.className = "shoes";
kobe23desc = document.createElement("p");
kobe23desc.className = "shoes";
kobe23desc.innerHTML = `<h3>Nike Kobe A.D NXT FastFit</h3>
The Nike Kobe A.D. NXT FastFit made its debut on August 24th, 2019. Featured in a black finish to evoke Kobe Bryant’s “Mamba” persona, the sneaker is defined by the FastFit technology.
According to Nike, FastFit technology is a manual system that instantly secures the entire foot without the need for laces. All you have to do to tighten the shoe is to pull on the forefoot strap.`;


var kobe24 = document.createElement("img");
kobe24.src = "/image/shoes/nike-kobe-mamba-fury.jpg";
kobe24.className = "shoes";
kobe24desc = document.createElement("p");
kobe24desc.className = "shoes";
kobe24desc.innerHTML = `<h3>Nike Kobe Mamba Fury</h3>
first sold in stores on August 25th, 2020, the Nike Kobe Mamba Fury was designed as a budget shoe for Kobe Bryant fans and basketball enthusiasts. It has Zoom Air loaded into the forefoot to provide cushioning under the ball of the foot for responsive support.
Although it is a budget basketball sneaker, several NBA players have been seen donning the Nike Kobe Mamba Fury, including Jalen Brunson, De’Anthony Melton, and Gorgui Dieng.`;




var  prevButton = document.createElement("button");
prevButton.className = "prev-button";
prevButton.innerHTML = `previus`;
var  nxtButton = document.createElement("button");
nxtButton.className = "nxt-button";
nxtButton.innerHTML = `next`;

/*creating of slider */
let currentIndex = 0;
function showSlide(index){
  corrosel
}
/*creating of slider */

carrosel.appendChild(prevButton);
carrosel.appendChild(nxtButton);






/*
carrosel.appendChild(kobe1);
carrosel.appendChild(kobe1desc);
carrosel.appendChild(kobe2);
carrosel.appendChild(kobe2desc);
carrosel.appendChild(kobe3);
carrosel.appendChild(kobe3desc);
carrosel.appendChild(kobe4);
carrosel.appendChild(kobe4desc);
carrosel.appendChild(kobe5);
carrosel.appendChild(kobe5desc);
carrosel.appendChild(kobe6);
carrosel.appendChild(kobe6desc);
carrosel.appendChild(kobe7);
carrosel.appendChild(kobe7desc);
carrosel.appendChild(kobe8);
carrosel.appendChild(kobe8desc);
carrosel.appendChild(kobe9);
carrosel.appendChild(kobe9desc);
carrosel.appendChild(kobe10);
carrosel.appendChild(kobe10desc);
carrosel.appendChild(kobe11);
carrosel.appendChild(kobe11desc);
carrosel.appendChild(kobe12);
carrosel.appendChild(kobe12desc);
carrosel.appendChild(kobe13);
carrosel.appendChild(kobe13desc);
carrosel.appendChild(kobe14);
carrosel.appendChild(kobe14desc);
carrosel.appendChild(kobe15);
carrosel.appendChild(kobe15desc);
carrosel.appendChild(kobe16);
carrosel.appendChild(kobe16desc);
carrosel.appendChild(kobe17);
carrosel.appendChild(kobe17desc);
carrosel.appendChild(kobe18);
carrosel.appendChild(kobe18desc);
carrosel.appendChild(kobe21);
carrosel.appendChild(kobe21desc);
carrosel.appendChild(kobe22);
carrosel.appendChild(kobe22desc);
*/
