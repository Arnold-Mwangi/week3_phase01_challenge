// fetching movie details using fetch method
// fetching api data
let movieItems;
fetch("http://localhost:3000/films")
  .then(response => response.json())
  .then(data => {
    data.forEach((item, index) => {

      displayMovieTitles(item)
      
      if (index === 0) {
        movieDetails(item);
      }
     

    })
   

  })

function displayMovieTitles(item, index) {
  const li = document.createElement('li')
  li.textContent = item.title

  const ul = document.querySelector('#sidebar_list')
  ul.appendChild(li)
  li.addEventListener('click', (e) => {
    movieDetails(item)
  })
  //console.log(li);


}
function movieDetails(item, index) {
  const movies = document.querySelector('.movies');

  // Remove existing movie card
  const existingMovieCard = document.querySelector('.movie-card');
  if (existingMovieCard) {
    movies.removeChild(existingMovieCard);
  }

  // Create new movie card elements
  const movieCard = document.createElement('div');
  movieCard.className = 'movie-card';

  const imageDiv = document.createElement('div');
  imageDiv.className = "image_container"
  const summaryDiv = document.createElement('div');
  summaryDiv.className = "text_container"

  const img = document.createElement('img');
  img.src = item.poster;

  const title = document.createElement('h3');
  title.textContent = item.title;

  const showtime = document.createElement('p');
  showtime.textContent = item.showtime;

  const description = document.createElement('p');
  description.textContent = item.description;

  const availableTickets = document.createElement('p');
  availableTickets.textContent = Math.floor(item.capacity - item.tickets_sold);

  // Append elements to the movie card
  imageDiv.appendChild(img);
  summaryDiv.appendChild(title);
  summaryDiv.appendChild(showtime);
  summaryDiv.appendChild(availableTickets);
  summaryDiv.appendChild(description);

  movieCard.appendChild(imageDiv);
  movieCard.appendChild(summaryDiv);

  // Append the movie card to the movies container
  movies.appendChild(movieCard);
  if(index === 0){
    movieDetails(item[0]);
    // movieDetails(item, 0)
  }
}





// // display movie attributes
// function displayMovieAttributes(attributes) {
//   //loop through movie attributes
//   attributes.forEach(items => {
//     // console.log(items.title)
//     // create elements dynamically
//     const movieCardDiv = document.createElement('div')
//     movieCardDiv.className = "movie-card"
//     const posterDiv = document.createElement('div')
//     const titleDiv = document.createElement('div')
//     const showTimeDiv = document.createElement('div')
//     const runTimeDiv = document.createElement('div')
//     const availableTicketsDiv = document.createElement('div')
//     const buyDiv = document.createElement('div')


//     const poster = document.createElement('img')
//     const title = document.createElement('h3')
//     const showTime = document.createElement('p')
//     const runTime = document.createElement('p')
//     const availableTickets = document.createElement('p')
//     availableTickets.className = "available_tickets"
//     const buyButton = document.createElement('button')
//     buyButton.textContent = "Buy"
//     buyButton.addEventListener('click', sellBook)



//     // Assign Values
//     poster.src = items.poster
//     title.textContent = items.title
//     showTime.textContent = `ShowTime: ${items.showtime}`
//     runTime.textContent = `RunTime:${items.runtime}`
//     availableTickets.textContent = `Available Tickets: ${Math.floor((items.capacity) - (items.tickets_sold))}`

//     //Append Items
//     posterDiv.appendChild(poster)
//     titleDiv.appendChild(title)
//     showTimeDiv.appendChild(showTime)
//     runTimeDiv.appendChild(runTime)
//     availableTicketsDiv.appendChild(availableTickets)
//     buyDiv.appendChild(buyButton)

//     movieCardDiv.appendChild(posterDiv)
//     movieCardDiv.appendChild(titleDiv)
//     movieCardDiv.appendChild(showTimeDiv)
//     movieCardDiv.appendChild(runTimeDiv)
//     movieCardDiv.appendChild(availableTicketsDiv)
//     movieCardDiv.appendChild(buyDiv)


//     document.querySelector('.movies').appendChild(movieCardDiv)


//   })



// }
// function moviesSideBar(attributes) {
//   attributes.forEach(item => {
//     // create li node dynamically
//     const li = document.createElement('li')
//     li.textContent = item.title
//     document.querySelector('ul').appendChild(li)
//   })
// }

// function sellBook(e) {
//   e.preventDefault();

//   let availableTickets = document.querySelector('.available_tickets').innerText;

//   let myArray = availableTickets.split(" ")[2]
//   console.log(myArray)
//   if (myArray > 0) {
//     myArray--
//     let button = document.querySelector('button').textContent = "Buy Tickets"
//     availableTickets.textContent = myArray
//   } else if (myArray === 0) {
//     button = document.querySelector('button').textContent = "Sold Out"
//   }
// }



