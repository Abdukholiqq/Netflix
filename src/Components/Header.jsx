import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Modal from "react-modal";

// import images
import logo from "../assets/Images/Netflix.svg";
import searchIcon from "../assets/Images/searchIcon.svg";
import present from "../assets/Images/present.svg";
import natification from "../assets/Images/Natification.svg";
import profileIcon from "../assets/Images/ProfileIMG.svg";
const customStyles = {
  content: {
    top: "25%",
    left: "92%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: 'transparent' ,   
  },
};

// Modal.setAppElement("#yourAppElement");
function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { search, setSearch, logOut } = useContext(AuthContext);
  const openModal = ()=>{
    setIsOpen(true)  
  }
  const closeModal = () => {
    setIsOpen(false); 
  };
  return (
    <div
      style={{ zIndex: 1554555 }}
      className="header bg-dark position-fixed top-0 w-100">
      <div
        style={{ alignItems: "center" }}
        className=" container d-flex justify-content-between py-3 ">
        <div style={{ alignItems: "center" }} className="d-flex gap-3 ">
          <Link to={"/"}>
            <img src={logo} alt="Netflix" width={111} height={30} />
          </Link>
          <div className="Navbar d-flex gap-3">
            <Link to={"/"}>
              <h6>Ana Sayfa</h6>
            </Link>
            <Link to={"/series"}>
              <h6>Diziler</h6>
            </Link>
            <Link to={"/films"}>
              <h6>Filmler</h6>
            </Link>
            <Link to={"/popular"}>
              <h6>Yeni ve Popüler</h6>
            </Link>
            <Link to={"/listem"}>
              <h6>Listem</h6>
            </Link>
          </div>
        </div>
        <div style={{ alignItems: "center" }} className="d-flex gap-3 ">
          <input
            onChange={(e) => {
              setSearch({ search: e.target.value });
            }}
            value={search.search}
            id="search"
            className="border rounded-3 px-2"
            type="text"
            placeholder="Search Movies"
          />
          <Link to={`/movie/${search.search}`}>
            <label htmlFor="search">
              <img src={searchIcon} alt="search" width={19.31} height={20} />
            </label>
          </Link>
          <h6 className="mb-0">Vodil</h6>
          <img src={present} alt="present" width={19.3} height={20} />
          <img
            onClick={closeModal}
            src={natification}
            alt="natification"
            width={18.56}
            height={16.85}
          />
          <div onClick={openModal} className="profile">
            <img src={profileIcon} alt="profile" width={32} height={32} />
            <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              onRequestClose={closeModal}> 
              <button onClick={logOut} className="logout btn bg-danger">
                Log Out
              </button> 
            </Modal> 
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
