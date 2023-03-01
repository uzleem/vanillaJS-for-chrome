import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  /**
   * id의 해당하는 api data가져오기.
   */
  const testFunc = async () => {
    const json = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    ).json();

    console.log(json);
  };

  useEffect(() => {
    testFunc();
  });

  const { id } = useParams();
  console.log(id);
  return <h1>render성공</h1>;
}

export default Detail;
