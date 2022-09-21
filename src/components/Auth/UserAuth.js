import React from "react";
import { useUserAuth } from "../../context/userAuthContext";
import { useNavigate, Link } from "react-router-dom";

const UserAuth = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="userAuth">
      <div>
      {user ? (
        <div className="user">
           {user.email}

          <i onClick={handleLogout} className="bx bx-log-in-circle bx-md"></i>
        </div>
      ) : (
        <Link to="/login">
          <i className="bx bx-log-in-circle bx-md login-i"></i>
        </Link>
      )}
      
      </div>
    </div>
  );
};

export default UserAuth;
