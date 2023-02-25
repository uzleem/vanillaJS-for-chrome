import React, { useState, useEffect } from "react";

function App() {
  const [loding, setLoding] = useState(true);
  const [movie, setMovie] = useState([]);

  const movieJson = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();

    setMovie(json.data.movies);
    setLoding(false);
  };
  console.log(movie);

  useEffect(() => {
    movieJson();
  }, []);

  return (
    <div>
      {loding ? (
        <h1>Loding...</h1>
      ) : (
        <div>
          {movie.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.medium_cover_image}></img>
              <p>{item.summary}</p>
              <ul>
                {item.genres.map((item2) => (
                  <li key={item2}>{item2}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
