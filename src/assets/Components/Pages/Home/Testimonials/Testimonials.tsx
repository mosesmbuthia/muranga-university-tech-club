import { FaStar, FaRegStar } from "react-icons/fa";

import testImg3 from "../../../../images/test3.jpg"
import testImg2 from "../../../../images/testi2.jpg"
import testImg1 from "../../../../images/testi1.jpg"
import "./Testimonials.css"
function Testimonials() {
  return (
    <section>
        <h1>What Our Members Say About Us</h1>
        <div className="testimonials-container">
            
      <div className="testimonial-card">
      <img 
        src={testImg1} 
        alt="profile picture" 
        className="user-image"
      />
      <h3 className="user-name">Linda Wanjiru</h3>
      <p className="user-role">Data Analyst @ Tech Insights Ltd.</p>
      <p className="testimonial-text">
        "Joining MUTC was a game-changer for me! The workshops and mentorship programs helped me transition from a beginner to a confident developer. I even landed my first internship through the club’s networking events!"
      </p>
      <div className="rating">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
      </div>
    </div>

    <div className="testimonial-card">
      <img 
        src={testImg2} 
        alt="profile picture" 
        className="user-image"
      />
      <h3 className="user-name">Alex Mwangi</h3>
      <p className="user-role">Software Developer @ Innovate Kenya.</p>
      <p className="testimonial-text">
        "Before MUTC, I had no idea how powerful data could be. The data science track introduced me to Python, SQL, and real-world projects that boosted my portfolio. Thanks to MUTC, I now work as a data analyst, solving real business problems."
      </p>
      <div className="rating">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
      </div>
    </div>

    <div className="testimonial-card">
      <img 
        src={testImg3} 
        alt="profile picture" 
        className="user-image"
      />
      <h3 className="user-name">Jessica Devis</h3>
      <p className="user-role">Cybersecurity Enthusiast @ SecureNet Africa.</p>
      <p className="testimonial-text">
        "MUTC opened my eyes to the world of cybersecurity. The Capture The Flag (CTF) challenges and ethical hacking sessions built my skills, and now I’m working towards becoming a certified ethical hacker. The guidance from experienced members made all the difference!"
      </p>
      <div className="rating">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar />
      </div>
    </div>

   
    </div>
    </section>
  )
}

export default Testimonials
