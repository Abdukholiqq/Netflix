import React from "react";
import Slider from "./Swipper";

function Main() {
  return (
    <div style={{ marginTop: -230,  }} className="container">
      <h4 style={{fontSize:26}} className="my-3">Netflix'te Popüler</h4>
      <Slider select={3} />
      <h4 style={{fontSize:26}} className="my-3">Kemal, İzlemeye Devam Et</h4>
      <Slider select={4} />
      <h4 style={{fontSize:26}} className="my-3">Gündemdekiler</h4>
      <Slider select={5}/>
      <h4 style={{fontSize:26}} className="my-3">Netflix Orijinal İçerikleri</h4>
      <Slider select={6}/>
      <h4 style={{fontSize:26}} className="my-3">Türkiye'de Bugünün Top 10 Listesi</h4>
      <Slider select={7}/>
      <h4 style={{fontSize:26}} className="my-3">Yeniden İzle</h4>
      <Slider select={8}/>
      <h4 style={{fontSize:26}} className="my-3">Listem</h4>
      <Slider select={9}/>
    </div>
  );
}
export default Main;
