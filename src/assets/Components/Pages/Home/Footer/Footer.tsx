import { FaFacebook, FaInstagram, FaTwitter,FaLinkedin } from "react-icons/fa";
import "./Footer.css"
function Footer() {
  return (
    <section>
      <div className="footer-container">
      <footer className="footer">
      <div className="footer-container">
        <h2 className="club">Murang'a University Tech Club</h2>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Courses</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Club</h3>
            <ul>
              <li>About us</li>
              <li>Membership</li>
              <li>Activities</li>
              <li>Connect</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resource</h3>
            <ul>
              <li>Leadership</li>
              <li>Tracks</li>
              <li>Events</li>
              <li>Help center</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2025 Moses Mbuthia. All Rights Reserved.</p>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            
            
          </div>
        </div>
      </div>
    </footer>
      </div>
    </section>
  )
}

export default Footer
