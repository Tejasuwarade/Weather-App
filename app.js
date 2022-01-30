async function fetchApi(city) {
        let tempra;
        let cityName;
        let descript;
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e4a98571b577a282519f100cbb89bde8')
            .then(response => response.json())
            .then(data => {
                tempra = data['main']['temp'];
                cityName=data['name'];
                descript=data['weather'][0]['description'];

                document.getElementById('NameOfCity').innerHTML = `Location : `+ cityName;
                document.getElementById('Temperature').innerHTML =`Temperature : `+ tempra +` °k `;
                document.getElementById('Desc').innerHTML =`Description : `+ descript;
                document.getElementById('gif-img').innerHTML = " ";

                 console.log(data);
            })

            .catch(err => alert("wrong City Name!"))

    }

    async function runclick() {

        var b = document.getElementById('CityInput').value;
        console.log(b);
        let weather = await fetchApi(b);

    }