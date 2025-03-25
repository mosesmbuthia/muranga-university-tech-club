import { IoMdSend } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import "./Events.css";
import { eventsData, EventProps } from "../../../../Data/eventData";

const EventCard: React.FC<EventProps> = ({ title, organizer, time, location, image }) => {
  return (
   <div className="events-container">
     <div className="event-card">
      <div className="event-header">
        <FaUserCircle className="event-organizer-img" size={50} />
        <div className="event-info">
          <h2 className="event-title">{title}</h2>
          <p className="event-subtitle">Led by {organizer}</p>
        </div>
      </div>
      <img src={image} alt={title} className="event-image" />
      <p className="event-description">
        Join us <span className="span">{time}</span> at <span>{location}</span> for an engaging <span>{title.toLowerCase()}</span> session.
      </p>
      <div className="event-actions">
        <button className="action-button">Confirm Attendance</button>
        <button className="action-button">Share <IoMdSend /></button>
      </div>
    </div>
   </div>
  );
};

const Events: React.FC = () => {
  return (
    <section>
      <h1>Explore MUTC Events</h1>
      <div className="events-container">
        {eventsData.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
