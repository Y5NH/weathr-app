let lon = document.getElementById("lon");
let lat = document.getElementById("lat");
let res = document.getElementById("result");
let btn = document.getElementById("searcBtn");

btn.addEventListener("click",async function(){

  let lonv = lon.value;
  let latv = lat.value;
  let url = "https://api.openweathermap.org/data/2.5/forecast/daily?lat="+latv+"&lon="+lonv+"&cnt=1&units=metric&appid=4de817a65a1a4336cc9d6f13de2233e1"
  let response = await fetch(url);
  let data = await response.json();
  
  let cName =document.createElement("p");
  let t = data.list[0].temp.day;
  let n= data.city.name;
  cName.textContent = `the city name is ${n} and the tempreture based on our historical data is  ${t}°C`;

  res.appendChild(cName);

})


