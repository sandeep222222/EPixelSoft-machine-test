document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
  
    
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }
  
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }
  
    
  
    const navLink = document.querySelectorAll(".nav__link");
  
    const linkAction = () => {
      const navMenu = document.getElementById("nav-menu");
  
      navMenu.classList.remove("show-menu");
    };
    navLink.forEach((n) => n.addEventListener("click", linkAction));
  
    const form = document.getElementById("signup-form");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
  
    
    const passwordError = document.getElementById("passwordError");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      let isValid = true;
  
     
      if (firstName.value.trim() === "") {
        isValid = false;
        console.log("First name is required");
      }
  
    
      if (lastName.value.trim() === "") {
        isValid = false;
        console.log("Last name is required");
      }
  
      
      if (!isValidEmail(email.value)) {
        isValid = false;
        console.log("Please enter a valid email address");
      }
  
    
      if (!isValidPhoneNumber(phone.value)) {
        isValid = false;
        console.log("Please enter a valid phone number");
      }
  
      
      if (password.value.length < 8) {
        isValid = false;
        passwordError.classList.add("active");
      } else {
        passwordError.classList.remove("active");
      }
  
   
      if (isValid) {
        const formData = {
          first_name: firstName.value.trim(),
          last_name: lastName.value.trim(),
          email: email.value.trim(),
          phone_number: phone.value.trim(),
          password: password.value,
        };
        console.log(formData);
      }
    });
  
    
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function isValidPhoneNumber(phone) {
      const phoneRegex = /^[0-9]{10}$/;
      return phoneRegex.test(phone);
    }
  
  
    
  });