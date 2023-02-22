import React from "react";

// import images
import movieName from "../assets/Images/MovieName.png";
import movieTitle from "../assets/Images/RankIcon&Text.svg";
import play from "../assets/Images/Play.svg";
import detail from "../assets/Images/Detail.svg";

function Hero() {
  return (
    <div className="hero">
      <div
        style={{ paddingTop: 250 }}
        className="container d-flex flex-column gap-3">
        <img src={movieName} alt="images" width={408} height={115} />
        <div className="d-flex gap-3 aligin-items-center">
          <img src={movieTitle} alt="images" width={32} height={32} />
          <h3 style={{fontSize:30}}>Türkiye'de Bugün 4 Numara</h3>
        </div>
        <h4 style={{ width: 636, fontSize: 26  }}>
          Küçük yaşta başinin çaresine bakmayi öğrenen ve çok çalişarak iş
          dünyasinda önemli bir konuma gelen Emir, bir gün sokak şarkicisi bir
          kizla karşilaşir ve hayati değişir.
        </h4>

        <div>
          <button
            className="py-1 px-3 border-0"
            style={{
              fontSize: 22,
            }}>
            <img src={play} alt="play" style={{ marginRight: 20 }} />
            Oynat
          </button>
          <button
            className="py-1 px-3 primary border-0"
            style={{ marginLeft: 15, fontSize: 22 }}>
            <img style={{ marginRight: 20 }} src={detail} alt="detail" />
            Daha Fazla Bilgi
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
