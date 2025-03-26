import bgImage from "../../images/tech-background.jpg";

import "./Hero.css"
function Hero() {
  return (
    <section className="hero"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="hero-content">
        <h1>Unlock your potential with hands-on projects,  <br />mentorship, and
        networking opportunities.</h1>
        <p>
          
        </p>
        <div className="hero-buttons">
          <button className="btn primary-btn">Join Us</button>
          <button className="btn secondary-btn">Read More</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
