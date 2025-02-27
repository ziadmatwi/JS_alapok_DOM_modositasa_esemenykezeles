window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
    esemenyKezeles4();
    
   
});

function elemekElerese1() {
   let elem1 = document.querySelector("section h2").innerHTML
   console.log(elem1)
}
function elemekElerese2() {
    let elem2 = document.querySelector("#ide")
    elem2.innerHTML = "<p>Jó reggelt!</p>"
    
}

function elemekElerese3(){
    let elem3 = document.querySelectorAll(".ide")[0]
    elem3.innerHTML = "<p> JÓ REGGELTTTT ÁÁÁÁ </p>"
}

function elemekElerese4(){
    document.querySelector(".lista").innerHTML = "<ul>"
    for (let i = 0;i<5;i++){
        document.querySelector(".lista").innerHTML += `<li>${(Math.floor(Math.random()*(30-10)+10))}</li>`
    }
    document.querySelector(".lista").innerHTML += "</ul>"
}

function elemekFormazasa1(){
    document.querySelector(".lista").classList.add("formazott")
}

function esemenyKezeles1(){
    let listaElem = document.querySelector(".lista")
    listaElem.addEventListener("click",esemeny)
    function esemeny(){
        document.querySelector(".kattintasutan").appendChild(listaElem)
    }
}

function esemenyKezeles2(){
    let feladatElem = document.querySelector(".feladat")
    feladatElem.innerHTML = "<button id='gombocskam' type='button'>KATTINTS RÁM</button>"
    document.querySelector("#gombocskam").addEventListener("click",kep)
    function kep(){
        document.querySelector(".feladat").innerHTML += "<div> <img id='viktor' src='viktorom.jpeg' alt='Italian Trulli'></div>"
        esemenyKezeles3();
    }
}

function esemenyKezeles3(){
    document.querySelector("#viktor").addEventListener("mouseenter",kepNagyit)
    function kepNagyit(){
        document.querySelector("#viktor").classList.add("nagykep")
        document.querySelector("#viktor").classList.remove("kiskep")
    }
    document.querySelector("#viktor").addEventListener("mouseleave",kepKicsi)
    function kepKicsi(){
        document.querySelector("#viktor").classList.remove("nagykep")
        document.querySelector("#viktor").classList.add("kiskep")
        
    }
}

function esemenyKezeles4(){
    let taroloDivek = document.querySelectorAll("section .tarolo div")
    let hossz = taroloDivek.length
    for (let i = 0; i < hossz; i++){
        taroloDivek[i].addEventListener("click",kattintasra)
    }
    function kattintasra(event){
        document.querySelector(".megjelenito").innerHTML = event.target.innerHTML
    }
}