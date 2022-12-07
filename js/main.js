var elTitle1 = document.querySelector(".js-h1");
var elH2 = document.querySelector(".js-h2");
var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elInput2 = document.querySelector(".js-input2");
var elboshi = document.querySelector(".btnboshidan")
var elohiri = document.querySelector(".btnohiridan")



var area = ["Bugati", "Corvett", "BMW", "Lamborghini", "Mersecedes", "Toyota"]
elTitle1.textContent = area

elohiri.addEventListener("click", function () {
    area.pop();
    elTitle1.textContent = area
})
elboshi.addEventListener("click", function () {
    area.shift();
    elTitle1.textContent = area
})


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (elInput.value != "" && elInput2.value + "a".length == 1) {
        area.unshift(elInput.value);
        elTitle1.textContent = area
    }
    else if (elInput.value + "a".length == 1 && elInput2.value != "") {
        area.push(elInput.value);
        elTitle1.textContent = area
    }
    else if (elInput.value != "" && elInput2.value != "") {
        area.unshift(elInput.value);
        area.push(elInput2.value)
        elTitle1.textContent = area
    }
})








































// ----------------------------- MASALA-1 -------------------------------
// function addition(a, b) {
//   return a + b
//   }
// -----------------------------------------------------------------------






// ----------------------------- MASALA-2 -------------------------------
// function convert(minutes) {
// 	return minutes*60}
// -----------------------------------------------------------------------





// ----------------------------- MASALA-3 -------------------------------
// function addition(num) {
//  	return ++num;}
// -----------------------------------------------------------------------




// ----------------------------- MASALA-4 -------------------------------
// function triArea(base, height) {
// 	return (base*height)/2
// }
// -----------------------------------------------------------------------





// ----------------------------- MASALA-5 -------------------------------
// function calcAge(age) {
// 	return age*365
// }
// -----------------------------------------------------------------------





// ----------------------------- MASALA-6 -------------------------------
// function remainder(x, y) {
// 	return x%y;
// }
// -----------------------------------------------------------------------





// ----------------------------- MASALA-7 -------------------------------
// function footballPoints(wins, draws, losses) {
// 	return (wins*3)+(draws*1)
// }
// -----------------------------------------------------------------------





// ----------------------------- MASALA-8 -------------------------------
// function points(twoPointers, threePointers) {
// 	return twoPointers*2+threePointers*3
// }
// -----------------------------------------------------------------------





// ----------------------------- MASALA-9 -------------------------------
// function lessThan100(a, b) {
//     return a + b < 100 ? true : false
// }
// -----------------------------------------------------------------------





// ----------------------------- MASALA-10 -------------------------------
// function animals(chickens, cows, pigs) {
//     return chickens * 2 + (cows + pigs) * 4
// }
// -----------------------------------------------------------------------