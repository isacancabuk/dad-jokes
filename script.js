const button = document.getElementById('btn')
const joke = document.getElementById('text')

const config = {
    headers:{
        'Accept':'application/json'
    }
}

const getJoke = async() =>{
    const response = await fetch('https://icanhazdadjoke.com', config)
    const data = await response.json()
    joke.innerText = data.joke
}

button.addEventListener('click', () => getJoke())

getJoke()