function retriveInfo() {

    const output = document.getElementById("output");
    output.innerHTML =""; 
      axios.get(`https://api.themoviedb.org/3/movie/${movies.value}`, {
        params: {
          api_key: "09a6e007d7a19baca792f4031cd63246",
          append_to_response: "videos",
        }
      }).then((movieData) => {
        const img = document.createElement('img');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        const p5 = document.createElement('p');
        const p6 = document.createElement('p');
        const p7 = document.createElement('p');
        const p8 = document.createElement('p');
        const p9 = document.createElement('p');
        const iframe = document.createElement('iframe');
        const trailers = movieData.data.videos.results.filter((trailer) => trailer.type === "Trailer");
      
        if (trailers.at(0)) {
          iframe.src = `https://www.youtube.com/embed/${trailers.at(0).key}`
          img.src = `https://image.tmdb.org/t/p/w500${movieData.data.poster_path}`;
          p1.innerHTML = "Movie Title: " + `${movieData.data.title}`;  
          p2.innerHTML = "Release Date: " +`${movieData.data.release_date}`;
          p3.innerHTML = "Popularity: " +`${movieData.data.popularity}`;
          p4.innerHTML = "Movie ID: " +`${movieData.data.id}`;
          p5.innerHTML = "Movie Overview: " +`${movieData.data.overview}`;
          p6.innerHTML = "Movie Vote Count: " +`${movieData.data.vote_count}`;
          p7.innerHTML = "Movie Status: " +`${movieData.data.status}`;
          p8.innerHTML = "Movie revenue: $" +`${movieData.data.revenue}`;
          p9.innerHTML = "Movie Budget: $" +`${movieData.data.budget}`;

          if (output) { 
            output.insertAdjacentElement("afterbegin",p9);
            output.insertAdjacentElement("afterbegin",p8);
            output.insertAdjacentElement("afterbegin",p7);
            output.insertAdjacentElement("afterbegin",p6);
            output.insertAdjacentElement("afterbegin",p5);
            output.insertAdjacentElement("afterbegin",p4);
            output.insertAdjacentElement("afterbegin",p3);
            output.insertAdjacentElement("afterbegin",p2);
            output.insertAdjacentElement("afterbegin",p1);
            output.insertAdjacentElement("afterbegin",img);
            output.insertAdjacentElement("afterbegin",iframe);
          }
        }
      });

};
