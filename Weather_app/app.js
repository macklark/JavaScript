const form = document.querySelector(".frm");
const card = document.querySelector(".card");
const image = document.querySelector(".image");
const key = "RplAsJ49bJojpHn3SodM4LvTH7zuLE4w";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const identity = form.input.value;

    const updateUI = (data) => {
        card.style.display = "block";
        if(data.IsDayTime === true){
            card.innerHTML = `
            <img  class = "image" src = "img/morning.jpg">
            <div class = "city">${identity.toUpperCase()}</div>
            <div class = "condition">${data.WeatherText}</div>
            <div class = "temp">${data.Temperature.Metric.Value} C</div>`    
        }else{
            card.innerHTML = `
            <img  class = "image" src = "img/night.jpg">
            <div class = "city">${identity.toUpperCase()}</div>
            <div class = "condition">${data.WeatherText}</div>
            <div class = "temp">${data.Temperature.Metric.Value} C</div>`
        }
        
        console.log(data)
    }

    const get_city = async () => {
        let response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${identity}`);
        let data = await response.json();
        return data[0]
    }

    const get_weather = async (id) => {
        let response = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}`);
        let data = await response.json();
        return data[0];
    }

    get_city().then(data => {
        return get_weather(data.Key)
    }).then(data => updateUI(data)).catch(err => {
        console.log(err)
    })

    form.reset();
})
