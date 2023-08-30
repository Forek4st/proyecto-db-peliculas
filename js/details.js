document.addEventListener("DOMContentLoaded", () => { //se carga el DOM de la pagina y se ejecuta la funcion de hacer fetch del json
  const params = new URLSearchParams(window.location.search); 
  const movieIndex = parseInt(params.get("movieIndex")); 

  fetch("js/db.json") 
    .then((res) => res.json())
    .then((data) => {
      const movie = data[movieIndex];

      const container = document.querySelector(".container"); // se crea una constante que selecciona el container del HTML

      const movieCard = document.createElement("div"); //se crea una constante y se usa un createElement para crear un div
      movieCard.classList.add("movieCard"); //se le asigna la clase movieCard al div creado previamente

      const movieTitle = document.createElement("h2"); //se crea una constante y se usa un createElement para crear una etiqueta de h2
      movieTitle.classList.add("movieTitle"); //se crea una constante y se usa un createElement para crear una etiqueta de h2

      const movieRank = document.createElement("p"); //se crea una constante y se usa un createElement para crear una etiqueta de párrafo
      movieRank.classList.add("movieRank"); //se le asigna la clase movieRank al p creado previamente

      const movieDescription = document.createElement("p"); //se crea una constante y se usa un createElement para crear una etiqueta de párrafo
      movieDescription.classList.add("movieDescription"); //se le asigna la clase movieDescription al p creado previamente

      const movieGenre = document.createElement("p"); //se crea una constante y se usa un createElement para crear una etiqueta de párrafo
      movieGenre.classList.add("movieGenre"); //se le asigna la clase movieGenre al p creado previamente

      const movieRating = document.createElement("p"); //se crea una constante y se usa un createElement para crear una etiqueta de párrafo
      movieRating.classList.add("movieRating"); //se le asigna la clase movieRating al p creado previamente

      const movieYear = document.createElement("p"); //se crea una constante y se usa un createElement para crear una etiqueta de párrafo
      movieYear.classList.add("movieYear"); //se le asigna la clase movieYear al p creado previamente

      const movieImage = document.createElement("img"); //se crea una constante y se usa un createElement para crear una etiqueta de imagen
      movieImage.classList.add("imgMovie"); //se le asigna la clase imgMovie al img creado previamente

      container.appendChild(movieCard); //con el appendChild se agregan nuevos elementos a nuestro HTML
      movieCard.appendChild(movieTitle); //con el appendChild se agregan nuevos elementos a nuestro HTML
      movieCard.appendChild(movieRank); //con el appendChild se agregan nuevos elementos a nuestro HTML
      movieCard.appendChild(movieDescription); //con el appendChild se agregan nuevos elementos a nuestro HTML
      movieCard.appendChild(movieGenre); //con el appendChild se agregan nuevos elementos a nuestro HTML
      movieCard.appendChild(movieRating); //con el appendChild se agregan nuevos elementos a nuestro HTML
      movieCard.appendChild(movieYear); //con el appendChild se agregan nuevos elementos a nuestro HTML
      movieCard.appendChild(movieImage); //con el appendChild se agregan nuevos elementos a nuestro HTML

      const videoContainer = document.createElement("div"); //se crea una constante y se usa un createElement para crear un div
      videoContainer.classList.add("videoContainer"); //se le asigna la clase movieCard al div creado previamente

      const movieTrailer = document.createElement("h2"); //se crea una constante y se usa un createElement para crear una etiqueta de h2
      movieTrailer.classList.add("movieTrailer"); //se crea una constante y se usa un createElement para crear una etiqueta de h2

      movieTitle.textContent = movie.title; //se accede al DOM y se modifican las propiedades de las etiquetas llamando al elemento del json
      movieRank.textContent = `Ranking: ${movie.rank}`; //se accede al DOM y se modifican las propiedades de las etiquetas llamando al elemento del json
      movieDescription.textContent = movie.description; //se accede al DOM y se modifican las propiedades de las etiquetas llamando al elemento del json
      movieGenre.textContent = `Genre: ${movie.genre.join(", ")}`; //se accede al DOM y se modifican las propiedades de las etiquetas llamando al elemento del json
      movieRating.textContent = `Rating: ${movie.rating}`; //se accede al DOM y se modifican las propiedades de las etiquetas llamando al elemento del json
      movieYear.textContent = `Year: ${movie.year}`; //se accede al DOM y se modifican las propiedades de las etiquetas llamando al elemento del json
      movieImage.src = movie.image; //se accede al DOM y se modifican las propiedades de las etiquetas llamando al elemento del json
      movieTrailer.textContent = `${movie.title} Trailer`;

      const movieYouTubeIframe = document.createElement("iframe"); // creamos una etiqueta de iframe para indexarla al HTML
      movieYouTubeIframe.setAttribute("src", movie.youtube); // propiedades del iframe
      movieYouTubeIframe.setAttribute("width", "600"); // propiedades del iframe
      movieYouTubeIframe.setAttribute("height", "350"); // propiedades del iframe
      movieYouTubeIframe.setAttribute("frameborder", "0"); // propiedades del iframe
      movieYouTubeIframe.setAttribute("allowfullscreen", ""); // propiedades del iframe

      container.appendChild(videoContainer); //con el appendChild se agregan nuevos elementos a nuestro HTML
      videoContainer.appendChild(movieTrailer); //con el appendChild se agregan nuevos elementos a nuestro HTML
      videoContainer.appendChild(movieYouTubeIframe); //con el appendChild se agregan nuevos elementos a nuestro HTML
    })
    .catch((error) => console.error("Error fetching data:", error));
});
