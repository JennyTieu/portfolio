'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


const setTheme = function (theme) { document.documentElement.className = theme; }
/* // color toggle
const toggleSwitch = document.querySelector('input[name=color-mode]');
const root = document.querySelector(':root');

toggleSwitch.addEventListener(function switchTheme() {
  if (toggleSwitch.checked) {
    root.style.setAttribute('dark-mode')
  } else {
    root.style.set('light-mode');
  }
}) */


const x = document.getElementById("language-toggle");
const engTexts = document.querySelectorAll("[engText]");
const deTexts = document.querySelectorAll("[deText]");



x.addEventListener('change', function () {
  for (let i = 0; i < engTexts.length; i++) {
    if (x.checked) {
      engTexts[i].style.display = "none";
      deTexts[i].style.display = "block";
    } else {
      deTexts[i].style.display = "none";
      engTexts[i].style.display = "block";
    }
  }
})


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const engform = document.querySelector("[data-form-eng]");
const engformInputs = document.querySelectorAll("[data-form-input-eng]");
const engformBtn = document.querySelector("[data-form-btn-eng]");

// add event to all form input field
for (let i = 0; i < engformInputs.length; i++) {
  engformInputs[i].addEventListener("eng-input", function () {

    // check form validation
    if (engform.checkValidity()) {
      engformBtn.removeAttribute("disabled");
    } else {
      engformBtn.setAttribute("disabled", "");
    }

  });
}

// contact form variables
const deform = document.querySelector("[data-form-de]");
const deformInputs = document.querySelectorAll("[data-form-input-de]");
const deformBtn = document.querySelector("[data-form-btn-de]");

// add event to all form input field
for (let i = 0; i < deformInputs.length; i++) {
  deformInputs[i].addEventListener("de-input", function () {

    // check form validation
    if (deform.checkValidity()) {
      deformBtn.removeAttribute("disabled");
    } else {
      deformBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

