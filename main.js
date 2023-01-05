const api = {
    key: "6a02c1c18597cdb4a5b5155d289fb5ef",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  var button= document.querySelector('.submit');


  button.addEventListener('click', function(name){
  const searchbox = document.querySelector('.search-box');
  
      getResults(searchbox.value);
  
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    
  
    let curwea = document.querySelector('.current .weather');
        curwea.innerText = weather.weather[0].main;
       
        $(document).ready(function() {
          $("button").click(function() {
              var imageUrl = "bd.jpg";
              $(".Image").css("background-image", "url(" + imageUrl + ")");
          });
      });  
     
    
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
})