import "../styles/Banner.css";
import logo from "../assets/logo.png";

function Banner() {
  return (
    <div className="Titre">
      {/* <img src={logo} alt="logo shop website" className="logo"></img> */}
      <div className="logo-icon">
        <span className="material-icons">storefront</span>
      </div>
      <h1>Krissu Arvuti Pood</h1>
    </div>
  );
}

export default Banner;
