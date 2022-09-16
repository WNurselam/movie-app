import { NavLink } from "react-router-dom";
import "./style.scss";


export const Header = () => {
  
  return (
    <div className="navbar">
      <div className="innerNav">
      <NavLink to="/" className="logo">
          MOVIE PARADISE
        </NavLink>
        <ul className="menu">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">FAVORİTES</NavLink>
          </li>
          <li>
          </li>
        </ul>
      
      </div>
      
    </div>
  );
};
