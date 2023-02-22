import React, {useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../Components/BaseUrl";
import Slider from "../Components/Swipper";
// import { Player } from "video-react";
// import PropTypes from "prop-types"; 
import EventsLoader from '../Components/Loader'
//  video
// import "node_modules/video-react/dist/video-react.css";
// import "video-react/styles/scss/video-react";
{/* <link rel="stylesheet" href="/css/video-react.css" />; */}

function Single() {
 
  const { name } = useParams();
  const [json, setProduct] = useState();
 const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getdata = async () => {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/${name}?api_key=873400dd977810e70390e633a4d42b3d&language=en-US`
      )
      {
        setLoading(false);
        setProduct(data.data);
      }
    };
    getdata(name);
  }, [name]);

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
    <div
      className="container"
      style={{ marginTop: 80, display: "flex", flexDirection: "column" }}>
      <h1 style={{ marginLeft: 50, marginBottom: 30, color: "darkseagreen" }}>
        {json?.title}
      </h1>
      <div className="d-flex mb-5 gap-5">
        <div >
          <h4 style={{ width: 550 }}>{json?.overview}</h4>
          <h4 className=" d-flex gap-2 mt-4">Popularity : <p className="text-info"> {json?.popularity} </p></h4>
          <h4 className="d-flex gap-2">Release date : <p className="text-info"> {json?.release_date} </p></h4>
          <h4 className="d-flex gap-2">Status: <p className="text-info">{json?.status} </p></h4>
          <h4 className="d-flex gap-2">Vote average :  <p className="text-info">{json?.vote_average} </p></h4>
          <h4 className="d-flex gap-2">Vote count : <p className="text-info"> {json?.vote_count} </p></h4>
        </div>
        {/* <>
         
          {/* <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    /> */}
        {/* <div className="video-responsive">
            <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
       
            </div>
          </> */}

        <img
          className="border border-0 rounded-4"
          src={BaseUrl + json?.poster_path}
          alt=" We don't have this movie"
          width={350}
          height={450}
        />
      </div>
      <h5 className="py-3 ps-2">You might like it</h5>
      <Slider select={name.slice(0, 1)} />
    </div>
  );
}
// Single.propTypes = {
//   embedId: PropTypes.string.isRequired,
// };
export default Single;
