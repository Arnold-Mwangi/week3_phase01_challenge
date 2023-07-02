// fetching movie details using fetch method
function fetchMovieAttributes() {
    fetch("http://localhost:3000/films")
        .then(response => response.json())
        .then(data => {
            const attributes = data

            moviesSideBar(attributes)
            displayMovieAttributes(attributes)
           
        })
}

// display movie attributes
function displayMovieAttributes(attributes) {
    //loop through movie attributes
    attributes.forEach(items => {
        // console.log(items.title)
        // create elements dynamically
        const movieCardDiv = document.createElement('div')
        const posterDiv = document.createElement('div')
        const titleDiv = document.createElement('div')
        const showTimeDiv = document.createElement('div')
        const runTimeDiv = document.createElement('div')
        const availableTicketsDiv = document.createElement('div')
        const buyDiv = document.createElement('div')
        
        
        const poster = document.createElement('img')
        const title = document.createElement('h3')
        const showTime = document.createElement('p')
        const runTime = document.createElement('p')
        const  availableTickets = document.createElement('p')
        const buyButton = document.createElement('button')
        buyButton.textContent = "Buy"
        buyButton.addEventListener('click', sellBook)


        // Assign Values
        poster.src = items.poster
        title.textContent = items.title
        showTime.textContent =`ShowTime: ${items.showtime}` 
        runTime.textContent =`RunTime:${items.runtime}`
        availableTickets.textContent =`Available Tickets: ${Math.floor((items.capacity)-(items.tickets_sold))}` 

    //Append Items
    posterDiv.appendChild(poster)
    titleDiv.appendChild(title)
    showTimeDiv.appendChild(showTime)
    runTimeDiv.appendChild(runTime)
    availableTicketsDiv.appendChild(availableTickets)
    buyDiv.appendChild(buyButton)

    movieCardDiv.appendChild(posterDiv)
    movieCardDiv.appendChild(titleDiv)
    movieCardDiv.appendChild(showTimeDiv)
    movieCardDiv.appendChild(runTimeDiv)
    movieCardDiv.appendChild(availableTicketsDiv)
    movieCardDiv.appendChild(buyDiv)


    document.querySelector('.movies').appendChild(movieCardDiv)

        
    })



}
function  moviesSideBar(attributes){
    attributes.forEach(item => {
        // create li node dynamically
        const li = document.createElement('li')
        li.textContent = item.title
        document.querySelector('ul').appendChild(li)
    })
}
function sellBook(e){
    e.preventDefault()
    
}
fetchMovieAttributes()