
//-----------Interaktiv websida, när de gäller "About me" sidan-----------//
var tablinks = document.getElementsByClassName("tab-links");
var tabcon = document.getElementsByClassName("tab-con");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-l");
    }
    for (tc of tabcon) {
        tc.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-l");
    document.getElementById(tabname).classList.add("active-tab");
}

// function för att kunna öppna stänga sido navigering när man använder sig av telefon

var phonem = document.getElementById("phone-menu");

function openmenu() {
    phonem.style.right = "0";
}

function closemenu() {
    phonem.style.right = "-200px"
}

// easter egg nummer 1
let keypress = 'sami';
window.addEventListener('keyup', (k) => {
    keypress += k.key;
    keypress = keypress.slice(-4)

    if (keypress === "sami") {
        alert("unlock your true pontetial, write illusion to awaken")
    }

    console.log(keypress);
})


// easter egg nummer 2
const jsConfetti = new JSConfetti()
let pressedkeys = 'harrypotter'

window.addEventListener('keypress', (o) => {
    pressedkeys += o.key;
    pressedkeys = pressedkeys.slice(-8)

    if (pressedkeys === 'illusion') {
        jsConfetti.addConfetti({
            emojis: ['💫', '✨', '💥', '✨', '💫', '💥']
        })
    }
    console.log(pressedkeys);
})


// easter egg 3 on click ändra färg på sami goran i header.
function changecolor() {
    const change = document.getElementById("change1");

    // hämta färgen du vill ha
    const currentColor = change.style.color;

    // om färgen är röd, ändra tillbaka till standardfärg (blå), annars ändras texten till röd
    if (currentColor === "red") {
        change.style.color = "rgb(3, 193, 246)"; // byt tillbaka till orginal färg (blå)
    } else {
        change.style.color = "red"; // ändrar till röd färg
    }
    const changeTextC = document.getElementById("change1");
    changeTextC.addEventListener("click", changecolor);
}
changecolor();

// Väljer elementet med id "change1" och använder addEventListner



//*fundering*, varför kan man lägga en arrow funciton innut i AddEventListner
//men man kan inte lägga AddEventListner innut i en function?

// -----chatgpt svar på fel placering av min addEventListner---
// Problemet med din kod är att du försöker lägga till händelselyssnaren
// changecolor() inuti själva changecolor() - funktionen. Detta kommer att orsaka
// att händelselyssnaren läggs till först när funktionen changecolor() körs,
// och den körs bara när du klickar på elementet.Detta är inte den önskade
// beteckningen.



