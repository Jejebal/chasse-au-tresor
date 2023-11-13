let arriver = document.getElementById("arriver");
let jeux = document.getElementById("jeux");
let start = document.getElementById("start");
let plateau = document.getElementById("plateau");
let point = document.getElementById("point");
let alert = document.getElementById("alert");
let accueil = document.getElementById("accueil");
let recommencer = document.getElementById("recommencer");
let stoper = document.getElementById("stoper");

let score = 1;
let gagnant = Math.floor(Math.random() * (17 - 1 ) + 1);

for (i = 1; i <= 16; i++){

        plateau.innerHTML += `<div id='${i}' class='coffre w3-container w3-half'></div>`;

};

let coffres = document.querySelectorAll("div.coffre");

start.addEventListener( "click", event => {

    arriver.style.display = "none";
    jeux.style.display = "flex";

});

coffres.forEach(element => {

     element.addEventListener( "click", event => {

        if (!element.classList.contains("ouvert") && alert.style.display != "block"){
            
            if (gagnant == element.getAttribute("id")){

                element.classList.add("ouvert");
    
                element.style.backgroundImage = "url('./img/money.jpg')";
                point.innerHTML = `Bravo vous avez trouvé le trésor en ouvrant ${score++} boîtes !`
        
                alert.style.display = "block";
                            
            }
            else {
    
                element.classList.add("ouvert");
    
                element.style.backgroundImage = "url('./img/empty.jpg')";
                point.innerHTML = `Vous avez ouvert ${score++} boîte(s)`
        
            };

        }
    
    });

});

accueil.addEventListener("click", event => {

    arriver.style.display = "flex";
    jeux.style.display = "none";

    gagnant = Math.floor(Math.random() * (17 - 1 ) + 1);

    coffres.forEach(element => {

        element.style.backgroundImage = "url('./img/crate.jpg')";

    });

    score = 1;

    coffres.forEach(element => {

        element.classList.remove("ouvert");

    });

});

recommencer.addEventListener("click", event => {

    alert.style.display = "none";

    gagnant = Math.floor(Math.random() * (17 - 1 ) + 1);

    coffres.forEach(element => {

        element.style.backgroundImage = "url('./img/crate.jpg')";

    });

    score = 1;

    coffres.forEach(element => {

        element.classList.remove("ouvert");

    });

});

stoper.addEventListener("click", event => {

    alert.style.display = "none";

    arriver.style.display = "flex";
    jeux.style.display = "none";

    gagnant = Math.floor(Math.random() * (17 - 1 ) + 1);

    coffres.forEach(element => {

        element.style.backgroundImage = "url('./img/crate.jpg')";

    });

    score = 1;

    coffres.forEach(element => {

        element.classList.remove("ouvert");

    });

})