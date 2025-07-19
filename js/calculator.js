document.addEventListener("DOMContentLoaded", function () {
        const value = document.querySelectorAll("[data-value]");
        const inputCalc = document.getElementById("inputCalculatrice");

 value.forEach((button) => {
    const charactere = /^[0-9%\/\*\-\+=\.]$/;

    button.addEventListener("click", () => {
        const val = button.getAttribute("data-value");

        if (val === "AC") {
            inputCalc.value = "";
        } else if (val === "DEL") {
            inputCalc.value = inputCalc.value.slice(0, -1);
        } else if (val === "=") {
            try {
                inputCalc.value = math.evaluate(inputCalc.value);
            } catch {
                inputCalc.value = "Erreur";
            }
        } else if (charactere.test(val)) {
            inputCalc.value += val;
        }
    });
  });
});
