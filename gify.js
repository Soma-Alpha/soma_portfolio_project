let API_KEY = "FY9Hpcs8gPrqjN4m7pikYCLlzdv7PH31";

let URL_GIF = "https://api.giphy.com/v1/gifs/translate";

let form = document.querySelector("form");
let search_input = document.querySelector("#search_giphy");
let gif_img = document.querySelector("#image_gif");
let giphyTitle = document.querySelector("#giphy_title");
let submitBtn = document.querySelector("#submit");
let error_handle = document.querySelector("#Error_handle");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitBtn.disabled = true;

  fetch(URL_GIF + "?s=" + search_input.value + "&api_key=" + API_KEY, {
    mode: "cors",
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      if (data.data.images) {
        console.log(data);
        gif_img.src = data.data.images.original.url;
        giphyTitle.textContent = data.data.title;
        error_handle.classList.add("hidden");
      } else {
        throw new Error(" No search results");
      }
    })
    .catch((err) => {
      console.error(err);
      error_handle.textContent = err.message;
      giphyTitle.textContent = "";
      error_handle.classList.remove("hidden");
      gif_img.src = "";
    })
    .finally(() => {
      search_input.value = "";
      submitBtn.disabled = false;
    });
});
