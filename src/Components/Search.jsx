import axios from "axios";
import React, { useContext, useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { BaseUrl } from "./BaseUrl";
import EventsLoader from "./Loader";

function Search() {
  const { search } = useContext(AuthContext); 
  const [post, setPost] = useState();
   const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    const result = async () => {
      const ress = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=d00b8a4bbae38aaa7e18689efcd9ee4b&language=en-US&query=${search.search}&page=1&include_adult=false` 
      );
      setPost(ress); 
      setLoading(false)
    };
    result(post);
  }, []); 
    if (loading) {
      return (
        <div className="d-flex container flex-wrap">
          <EventsLoader />
          <EventsLoader />
          <EventsLoader />
          <EventsLoader />
          <EventsLoader />
          <EventsLoader />
        </div>
      );
    }
  return (
    <div className="container my-5 ">
      {post?.data?.results?.map((item, i) => {
        return (
          <div key={i} className="d-flex justify-content-between flex-wrap">
             <Link to={`/movies/${item.id}`}>
            <div className="w-25  mt-5">
              <img src={BaseUrl + item.poster_path} alt="images" width={300} />
              <h4>
                {item.title} . {item.release_date}
              </h4>
            </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default Search;
