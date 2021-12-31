const getData = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('dog').innerHTML = `<img class="w-full bg-cover" src="${data.message}" />`
        });

    fetch('https://api.thecatapi.com/v1/images/search')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('cat').innerHTML = `<img class="w-full bg-cover" src="${data[0].url}" />`
        });
}

getData();