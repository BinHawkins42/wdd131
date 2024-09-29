const themeSelector = document.querySelector(".changeTheme");

function changeTheme() {
  let theme = themeSelector.value;

  if (theme === "dark") {
    let body = document.querySelector("body");
    body.classList.add("dark");

    let image = document.querySelector(".logo");
    image.setAttribute('src', 'img/byui-logo_white.png');
  } else {
    let body = document.querySelector("body");
    body.classList.remove("dark");

    let image = document.querySelector(".logo");
    image.setAttribute('src', 'img/byui-logo_blue.webp');
  }
}

themeSelector.addEventListener('change', changeTheme);