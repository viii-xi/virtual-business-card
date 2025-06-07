document.addEventListener("DOMContentLoaded", () => {
    const contactToggle = document.getElementById("contactToggle");
    const contactInfo = document.getElementById("contactInfo");
  
    contactToggle.addEventListener("click", () => {
      const isVisible = contactInfo.classList.contains("visible");
  
      contactInfo.classList.toggle("visible");
      contactInfo.classList.toggle("hidden");
  
      contactToggle.textContent = isVisible ? "Contact Me" : "Hide Contact";
    });
  });
  
  