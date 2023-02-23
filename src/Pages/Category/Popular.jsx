import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BaseUrl } from "../../Components/BaseUrl";

function Popular() {
  const [film, setFilm] = useState();
  useEffect(() => {
    const result = async () => {
      const data =
        await axios.get`https://api.themoviedb.org/3/search/movie?api_key=d00b8a4bbae38aaa7e18689efcd9ee4b&language=en-US&query=popular&page=1&include_adult=false`;
      setFilm(data);
    };
    result();
  }, []);
  return (
    <div className="container d-flex flex-wrap justify-content-center gap-3 mt-5">
      {film?.data?.results?.map((item, i) => {
        return (
          <div key={i} className="w-25">
            <Link to={`/movies/${item.id}`}>
              <img
                src={BaseUrl + item.poster_path}
                alt="images"
                style={{
                  minHeight: 350,
                  maxHeight: 350,
                  width: "100%",
                  borderRadius: "10px",
                }}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Popular;
