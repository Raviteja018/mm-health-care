import About from "./Images/About us.jpg";
import "./CSS/AboutUs.css";

export const AboutUs = () => {
  return (
    <div className="About-us">
      <div className="image" >
        <img src={About} alt="images" height="400px" />
      </div>
      <div className="description">
        <p className="p1">About Us</p>
        <h1>First class Preventive Prescription & Curative Medical Services</h1>
        <p className="p2">Being in the health care sector, we consider it our responsibility to ensure safety of our patients, effectiveness of our treatments and absolute timely care. Our team of experienced medical professionals works tirelessly to offer a range of services designed to promote health, prevent illness, and provide effective solutions to those in need. Whether it’s through routine checkups, personalized treatment plans, or cutting-edge therapies, we are dedicated to enhancing the quality of life for every individual we serve.</p>
      </div>
    </div>
  );
};
