import cyberTrackImg from "../../../images/cyber-track.jpg"
import "./Tracks.css"
function Tracks() {
  return (
    <section>
      <h1>Explore our Tracks</h1>
      <div className="tracks-container">
      <div className="track-card">
      <img
        src={cyberTrackImg}
        alt="Cyber Security"
        className="track-image"
      />
      <div className="track-content">
        <span className="track-category">It & Computer Science</span>
        <h2 className="track-title">Cyber Security</h2>
        <div className="track-description">
        Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks.
        </div>
        <button className="learn-more">Learn More →</button>
      </div>
    </div>
      
      </div>
    </section>
  )
}

export default Tracks
