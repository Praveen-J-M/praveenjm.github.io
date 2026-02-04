document.querySelectorAll('.circle-skill').forEach(skill => {
  const percent = skill.getAttribute('data-percent');
  const circle = skill.querySelector('circle:nth-child(2)');
  const offset = 314 - (314 * percent) / 100;
  circle.style.strokeDashoffset = offset;
});


(function () {
    emailjs.init("b4lXR07es-3UMm-z-"); // YOUR REAL PUBLIC KEY
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_ojbgkws",    // YOUR REAL SERVICE ID
        "template_nv4irxn",   // CONTACT US TEMPLATE ID
        this
    ).then(
        function () {
            alert("Message sent successfully! ✅");
            document.getElementById("contact-form").reset();
        },
        function (error) {
            console.error("EmailJS Error:", error);
            alert("Failed to send message ❌");
        }
    );
});
