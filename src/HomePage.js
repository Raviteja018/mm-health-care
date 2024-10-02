import image from "./Images/img.png";
import "./CSS/HomePage.css"

export const HomePage = () => {
  return (
    <div className="home">
      <div className="content">
        <h1><span>Providing an </span>Exceptional Health Services</h1>
        <p>Our team provide various medical services and consultations</p>
        <button><h3>Get in touch &gt;</h3></button>
      </div>
      <div>
        <img src={image} alt="image" height="500px"/>
      </div>
    </div>
  );
};
