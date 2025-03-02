let username = prompt("Nhap ten cua ban :");
let password = prompt("Nhap mat khau:");

if (username ==="ADMIN") {
    if (password ==="TheMaster") {
        console.log("Welcome");
    } else if (password === null) {
        console.log("Cancelled");
    } else {
        console.log("Wrong password");
    }
} else if (username === null) {
    console.log("Cancelled");
} else {
    console.log("I Don't know you");
}
