// buttons start

document.getElementById("left-menu").addEventListener("change", (ev) => {
  let Leftmenubutton = ev.target;
  let Leftmainside = document.querySelector(".main__left-side-container");

  if (Leftmenubutton.checked) {
    document.querySelector(".icon-left-menu").innerHTML =
      '<i class="fa fa-angle-up" aria-hidden="true"></i>';

    Leftmainside.classList.toggle("open");
  } else {
    document.querySelector(".icon-left-menu").innerHTML =
      '<i class="fa fa-angle-down" aria-hidden="true"></i>';
    Leftmainside.classList.toggle("open");
  }
});

// buttons end

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav")[0];
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

let modal = document.querySelector(".changer-theme");
let openButton = document.getElementById("changer-theme-icon");

openButton.onclick = function () {
  modal.classList.toggle("open");
};

let search = document.querySelector(".header__search-container");
let opensearch = document.querySelector(".search-icon");

opensearch.onclick = function () {
  search.classList.toggle("open");
};

// //colors switch

let default_color = document.querySelector(".default_color");

let first = document.querySelector(".first");

let second = document.querySelector(".second");

let fourth = document.querySelector(".fourth");

let fifth = document.querySelector(".fifth");

if (localStorage.getItem("--temple-main-color") == "#a83038") {
  document.documentElement.style.setProperty("--temple-main-color", "#a83038");
} else if (localStorage.getItem("--temple-main-color") == "#2776aa") {
  document.documentElement.style.setProperty("--temple-main-color", "#2776aa");
} else if (localStorage.getItem("--temple-main-color") == "#5e8351") {
  document.documentElement.style.setProperty("--temple-main-color", "#5e8351");
} else if (localStorage.getItem("--temple-main-color") == "#967294") {
  document.documentElement.style.setProperty("--temple-main-color", "#967294");
} else if (localStorage.getItem("--temple-main-color") == "#927b76") {
  document.documentElement.style.setProperty("--temple-main-color", "#927b76");
}

default_color.onclick = function () {
  document.documentElement.style.setProperty("--temple-main-color", "#a83038");
  localStorage.setItem("--temple-main-color", "#a83038");
};

first.onclick = function () {
  document.documentElement.style.setProperty("--temple-main-color", "#2776aa");
  localStorage.setItem("--temple-main-color", "#2776aa");
};

second.onclick = function () {
  document.documentElement.style.setProperty("--temple-main-color", "#5e8351");
  localStorage.setItem("--temple-main-color", "#5e8351");
};

fourth.onclick = function () {
  document.documentElement.style.setProperty("--temple-main-color", "#967294");
  localStorage.setItem("--temple-main-color", "#967294");
};

fifth.onclick = function () {
  document.documentElement.style.setProperty("--temple-main-color", "#927b76");
  localStorage.setItem("--temple-main-color", "#927b76");
};

document.getElementById("darkmode").addEventListener("change", (ev) => {
  let btn = ev.target;
  // если чекбокс включен
  if (btn.checked) {
    localStorage.setItem("darkmode", "on");
    document.documentElement.style.setProperty("--bg-block", "#22272b");
    document.documentElement.style.setProperty("--bg-body", "#171c20");
    document.documentElement.style.setProperty("--color-border", "#393d41");
    document.documentElement.style.setProperty(
      "--color-text-description",
      "rgb(139, 139, 139)"
    );
    document.documentElement.style.setProperty(
      "--color-text-title",
      "rgb(139, 139, 139)"
    );
    document.documentElement.style.setProperty(
      "--block-swadow",
      "0 0 0 rgba(0, 0, 0, 0.0)"
    );
  } else {
    localStorage.setItem("darkmode", "off");
    document.documentElement.style.setProperty("--bg-block", "#fff");
    document.documentElement.style.setProperty("--bg-body", "#f4f4f4");
    document.documentElement.style.setProperty(
      "--color-border",
      "rgb(230, 230, 230)"
    );
    document.documentElement.style.setProperty(
      "--color-text-description",
      "rgb(75, 75, 75)"
    );
    document.documentElement.style.setProperty(
      "--color-text-title",
      "rgb(75, 75, 75)"
    );
    document.documentElement.style.setProperty(
      "--block-swadow",
      "0 0 25px rgba(0, 0, 0, 0.1)"
    );
  }
});

if (localStorage.getItem("darkmode") == "on") {
  document.getElementById("darkmode").setAttribute("checked", "checked");
  localStorage.setItem("darkmode", "on");
  document.documentElement.style.setProperty("--bg-block", "#22272b");
  document.documentElement.style.setProperty("--bg-body", "#171c20");
  document.documentElement.style.setProperty("--color-border", "#393d41");
  document.documentElement.style.setProperty(
    "--color-text-description",
    "rgb(139, 139, 139)"
  );
  document.documentElement.style.setProperty(
    "--color-text-title",
    "rgb(139, 139, 139)"
  );
  document.documentElement.style.setProperty(
    "--block-swadow",
    "0 0 0 rgba(0, 0, 0, 0.0)"
  );
}

// по умолчанию светлая тема
else {
  localStorage.setItem("darkmode", "off");
  document.documentElement.style.setProperty("--bg-block", "#fff");
  document.documentElement.style.setProperty("--bg-body", "#f4f4f4");
  document.documentElement.style.setProperty(
    "--color-border",
    "rgb(230, 230, 230)"
  );
  document.documentElement.style.setProperty(
    "--color-text-description",
    "rgb(75, 75, 75)"
  );
  document.documentElement.style.setProperty(
    "--color-text-title",
    "rgb(75, 75, 75)"
  );
  document.documentElement.style.setProperty(
    "--block-swadow",
    "0 0 25px rgba(0, 0, 0, 0.1)"
  );
}

///// popup
const btns = document.querySelectorAll(".open-modal");
const modalOverlay = document.querySelector(".modal-overlay ");
const modals = document.querySelectorAll(".modal");
const IconcloseModals = document.querySelector(".close-modal-icon ");

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});

modalOverlay.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }

  if (e.target == IconcloseModals) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});
