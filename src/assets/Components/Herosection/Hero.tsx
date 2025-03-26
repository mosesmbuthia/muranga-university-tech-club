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
        <h1>Murang'a University Tech Club</h1>
        <p>
          Unlock your potential with hands-on projects, mentorship, and
          networking opportunities.
        </p>
        <div className="hero-buttons">
          <button className="btn primary-btn">Get Started</button>
          <button className="btn secondary-btn">Read More</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
