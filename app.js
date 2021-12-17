let panels = document.querySelectorAll(".panel");
let active = document.querySelector(".active");
let check_weather = document.querySelector("#check_weather");
let giphy_search = document.querySelector("#giphy_search");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    RemoveActiveClasses();
    panel.classList.add("active");
    console.log(panel);
  });
});

function RemoveActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

giphy_search.addEventListener("click", () => {
  window.location.assign("gify.html");
});

check_weather.addEventListener("click", () => {
  window.location.assign("weather.html");
});

git_user.addEventListener("click", () => {
  window.location.assign("user_search.html");
});

count_down.addEventListener("click", () => {
  window.location.assign("ny.html");
});
