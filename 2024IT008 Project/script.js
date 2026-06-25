// Ensure script works inside the DOM context pipeline
document.addEventListener("DOMContentLoaded", function () {
    
    // Grab Form elements
    const userForm = document.getElementById("userForm");
    const formOutputBox = document.getElementById("formOutput");
    const outputFullName = document.getElementById("outputFullName");
    const outputEmail = document.getElementById("outputEmail");
    const outputGender = document.getElementById("outputGender");
    const confirmBtn = document.getElementById("confirmBtn");
    const finalStatus = document.getElementById("finalStatus");

    if (userForm) {
        userForm.addEventListener("submit", function (event) {
            // Stop page from standard refreshing
            event.preventDefault(); 

            // Fetch values from all new textbox inputs
            const firstName = document.getElementById("userFirstName").value;
            const lastName = document.getElementById("userLastName").value;
            const emailValue = document.getElementById("userEmail").value;
            const genderValue = document.getElementById("userGender").value;

            // Combine first and last name to output a clean full name string
            outputFullName.innerHTML = `<strong>Full Name:</strong> ${firstName} ${lastName}`;
            outputEmail.innerHTML = `<strong>Email:</strong> ${emailValue}`;
            outputGender.innerHTML = `<strong>Gender:</strong> ${genderValue}`;

            // Make the review warning box appear on page
            formOutputBox.classList.remove("hidden");
            
            // Clear past status indicators
            finalStatus.innerHTML = ""; 
            finalStatus.classList.remove("show-success");
        });
    }

    // Handle Confirm Action with browser popup message
    if (confirmBtn) {
        confirmBtn.addEventListener("click", function () {
            // Trigger popup
            alert("Your Details Saved Successfully!");

            // Display success label block under buttons
            finalStatus.innerHTML = "🎉 <strong>Success!</strong> Profile data has been saved and successfully updated.";
            finalStatus.classList.add("show-success");
        });
    }
});