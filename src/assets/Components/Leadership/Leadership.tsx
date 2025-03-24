import "./Leadership.css";
import ndiaImg from "../../images/ndia.jpg"
function Leadership() {
  return (
    <section>
      <h1>Meet our dedicated leadership</h1>
      <div className="leadership-card">
        <div className="leader-image">
          <img src={ndiaImg} alt="" />
        </div>
        <div className="leadership-details">
          <p className="leader-name">John Ndia</p>
          <p className="leader-position">Club Patron</p>
          <p className="leader-bio">Please create a brief biography for him and use any suitable placeholder images found online for his profile picture</p>
          <div className="leadership-social-media">
            <p>Inst</p>
            <p>Tw</p>
            <p>Fb</p>
            <p>Lik</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Leadership;
