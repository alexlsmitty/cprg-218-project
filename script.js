// Select the menu opener button and navigation elements
const menuOpener = document.getElementById('menu-opener');
const navigation = document.getElementById('navigation');

// Add click event listener to toggle the 'invisible' class
menuOpener.addEventListener('click', () => {
  navigation.classList.toggle('invisible');
  console.log('clicked');
});

// Handling form submission with EmailJS
document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("h5Ey-krXzE_bUHxyL"); // EmailJS User ID

    const form = document.getElementById('commissionForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        emailjs.sendForm('service_hltaybp', 'template_koj6ec7', form) // Pass the form element here
            .then(() => {
                responseMessage.style.display = "block";
                responseMessage.textContent = "Your request has been submitted!";
                form.reset(); // Clear the form fields
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                responseMessage.style.display = "block";
                responseMessage.style.color = "red";
                responseMessage.textContent = "There was an error submitting your request. Please try again.";
            });
    });
});
