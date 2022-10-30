function retriveInfo() {
  let response = axios.get("https://api.themoviedb.org/3/search/movie", {
    params: {
      api_key: "09a6e007d7a19baca792f4031cd63246",
      include_adult: "false",
      query: movies.value,
    }
  });
  response = response.then((moviesData) => {
    const output = document.getElementById("output");
    output.innerHTML ="";
    for (let movie of moviesData.data.results) {   
      axios.get(`https://api.themoviedb.org/3/movie/${movie.id}`, {
        params: {
          api_key: "09a6e007d7a19baca792f4031cd63246",
          append_to_response: "videos",
        }
      }).then((movieData) => {
        const img = document.createElement('img');
        const p = document.createElement('p');
        const iframe = document.createElement('iframe');
        const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
      
        if (trailers.at(0)) {
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      
          p.innerHTML = `${movie.title}  ${movie.release_date}  ${movie.popularity}  ${movie.overview} ${movie.vote_count} ${movie.status}
        ` ;

          if (output) { 
            output.insertAdjacentElement("afterbegin",p);
            output.insertAdjacentElement("afterbegin",img);
            output.insertAdjacentElement("afterbegin",iframe);
          }
        }
      });
      break;
    }
  });
}