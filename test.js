console.log("Hello, World!");

function Kep_betesz() {
    // This looks good!
    document.getElementById("kep_helye").innerHTML =
        "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrtH3saDhvhN-4jMNzvWJVqSvCvnKd1QjkA&s' alt='kep'>";
}

function Kep_elrejt() {
    document.getElementById("kep_helye").innerHTML = "";
}


function stilusValtas() {
    let doboz = document.getElementById("box");
    let szoveg = document.getElementById("box_text");

    // Changing CSS styles
    doboz.style.backgroundColor = "#333";
    doboz.style.color = "white";

    // Changing the text
    szoveg.innerText = "Éjszakai mód";
}

function stilusAlaphelyzet() {
    let doboz = document.getElementById("box");
    let szoveg = document.getElementById("box_text");

    // Resetting styles
    doboz.style.backgroundColor = "white";
    doboz.style.color = "black";

    // Resetting text
    szoveg.innerText = "Nappali mód";
}