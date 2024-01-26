const apiKey="888f7c86461076f024fdfc7afdc2b99d"
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const inputEl=document.querySelector(".input")
const formEl=document.querySelector(".form")



async function weatherMonitoring(city){
    const response=await fetch(apiURL+city+`&appid=${apiKey}`)

    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".information").style.display="none"
    }
    else
    {
    const data= await response.json()
    console.log(data)
    document.querySelector(".description").innerHTML=data.weather[0].main
    document.querySelector(".temperature").innerHTML=Math.ceil(data.main.temp)+"°C"
    document.querySelector(".weather-info").innerHTML="feels_like:"+data.main.feels_like+"°C"
    document.querySelector(".weather-info1").innerHTML="Humidity"+data.main.humidity+"%"
    document.querySelector(".weather-info2").innerHTML="wind-speed:"+data.wind.speed+"m/s"




    if(data.weather[0].main=="Clouds"){
        document.querySelector(".image_changer").src="images/images.jpg"

    }
    else if(data.weather[0].main=="Haze"){
        document.querySelector(".image_changer").src="images/haze.jpg"
    }
    else if(data.weather[0].main=="Mist"){
        document.querySelector(".image_changer").src="images/smoke.jpg"
    }
    else if(data.weather[0].main=="Smoke"){
        document.querySelector(".image_changer").src="images/snow.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        document.querySelector(".image_changer").src="images/drizzle.jpg"
    }
    document.querySelector(".information").style.display="block"
}

}


formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(inputEl.value)
    weatherMonitoring(inputEl.value)
    inputEl.value=""
})





