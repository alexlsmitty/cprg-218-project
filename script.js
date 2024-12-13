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
    emailjs.init("alexlsmitty"); //EmailJS user ID

    const form = document.getElementById('commissionForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Preparing data for EmailJS
        const emailData = {
            name: formData.get("name"),
            email: formData.get("email"),
            artType: formData.get("artType"),
            description: formData.get("description"),
            size: formData.get("size"),
        };

        emailjs.sendForm('service_hltaybp', 'template_koj6ec7', this)
        .then(() => {
            responseMessage.style.display = "block";
            responseMessage.textContent = "Your request has been submitted!";
            form.reset();
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            responseMessage.style.display = "block";
            responseMessage.style.color = "red";
            responseMessage.textContent = "There was an error submitting your request. Please try again.";
        });
});
});