// Assignment code here
var length;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
character = ["!","@","#","$","%","^","&","*","(",")","_","+","{","}","/",":",";","'","?","=","-"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
space = [];
var choices;
var toUpper = function (x) {
    return x.toUpperCase();
};
// Get references to the #generate element
var get = document.querySelector("#generate");

// Write password to the #password input
get.addEventListener("click", function () {
    var pass = generatePassword();
    document.getElementById("password").placeholder = pass;
});

function generatePassword() {
    length = parseInt(prompt("How many characters? (between 8 and 128)"));
    if (length < 8 || length > 128) {
      length = parseInt(prompt("Number must be between 8 and 128"));
    } else {
        confirmNumber = confirm("Do you want numbers?");
        confirmCharacter = confirm("Do you want special characters?");
        confirmUppercase = confirm("Do you want uppercase letters?");
        confirmLowercase = confirm("Dow you want lowercase letters?");
    };
    if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, lower, upper);
    }
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, upper);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, lower);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(lower, upper);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lower, upper);
    }
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(lower);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(upper);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = lower.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = lower.concat(upper);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(upper);
    }
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = lower;
    }
    else if (confirmUppercase) {
        choices = space.concat(upper);
    };
    var password = [];

    for (var i = 0; i < length; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    var pass = password.join("");
    UserInput(pass);
    return pass;
}
function UserInput(pass) {
    document.getElementById("password").textContent = pass;
}