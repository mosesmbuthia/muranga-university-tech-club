import {Link} from "react-router-dom"
import "./Navbar.css"
import { GrTechnology } from "react-icons/gr";

function Navbar () {
    return (
      <nav className="navbar">
        <h1> <GrTechnology /> Murang'a university tech club</h1>
        <ul>
          <li>
            <Link to="/" >Home</Link> 
          </li>
          <li>
            <Link to="/leadership" >Leadership</Link> 
          </li>
          <li>
            <Link to="/tracks" >Tracks</Link> 
          </li>
          <li>
            <Link to="/events" >Events</Link> 
          </li>
        </ul>
      </nav>
    )
  }
export default Navbar  