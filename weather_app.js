let city_name = document.querySelector("#city_name");
let form = document.querySelector("form");
let submitBtn = document.querySelector("#submitBtn");
let display_data = document.querySelector(".display_data");

let Weather_URL = "https://api.openweathermap.org/data/2.5/weather";
let API_KEY = "a683f9d7313c404b65a5cdac183738c1";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(Weather_URL + "?q=" + city_name.value + "&appid=" + API_KEY, {
    mode: "cors",
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      Display(data);
    })
    .catch((err) => console.error(err))
    .finally();
  {
    city_name.value = "";
  }

  function Display(data) {
    display_data.innerHTML = `
         <div>
         <ul style="list-style:none; color:light-black; font-size:20px;">
         <li style="margin:20px;">The city entered by you is ${data.name}.</li>
         <li style="margin:20px">The temperature today is ${Math.floor(
           data.main.temp - 273.15
         )}°C. </li>
         <li style="margin:20px">The city has ${
           data.weather[0].description
         }. </li>
         <li><button style="font-size: 15px;
         border-radius: 20px;
         border: 2px solid grey;
         padding: 20px;
         margin: 20px;
         cursor: pointer;" target="_blank"><a href= "https://www.wikipedia.com" style="text-decoration: none;">Learn more about the city</button></li>
         </ul> 
         </div>
        
        `;
  }
});
