import cyberTrackImg from "../../../images/cyber-track.jpg"
import uiuxImg from "../../../images/uiux.jpg"
import webImg from "../../../images/webdevelepoment.png"
import mobileImg from "../../../images/mobile app.jpg"
import cloudengImg from "../../../images/cloudeng.jpg"
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

        <div className="track-card">
          <img
            src={uiuxImg}
            alt="UI/UX Design"
            className="track-image"
          />
          <div className="track-content">
            <span className="track-category">It & Computer Science</span>
            <h2 className="track-title">UI/UX Design</h2>
            <div className="track-description">
            Students who enroll in the UI/UX Design track will explore the principles of creating user-friendly and visually appealing interfaces. They will learn about user research, wireframing, prototyping, and usability testing. Through practical projects and interactive workshops, students will gain hands-on experience in designing intuitive user interfaces and enhancing user experiences. By the end of the track, students will be proficient in using industry-standard design tools and techniques, enabling them to create effective, user-centric designs for websites and mobile applications.
            </div>
            <button className="learn-more">Learn More →</button>
          </div>
        </div>


        <div className="track-card">
          <img
            src={webImg}
            alt="Cyber Security"
            className="track-image"
          />
          <div className="track-content">
            <span className="track-category">It & Computer Science</span>
            <h2 className="track-title">Web Development</h2>
            <div className="track-description">
            Students who pursue the Web Development track will gain comprehensive knowledge in building dynamic and responsive websites. They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites.
            </div>
            <button className="learn-more">Learn More →</button>
          </div>
        </div>

        <div className="track-card">
          <img
            src={mobileImg}
            alt="Cyber Security"
            className="track-image"
          />
          <div className="track-content">
            <span className="track-category">It & Computer Science</span>
            <h2 className="track-title">Mobile Apps Development</h2>
            <div className="track-description">
            Students who opt for the Mobile Apps Development track will learn to design and build applications for mobile devices. They will explore the basics of mobile app development using platforms such as Android and iOS, gaining proficiency in languages like Java, Kotlin, Swift, and Dart. Through hands-on projects and interactive sessions, students will develop the skills to create user-friendly and efficient mobile applications. By the end of the track, students will be adept at building, testing, and deploying mobile apps, ready to deliver engaging and high-performance solutions for smartphones and tablets.
            </div>
            <button className="learn-more">Learn More →</button>
          </div>
        </div>


        <div className="track-card">
          <img
            src={cloudengImg}
            alt="Cyber Security"
            className="track-image"
          />
          <div className="track-content">
            <span className="track-category">It & Computer Science</span>
            <h2 className="track-title">Cloud Engineering</h2>
            <div className="track-description">
            Students who choose the Cloud Engineering track will dive into the world of cloud computing and its applications. They will learn about various cloud service providers such as AWS, Google Cloud, and Microsoft Azure, and understand how to design, deploy, and manage scalable and secure cloud infrastructures. Through practical projects and hands-on labs, students will gain experience in cloud architecture, virtualization, containerization, and DevOps practices. By the end of the track, students will be capable of leveraging cloud technologies to build and maintain robust cloud-based solutions, ensuring high availability and performance for applications and services.
            </div>
            <button className="learn-more">Learn More →</button>
          </div>
        </div>


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
