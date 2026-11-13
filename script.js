// 1. DARK MODE / LIGHT MODE
var themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light Mode";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
};

// 2. MOBILE MENU (opens and closes the menu on small screens)
var menuBtn = document.getElementById("menuBtn");
var navMenu = document.getElementById("navMenu");
var navLinks = document.querySelectorAll("nav a");

menuBtn.onclick = function () {
  navMenu.classList.toggle("show");
};

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = function () {
    navMenu.classList.remove("show");
  };
}

// 3. HIGHLIGHT THE CURRENT SECTION IN THE NAVBAR
var sections = document.querySelectorAll("section");

window.onscroll = function () {
  var current = "home";
  for (var i = 0; i < sections.length; i++) {
    if (window.scrollY >= sections[i].offsetTop - 120) {
      current = sections[i].id;
    }
  }
  for (var j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove("active");
    if (navLinks[j].getAttribute("href") === "#" + current) {
      navLinks[j].classList.add("active");
    }
  }
};

// 4. PROJECT "VIEW DETAILS" BUTTONS
var detailBtns = document.querySelectorAll(".detailsBtn");

for (var k = 0; k < detailBtns.length; k++) {
  detailBtns[k].onclick = function () {
    var text = this.nextElementSibling;
    if (text.style.display === "block") {
      text.style.display = "none";
      this.textContent = "View Details";
    } else {
      text.style.display = "block";
      this.textContent = "Hide Details";
    }
  };
}

// 5. CONTACT FORM VALIDATION
var form = document.getElementById("contactForm");
var formMsg = document.getElementById("formMsg");

form.onsubmit = function (event) {
  event.preventDefault();   // stop the page from reloading

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMsg.style.color = "red";
    formMsg.textContent = "Please fill in all the fields.";
  } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    formMsg.style.color = "red";
    formMsg.textContent = "Please enter a valid email address.";
  } else {
    formMsg.style.color = "green";
    formMsg.textContent = "Thank you, " + name + "! Your message was submitted.";
    form.reset();
  }
};
