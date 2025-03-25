import cyberImg from "../../../images/cyber-security.jpg"
import { IoMdSend } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import "./Events.css"
function Events() {
  return (
   <section>
    <h1>Explore MUTC Events</h1>
     <div className="event-card">
      <div className="event-header">
      <FaUserCircle className="event-organizer-img" size={50} />
        <div className="event-info">
          <h2 className="event-title">Cyber Security</h2>
          <p className="event-subtitle">Led by Webster Ifedha</p>
        </div>
      </div>
      <img src={cyberImg} alt="Cybersecurity" className="event-image" />
      <p className="event-description">
        Join us every Monday from 4 PM to 7 PM at Computer Lab F04 for an engaging cybersecurity session.
      </p>
      <div className="event-actions">
        <button className="action-button">Confirm Attendance</button>
        <button className="action-button">Share <IoMdSend /></button>
      </div>
    </div>
   </section>
  )
}

export default Events
