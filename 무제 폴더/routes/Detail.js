import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setData(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Detail</h1>
          <hr />
          <div className="coverImg">
            <img src={data.large_cover_image} />
            <span>Runtime: {data.runtime} minute</span>
          </div>
          <h2>
            {data.title_long} 💟 {data.like_count}
          </h2>
          <div>
            <strong>Rating : {data.rating}</strong>
          </div>
          <h3>Intro</h3>
          <p>{data.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
