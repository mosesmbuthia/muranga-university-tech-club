import "./About.css"
import teamImg from "../../images/team-collab.jpg"
import { SiTransmission } from "react-icons/si";
import { FaLowVision } from "react-icons/fa";

function About() {
    return (
        <div className="about-us">
            <div className="about-us-content">
                <h2>About Us</h2>
                <p>
                    The Murang'a University Tech Club (MUTC) is dedicated to fostering
                    technological learning and innovation among students. Our goal is to
                    equip members with cutting-edge tech skills, mentorship, and a community
                    of like-minded innovators.
                </p>
            </div>

            <div className="about-cards">
                <div className="card">
                    <div className="card-header">
                        <p><SiTransmission /></p>
                        <h3>Our Vision</h3>
                    </div>
                    <p>
                        To be a leading student-driven tech community that nurtures innovation,
                        collaboration, and excellence in technology.
                    </p>
                </div>

                <div className="card">
                    <div className="card-header">
                        <p><FaLowVision /></p>
                        <h3>Our Mission</h3>
                    </div>
                    <p>
                        To empower students with practical tech skills, networking opportunities,
                        and real-world experience through hands-on projects and mentorship.
                    </p>
                </div>
            </div>

            <div className="about-image">
                <img src={teamImg} alt="MUTC Team Collaboration" />
            </div>
        </div>
    )
}

export default About
