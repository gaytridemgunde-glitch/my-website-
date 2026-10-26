let totalItems = 0;
let totalPrice = 0;

// Welcome Message
function welcomeMessage() {
    alert("Welcome to Royal Hotel!");
}



// Contact Form
function submitForm(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("message").innerText =
        "Thank You " + name +
        "! We will contact you soon.";

    document.getElementById("name").value = "";
}
 