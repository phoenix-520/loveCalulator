// let loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) * 1;

// if (loveScore > 70) {
//     alert("Your love score is: " + loveScore + "%" + " your both true love!");
// }
// if (loveScore > 30 && loveScore <= 70) {
//     alert("Your love score is: " + loveScore + "%");
// }
// if (loveScore <= 30) {
//     alert("Your love score is: " + loveScore + "%" + "you go together like oil and water");
// } else {
//     alert("Your love score is: " + loveScore + "%");
// }



let click = document.getElementById("calc-btn");
click = Math.random() * 100;
click = Math.floor(click) * 1;

function loveCalc() {
    if (click > 70) {
        alert("Your love score is: " + click + "%" + " Your both love each other like Romeo and Juelette!");
    }
    if (click > 30 && click <= 60) {
        alert("Your love score is: " + click + "%" + " Gotta work out on your relationship");
    }
    if (click <= 30) {
        alert("Your love score is: " + click + "%" + " You go together like oil and water");
    } else {
        //   alert("Your love score is: " + click + "%");
        alert("Take care of your soulmate!!!");
    }
}