import { NavLink } from "react-router-dom";
import "./style.scss";
import UserAuth from "../Auth/UserAuth";


export const Header = () => { 
  return (
    <div className="navbar">
      <div className="innerNav">   
      <NavLink to="/" className="logo">
          MOVIE PARADISE
        </NavLink>
       <UserAuth/>
        <ul className="menu">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">FAVORİTES</NavLink>
          </li>   
        </ul>    
      </div>  
    </div>
  );
};
