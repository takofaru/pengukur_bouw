let isKeMeter = true;
let isMute = false;
const btnBouw = document.getElementById("keBouw");
const btnMeter = document.getElementById("keMeter");
const processDiv = document.getElementById("process");
const doneDiv = document.getElementById("done");
const music = document.getElementById("music");
const sound = document.getElementById("bgSound");


function NoNegativeInput(inputId) {
    document.getElementById(inputId).addEventListener('input', function() {
        if (this.value < 0) {
          this.value = 0;  
        }
    });
}

function updateButtonState() {

    if (isKeMeter === true) {
        btnMeter.classList.remove("disabled");
        btnBouw.classList.add("disabled");
    } else {
        btnMeter.classList.add("disabled");
        btnBouw.classList.remove("disabled");
    }
}

function setMeter() {
    isKeMeter = true;
    console.log("True")
    updateButtonState();
}

function setBouw() {
    isKeMeter = false;
    console.log("False")
    updateButtonState();
}

function convert() {
    const value = parseFloat(document.getElementById("inputNilai").value);
    const resultElement = document.getElementById("result");

    if (isNaN(value)) {
        doneDiv.classList.add("active");
        resultElement.innerText = "Masukkan angka yang valid.";
        processDiv.classList.remove("active");
        return;
    }

    doneDiv.classList.remove("active");
    processDiv.classList.add("active");

    setTimeout(function () {
        processDiv.classList.remove("active");
        doneDiv.classList.add("active");

        if (isKeMeter === true) {
            const meter = value * 7096.5;
            resultElement.innerText = `${value} bouw = ${meter.toFixed(2)} m²`;
        } else {
            const bouw = value / 7096.5;
            resultElement.innerText = `${value} m² = ${bouw.toFixed(4)} bouw`;
        }

    }, 5000);
}

function toggleMusic() {
    if (isMute === false) {
        isMute = true;
        music.value = "music_off";
        sound.muted = true;
    } else {
        isMute = false;
        music.value = "music_note";
        sound.muted = false;
    }
}

updateButtonState();
NoNegativeInput('inputNilai');
