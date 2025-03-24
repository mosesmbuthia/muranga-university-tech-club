import "./Leadership.css";
import { FaInstagram, FaXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { teamMembers, TeamMember } from "../../../Data/teamData";

function LeadershipCard({ name, position, bio, image, socialLinks }: TeamMember) {
  return (
    <div className="leadership-card">
      <div className="leader-image">
        <img src={image} alt={name} />
      </div>

      <div className="leadership-details">
        <p className="leader-name">{name}</p>
        <p className="leader-position">{position}</p>
        <p className="leader-bio">{bio}</p>

        <div className="leadership-social-media">
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" >
              <FaInstagram />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" >
              <FaXTwitter />
            </a>
          )}
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} target="_blank" >
              <FaFacebook />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" >
              <FaLinkedin />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Leadership() {
  return (
    <section>
      <h1>Meet our dedicated leadership</h1>
      <div className="leadership-container">
        {teamMembers.map((member) => (
          <LeadershipCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}

export default Leadership;
