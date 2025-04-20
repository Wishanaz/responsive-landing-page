function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Allows re-animation
            }
        });
    }, { threshold: 0.2 });

    features.forEach(feature => observer.observe(feature));
});
