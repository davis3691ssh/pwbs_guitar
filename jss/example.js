// const password = prompt("enter a password:");

// if (password.length >= 8) {
//     if (password.indexOf(' ') === -1) {
//         console.log("EXCELLENT!! ENJOY YOUR PASSWORD BUT DON'T SHOW THIS TO ANYONE.");
//     } else {
//         console.log("ERROR. YOUR PASSWORD SHOULD NOT HAVE ANY SPACES!!");
//     }
// } else {
//     console.log("PASSWORD IS TOO SHORT. YOUR PASSWORD SHOULD HAVE MORE THAN 8+ LETTERS.");
// }

// const input = prompt("input:");

// if (Navigator) {
//     console.log('truthy');
// } else {
//     console.log('falsy');
// }


const age = -1;
if (age >= 0 && age < 5 || age >= 65) {
    console.log("free")
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log('$20')
}

const day = 8;
switch (day) {
    case 1:
        console.log("monday")
        break
    case 2:
        console.log('tuesday')
        break
    case 3:
        console.log('wednesday')
        break
    case 4:
        console.log('thurdsay')
        break
    case 5:
        console.log('friday')
        break
    case 6:
    case 7:
        console.log('weekend')
        break
    default:
        console.log("I don't know that")
}