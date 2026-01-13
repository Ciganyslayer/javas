console.log("Hello, World!");

function Kep_betesz() {
    document.getElementById("kep_helye").innerHTML =
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrtH3saDhvhN-4jMNzvWJVqSvCvnKd1QjkA&s' alt='kep'>";
}

function Kep_elrejt() {
    document.getElementById("kep_helye").innerHTML = "";
}

function stilusValtas() {
    let doboz = document.getElementById("box");
    let szoveg = document.getElementById("box_text");

    doboz.style.backgroundColor = "#333";
    doboz.style.color = "white";

    szoveg.innerText = "Éjszakai mód";
}

function stilusAlaphelyzet() {
    let doboz = document.getElementById("box");
    let szoveg = document.getElementById("box_text");

    doboz.style.backgroundColor = "white";
    doboz.style.color = "black";

    szoveg.innerText = "Nappali mód";
}