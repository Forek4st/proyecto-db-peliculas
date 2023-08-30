document.addEventListener('DOMContentLoaded', () => { //se carga el DOM de la pagina y se ejecuta la funcion de hacer fetch del json
  fetch("js/db.json")
    .then((res) => res.json())
    .then((data) => {
      const movieData = data.slice(0, 50); //se crea una constante que parte el data de la db en 50 elementos

      const container = document.querySelector(".container"); // se crea una constante que selecciona el container del HTML

      movieData.forEach((movie, index) => { // se usa un foreach para hacer un callback desde el index y crear elementos
        const movieCard = document.createElement("div"); //se crea una constante y se usa un createElement para crear un div
        movieCard.classList.add("movieCard"); //se le asigna la clase movieCard al div creado previamente

        const movieTitle = document.createElement("h2"); //se crea una constante y se usa un createElement para crear una etiqueta de h2
        movieTitle.classList.add("movieTitle"); //se le asigna la clase movieTitle al h2 creado previamente

        const movieRank = document.createElement("p"); //se crea una constante y se usa un createElement para crear una etiqueta de párrafo
        movieRank.classList.add("movieRank"); //se le asigna la clase movieRank al p creado previamente

        const movieGenre = document.createElement("p"); //se crea una constante y se usa un createElement para crear una etiqueta de párrafo
        movieGenre.classList.add("movieGenre"); //se le asigna la clase movieGenre al p creado previamente

        const movieImage = document.createElement("img");  //se crea una constante y se usa un createElement para crear una etiqueta de imagen
        movieImage.classList.add("imgMovie"); //se le asigna la clase imgMovie al img creado previamente

        container.appendChild(movieCard); //con el appendChild se agregan nuevos elementos a nuestro HTML
        movieCard.appendChild(movieTitle); //con el appendChild se agregan nuevos elementos a nuestro HTML
        movieCard.appendChild(movieRank); //con el appendChild se agregan nuevos elementos a nuestro HTML
        movieCard.appendChild(movieGenre); //con el appendChild se agregan nuevos elementos a nuestro HTML 
        movieCard.appendChild(movieImage); //con el appendChild se agregan nuevos elementos a nuestro HTML 

        movieTitle.textContent = movie.title; //se accede al DOM y se modifican las propiedades de las etiquetas llamando al elemento del json
        movieRank.textContent = "Ranking: " + movie.rank; //se accede al DOM y se modifican las propiedades de las etiquetas llamando al elemento del json
        movieGenre.textContent = "Genre: " + movie.genre.join(", "); //se accede al DOM y se modifican las propiedades de las etiquetas llamando al elemento del json
        movieImage.src = movie.image; //se accede al DOM y se modifican las propiedades de las etiquetas llamando al elemento del json
        movieImage.alt = `${movie.title} Image`; //se accede al DOM y se modifican las propiedades de las etiquetas llamando al elemento del json

        movieCard.addEventListener("click", () => { // se crea un listener que al hacer click almacene los parametros del contenido de la pagina 
          const queryParams = new URLSearchParams(); 
          queryParams.append("movieIndex", index); 

          const queryString = queryParams.toString(); // convierte los parametros obtenidos en string
          const detailsPageURL = `details.html?${queryString}`; //se crea la URL que manejara la info de los detalles de cada pelicula

          window.open(detailsPageURL); // abre una pestaña con la información de la película
        });
      });

      const finderInput = document.querySelector(".finder"); // se selecciona el input de busqueda

      finderInput.addEventListener("input", () => { //se crea un listener del input que tomara el valor escrito dentro del input
        const filtro = finderInput.value.toLowerCase(); //convierte cualquier valor del input en minusuculas, para no generar errores posteriormente o que no filtre correctamente

        movieData.forEach((movie, index) => { //con un forEach hara un callback de la db para filtrar desde el index la info que haya capturado el input
          const movieCard = document.querySelectorAll(".movieCard")[index]; 
          const titleMatch = movie.title.toLowerCase().includes(filtro);
          const genreMatch = movie.genre.some(genre => genre.toLowerCase().includes(filtro));

          if (titleMatch || genreMatch) { // con el condicional if filtrara el titleMatch O el genero para mostrar coincidencias.
            movieCard.style.display = "block"; // si hay coincidencias las ordenara por medio de bloque
          } else {
            movieCard.style.display = "none"; // si no hay coincidencias no mostrara nada
          }
        });
      });

    })
    .catch((error) => {
      console.error("Error fetching or processing data:", error);
    });
});
