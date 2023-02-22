import React from "react";
import facebook from "../assets/Images/facebook.svg";
import instagram from "../assets/Images/instagram.svg";
import twitter from "../assets/Images/twitter.svg";
import youtube from "../assets/Images/youtube.svg";

function Footer() {
  return (
    <div className="container " style={{ width: 883, textAlign: "start" }}>
      <div className="links d-flex gap-3 mt-5">
        <img src={facebook} alt="dsvdv" width={24} height={16.5}/>
        <img src={instagram} alt="" width={24} height={16.5}/>
        <img src={twitter} alt="" width={24} height={16.5}/>
        <img src={youtube} alt="" width={24} height={16.5}/>
      </div>
      <div
        style={{ textAlign: "start", marginLeft: -30 }}
        className="about d-flex justify-content-between mt-4">
        <ul className="d-flex flex-column gap-3 li">
          <li>Seslendirme ve Alt Yazi</li>
          <li>Medya Merkezi</li>
          <li>Gizlilik</li>
          <li>Bize Ulaşin</li>
        </ul>
        <ul className="d-flex flex-column gap-3 li">
          <li>Sesli Betimleme</li>
          <li>Yatirimci İlişkileri</li>
          <li>Yasal Hükümler</li>
        </ul>
        <ul className="d-flex flex-column gap-3 li">
          <li>Yardim Merkezi</li>
          <li>İş İmkanlari</li>
          <li>Çerez Tercihleri</li>
        </ul>
        <ul className="d-flex flex-column gap-3 li">
          <li>Hediye Kartlari</li>
          <li>Kullanim Koşullari</li>
          <li>Kurumsal Bilgiler</li>
        </ul>
      </div>
      <button
        className="li py-2 px-3 mt-3 border border-secondary"
        style={{ backgroundColor: "transparent" }}>
        Hizmet Kodu
      </button>
      <h6 className="li my-4 ">
        © 1997-2021 Netflix, Inc. {"{i-062d573a0ee099242}"}
      </h6>
    </div>
  );
}

export default Footer;
