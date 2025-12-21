// Initialize EmailJS with your public key
// IMPORTANT: Sign up at https://www.emailjs.com/ and replace with your keys
// This is a demo key - replace with your actual EmailJS credentials


// (function () {
//     emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
// })();

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const submitBtn = document.querySelector(".submit-btn");

// Mobile menu
burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        burger.classList.remove("active");
    });
});

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:mailtaoufiq@gmail.be?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoLink;

    successMessage.classList.add("show");
    contactForm.reset();

    setTimeout(() => {
        successMessage.classList.remove("show");
    }, 5000);
});
