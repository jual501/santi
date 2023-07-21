// Number Variables


const hello = prompt("Hello What is your Name");
if (hello === "Santiago" | hello === "SANTIAGO" | hello === "santi"){
    alert("Nice to Meet you " + "Lindo Gatito de Mama AKA: Big Cola");

} else {
    alert("Nice to meet you " + hello);
}
const number1 = prompt("Type Fisrt Number");
const operation = prompt("Put - or + or / or *");
const number2 = prompt("Type Second  Number");
//operations
if (operation === "-"){
    const sustraction = number1 - number2;
    alert(sustraction);
    const elemntH2 = $("<h2>").text("The Answer is " + sustraction);
    $("body").append(elemntH2);
    const date = new Date();
    const elemntH3 = $("<h3>").text("Today " + date);
    $("body").append(elemntH3);
    
} else if (operation === "+"){
    const addition = number1 + number2;
    alert(addition);
} else if (operation === "/"){
    const division = number1 / number2;
    alert(division);
    
} else {
    const multiplication = number1 * number2;
    alert(multiplication);
}