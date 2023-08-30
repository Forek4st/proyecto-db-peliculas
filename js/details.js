document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const movieIndex = parseInt(params.get("movieIndex"));

  fetch("js/db.json")
    .then((res) => res.json())
    .then((data) => {
      const movie = data[movieIndex];

      const container = document.querySelector(".container");

      const movieCard = document.createElement("div");
      movieCard.classList.add("movieCard");

      const movieTitle = document.createElement("h2");
      movieTitle.classList.add("movieTitle");
      movieTitle.textContent = movie.title;

      const movieRank = document.createElement("p");
      movieRank.classList.add("movieRank");
      movieRank.textContent = `Ranking: ${movie.rank}`;

      const movieDescription = document.createElement("p");
      movieDescription.classList.add("movieDescription");
      movieDescription.textContent = movie.description;

      const movieGenre = document.createElement("p");
      movieGenre.classList.add("movieGenre");
      movieGenre.textContent = `Genre: ${movie.genre.join(", ")}`;

      const movieRating = document.createElement("p");
      movieRating.classList.add("movieRating");
      movieRating.textContent = `Rating: ${movie.rating}`;

      const movieYear = document.createElement("p");
      movieYear.classList.add("movieYear");
      movieYear.textContent = `Year: ${movie.year}`;

      const movieImage = document.createElement("img");
      movieImage.classList.add("imgMovie");
      movieImage.src = movie.image;

      container.appendChild(movieCard);
      movieCard.appendChild(movieTitle);
      movieCard.appendChild(movieRank);
      movieCard.appendChild(movieDescription);
      movieCard.appendChild(movieGenre);
      movieCard.appendChild(movieRating);
      movieCard.appendChild(movieYear);
      movieCard.appendChild(movieImage);

      const videoContainer = document.createElement("div");
      videoContainer.classList.add("videoContainer");

      const movieYouTubeIframe = document.createElement("iframe");
      movieYouTubeIframe.setAttribute("src", movie.youtube); 
      movieYouTubeIframe.setAttribute("width", "600");
      movieYouTubeIframe.setAttribute("height", "350");
      movieYouTubeIframe.setAttribute("frameborder", "0");
      movieYouTubeIframe.setAttribute("allowfullscreen", "");

      const movieTrailer = document.createElement("h2");
      movieTrailer.classList.add("movieTrailer");
      movieTrailer.textContent = `${movie.title} Trailer`;

      container.appendChild(videoContainer);
      videoContainer.appendChild(movieTrailer); // Move h2 into the videoContainer
      videoContainer.appendChild(movieYouTubeIframe);
      
    })
    .catch((error) => console.error("Error fetching data:", error));
});
