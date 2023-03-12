//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=5e7be04a943b5102f746ab0afd8f1056&unit=matric

const cityselect= document.querySelector(".city"),
tempselct= document.querySelector(".temp"),
humanity=document.querySelector(".huminity"),
wind=document.querySelector(".wind"),
serchbox=document.querySelector(".search input"),
serchbtn=document.querySelector(".search button"),
weathericon=document.querySelector(".weather-icon"),
weatherdiv=document.querySelector(".weather"),
errn=document.querySelector(".erron");





const apiKey="5e7be04a943b5102f746ab0afd8f1056";

const apiurl="https://api.openweathermap.org/data/2.5/weather?unit=matric&q=";

async function checkweather(city){
    const respose= await fetch(apiurl + city + `&appid=${apiKey}`);
   
   if(respose.status == 404){
        errn.style.display="block";
        weatherdiv.style.display="none";
       
   }else{
    var data = await respose.json()
    console.log(data);
    
    cityselect.innerHTML=data.name;
    tempselct.innerHTML= Math.round(data.wind.deg) + "°c";
    humanity.innerHTML =data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "clouds"){
        weathericon.src ="images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src ="images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src ="images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src ="images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src ="images/mist.png";
    }
    weatherdiv.style.display="block";
    errn.style.display="none";
   }
   
  
  

}

serchbtn.addEventListener("click",()=>{
    checkweather(serchbox.value);
    

})

