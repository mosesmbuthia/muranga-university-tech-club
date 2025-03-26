import "./Contacts.css"


function Contacts() {
  return (
    <div className="main-contact-container">
      <div className="contact-container">
      
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Fill out the form and our team will get back to you within 24 hours.</p>
        <p>📞 +254 (799) 535 352</p>
        <p>✉️ mutc@gmail.com</p>
        <p>🎟 Open Support Ticket</p>
        <div className="social-icons">
          <span>🐦</span>
          <span>🔗</span>
          <span>🌎</span>
          <span>📘</span>
        </div>
      </div>

      
      <div className="contact-form">
        <h2>Join a Track</h2>
        <form>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="e.g. Lucas" required />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="e.g. Jones" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="e.g. lucas@mail.com" required />
          </div>

          <div className="form-group">
            <label>Which track are you interested in?</label>
            <div className="track-options">
              <label>
                <input type="radio" name="track" value="Cyber Security" />
                Cyber Security
              </label>
              <label>
                <input type="radio" name="track" value="UI/UX Design" />
                UI/UX Design
              </label>
              <label>
                <input type="radio" name="track" value="Web Development" />
                Web Development
              </label>
              <label>
                <input type="radio" name="track" value="Mobile Apps Development" />
                Mobile Apps Development
              </label>
              <label>
                <input type="radio" name="track" value="Cloud Engineering" />
                Cloud Engineering
              </label>
              <label>
                <input type="radio" name="track" value="Power Platform" />
                Power Platform
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea placeholder="Write your message..." rows={4} required></textarea>
          </div>

          <button className="contacts-btn" type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contacts
