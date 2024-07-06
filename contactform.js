document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");


    // function showAlert(type, message) {
    //     const alertBox = document.createElement('div');
    //     alertBox.classList.add('alert', type);
        
    //     const icon = document.createElement('i');
    //     icon.classList.add('fa', type === 'success' ? 'fa-regular fa-circle-check' : 'fa-exclamation-circle');
        
    //     const text = document.createElement('span');
    //     text.innerHTML = `<strong>${message}</strong>`;

    //     alertBox.appendChild(icon);
    //     alertBox.appendChild(text);

    //     document.body.appendChild(alertBox);

    //     alertBox.style.display = 'flex';

    //     setTimeout(() => {
    //         alertBox.style.display = 'none';
    //         document.body.removeChild(alertBox);
    //     }, 5000); // Hide alert after 5 seconds
    // }

    function sendEmail() {
        const formData = new FormData(form);
        
        fetch(form.action, {
            method: 'POST',
            body: formDataS
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Message sent successfully! I will reply to you soonS.");
                form.reset(); // Reset the form after successful email send
            } else {
                alert("Message failed to send!");
            }
        })
        .catch(error => {
            alert("There was an error sending the message. Please try again later.");
            console.error("Error:", error);
        });
    }
    
    // Function to check inputs and show errors if necessary
    function checkInputs() {
        const items = document.querySelectorAll(".item");
    
        let allValid = true; // Track form validity
    
        for (const item of items) {
            if (item.value == "") {
                item.classList.add("error");
                item.parentElement.classList.add("error");
                item.parentElement.querySelector('.error-txt').style.display = "block"; // Show error message
                allValid = false; // Set form validity to false
            }
            else {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
                item.parentElement.querySelector('.error-txt').style.display = "none"; // Hide error message
            }
    
            if (item === email && item.value !== "") {
                checkEmail();
            }
    
            if (items[1].value != "") {
                 checkEmail();
            }
    
            items[1].addEventListener("keyup", () => {
                 checkEmail();
            });
    
            item.addEventListener("keyup", () => {
                if (item.value != "") {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");
                    item.parentElement.querySelector('.error-txt').style.display = "none"; // Hide error message
    
                }
                else {
                    item.classList.add("error");
                    item.parentElement.classList.remove("error");
                    item.parentElement.querySelector('.error-txt').style.display = "block"; // Show error message
                }
            });
        }
    
        return allValid; // Return form validity status
    }
    
    
    function checkEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errorTextEmail = document.querySelector(".error-txt.email");
    
        if (!email.value.match(emailRegex)) {
            email.classList.add("error");
            email.parentElement.classList.add("error");
            email.parentElement.querySelector('.error-txt').style.display = "block"; // Show error message
            
            if (email.value != "") {
                errorTextEmail.innerText = "Enter a valid email address";
            }
            else {
                errorTextEmail.innerText = "Email can't be blank";
            }
        }
        else {
            email.classList.remove("error");
            email.parentElement.classList.remove("error");
            email.parentElement.querySelector('.error-txt').style.display = "none"; // Hide error message
        }
    }
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const isValid = checkInputs(); // Validate form inputs
        
    
        if (isValid && email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            sendEmail(); // Send email if form is valid
            // form.reset();
            // return false;
        } else {
            // Show error messages if form is not valid
            const items = document.querySelectorAll(".item");
            for (const item of items) {
                if (item.value === "") {
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                    item.parentElement.querySelector('.error-txt').style.display = "block"; // Show error message
                }
            }
            alert("Please fill in all fields correctly.");
        }
    
    })
});