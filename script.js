let mode = "bouwToMeter"; // Default 

function NoNegativeInput(inputId) {
    document.getElementById(inputId).addEventListener('input', function() {
        if (this.value < 0) {
          this.value = 0;  
        }
      });
    }

function updateButtonState() {
    const btnBouw = document.getElementById("TombolBouwKeMeter");
    const btnMeter = document.getElementById("TombolMeterKeBouw");

    if (mode === "bouwToMeter") {
        btnBouw.disabled = true;
        btnMeter.disabled = false;
    } else {
        btnBouw.disabled = false;
        btnMeter.disabled = true;
    }
}

function setModeBouwToMeter() {
    mode = "bouwToMeter";
    document.getElementById("currentMode").innerText = "Mode saat ini: Bouw ke M²";
    updateButtonState();
}

function setModeMeterToBouw() {
    mode = "meterToBouw";
    document.getElementById("currentMode").innerText = "Mode saat ini: M² ke Bouw";
    updateButtonState();
}

function convert() {
    const value = parseFloat(document.getElementById("inputNilai").value);
    const resultElement = document.getElementById("result");

    if (isNaN(value)) {
        resultElement.innerText = "Masukkan angka yang valid.";
        return;
    }

    if (mode === "bouwToMeter") {
        const meter = value * 7096.5;
        resultElement.innerText = `${value} bouw = ${meter.toFixed(2)} m²`;
    } else {
        const bouw = value / 7096.5;
        resultElement.innerText = `${value} m² = ${bouw.toFixed(4)} bouw`;
    }
}

updateButtonState();
NoNegativeInput('inputNilai');
