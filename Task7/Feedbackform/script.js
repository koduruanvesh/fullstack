// Highlight field
function highlight(element) {
    element.classList.add("highlight");
}

// Remove highlight
function removeHighlight(element) {
    element.classList.remove("highlight");
}

// Validate name
function validateName() {
    let name = document.getElementById("name").value;
    let regex = /^[A-Za-z ]+$/;

    if (!regex.test(name)) {
        document.getElementById("name").style.border = "2px solid red";
    } else {
        document.getElementById("name").style.border = "2px solid green";
    }
}

// Validate email
function validateEmail() {
    let email = document.getElementById("email").value;
    let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!regex.test(email)) {
        document.getElementById("email").style.border = "2px solid red";
    } else {
        document.getElementById("email").style.border = "2px solid green";
    }
}

// Submit function
function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;

    if (name === "" || email === "" || feedback === "") {
        alert("Please fill all fields!");
    } else {
        alert("Feedback submitted successfully!");
    }
}
