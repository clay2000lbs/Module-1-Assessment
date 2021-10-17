const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter a password to validate: ", function(passwordInput) {
    if (passwordInput.length >= 10) {
        console.log("Password Authenticated")
        reader.close()


    } else {
        console.log("Please enter a password that is 10 characters long.")
        reader.close()
    }
})