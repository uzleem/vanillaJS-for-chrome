import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
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

  /**
   * Props를 활용하여 render
   * 1. Movie.js에서 function 생성 이후 { } props 데이터 활용
   * 2. Home.js에서 Movie.js를 import하여, JSX를 통한 <Movie/> render
   *
   * Home
   */
  return (
    <div>
      {loding ? (
        <h1>Loding...</h1>
      ) : (
        <div>
          {movie.map((item) => (
            <Movie
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.medium_cover_image}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
