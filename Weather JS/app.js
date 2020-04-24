const key = "62586bebfab9201aaf46e48b41ea5fde";

const button = document.getElementById("bttn");
const input = document.getElementById("inp");
const list = document.getElementById("list");
const img = document.getElementById("img-loc");

button.addEventListener("click", function(){
    const target = input.value;

    fetch(`http://api.weatherstack.com/current?access_key=${key}&query=${target}`).then((response) => {
            return (
                response.json()
            );
        })

    .then((data) => {

        console.log(data)

        list.innerHTML = `
        <li class="list-group-item">Temperature : ${data.current.temperature} C</li>
        <li class="list-group-item">Humidity : ${data.current.humidity} %</li>
        <li class="list-group-item">Clouds : ${data.current.cloudcover} %</li>
        <li class="list-group-item">${data.current.weather_descriptions[0]}</li>
        `

        img.innerHTML = `<img src="${data.current.weather_icons[0]}"  width="142" height="142">`
    })

    input.addEventListener("keydown", function(){
        list.innerHTML = "";
        img.innerHTML = "";
    })
})
