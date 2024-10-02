import radiology from "./Images/radiology illustration.jpg";
import healthChekup from "./Images/health-checkup1.jpg";
import bloodTest from "./Images/blood test.jpg";
import "./CSS/Services.css";

export const Services = () => {
  return (
    <div className="Services">
      <h1>Services</h1>
      <div className="container">
        <div className="sub-container">
          <div className="child-container">
            <img src={radiology} height="150px" alt="images" />
          </div>
          <div className="service-name">
            <h3>Radiology</h3>
          </div>
        </div>
        <div className="sub-container">
          <div className="child-container">
            <img src={healthChekup} height="150px" alt="images" />
          </div>
          <div className="service-name">
            <h3>General Health checkup</h3>
          </div>
        </div>
        <div className="sub-container">
          <div className="child-container">
            <img src={bloodTest} height="150px" alt="images" />
          </div>
          <div className="service-name">
            <h3>Blood Test</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
