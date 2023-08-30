document.addEventListener('DOMContentLoaded', () => {
  fetch("js/db.json")
    .then((res) => res.json())
    .then((data) => {
      const movieData = data.slice(0, 50);

      const container = document.querySelector(".container");

      movieData.forEach((movie, index) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movieCard");

        const movieTitle = document.createElement("h2");
        movieTitle.classList.add("movieTitle");

        const movieRank = document.createElement("p");
        movieRank.classList.add("movieRank");

        const movieGenre = document.createElement("p");
        movieGenre.classList.add("movieGenre");

        const movieImage = document.createElement("img");
        movieImage.classList.add("imgMovie");

        container.appendChild(movieCard);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieRank);
        movieCard.appendChild(movieGenre);
        movieCard.appendChild(movieImage);

        movieTitle.textContent = movie.title;
        movieRank.textContent = "Ranking: " + movie.rank;
        movieGenre.textContent = "Genre: " + movie.genre.join(", ");
        movieImage.src = movie.image;
        movieImage.alt = `${movie.title} Image`;

        movieCard.addEventListener("click", () => {
          const queryParams = new URLSearchParams();
          queryParams.append("movieIndex", index);

          const queryString = queryParams.toString();
          const detailsPageURL = `details.html?${queryString}`;

          window.open(detailsPageURL);
        });
      });

      const finderInput = document.querySelector(".finder");

      finderInput.addEventListener("input", () => {
        const filtro = finderInput.value.toLowerCase();

        movieData.forEach((movie, index) => {
          const movieCard = document.querySelectorAll(".movieCard")[index];
          const titleMatch = movie.title.toLowerCase().includes(filtro);
          const genreMatch = movie.genre.some(genre => genre.toLowerCase().includes(filtro));

          if (titleMatch || genreMatch) {
            movieCard.style.display = "block";
          } else {
            movieCard.style.display = "none";
          }
        });
      });

    })
    .catch((error) => {
      console.error("Error fetching or processing data:", error);
    });
});
