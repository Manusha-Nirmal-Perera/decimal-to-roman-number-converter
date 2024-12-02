const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');
const numberInput = document.getElementById('number');


function convert(number) {
    let romanNum = "";
    
    if (number <= 0 || number >= 4000) {
        if (number <= 0) {
            output.innerText = "Please enter a number greater than or equal to 1.";
        } else {
            output.innerText = "Please enter a number less than or equal to 3999.";
        }
        output.classList.remove("hidden");
        return;
    }
    
    const romanMap = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];
    
    for (let i = 0; i < romanMap.length; i++) {
        while (number >= romanMap[i].value) {
            romanNum += romanMap[i].numeral;
            number -= romanMap[i].value;
        }
    }
    
    output.innerText = romanNum;
    output.classList.remove("hidden");
}

convertButton.addEventListener("click", function () {
    const numStr = document.getElementById('number').value;
    const numInt = parseInt(numStr);
    if (isNaN(numInt)) {
        output.innerText = "Please enter a valid number.";
        output.classList.remove("hidden");
    } else if(numInt < 0){
        output.innerText = "Please enter a number greater than or equal to 1";
        output.classList.remove("hidden");
    } else if(numInt >= 4000){
        output.innerText = "Please enter a number less than or equal to 3999";
        output.classList.remove("hidden");
    } else {
        convert(numInt);
    }
});

numberInput.addEventListener("focus", function () {
    numberInput.value = "";
    output.classList.add("hidden");
});
