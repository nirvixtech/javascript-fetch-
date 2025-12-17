const apiKey="893f9917399037a13998f907495c409b";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


